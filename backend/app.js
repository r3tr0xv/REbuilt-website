// Importing Modules //
const express = require("express"); // import express module
const bodyParser = require("body-parser"); // import body-parser module
const mongoose = require("mongoose"); // import mongoose module
const bcrypt = require("bcrypt"); // import bcrypt module
const path = require("path");
const multer = require("multer");  //import multer module
const app = express(); // create express app
app.use(express.json());
mongoose.connect("mongodb://localhost:27017/RebuiltDB"); // connect with MongoDb
const { url } = require("inspector");
// Importing models //
const users = require("./models/users"); // importing users model
const products = require("./models/products"); // importing products model
const orders = require("./models/orders"); // importing orders model
app.use(bodyParser.urlencoded({ extended: false}));
// stockage des images dans le dossier backend //
app.use("/images", express.static(path.join("backend/images")));

// parse application/json
app.use(bodyParser.json());

// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, Accept, Content-Type, X-Requested-with, Authorization");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, DELETE, OPTIONS, PATCH, PUT");
  next();
});

 //multer config 
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/jpg": "jpg",
};
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

// User Module CRUD //

// Signup user
app.post("/user/signup",async (req, res) => {
    const email = await users.findOne({ email: req.body.email });
    if (email) {
      res.status(200).json({
        message: "email exists",
      });
    } else {
      bcrypt.hash(req.body.password, 10, function (err, hash) {
        if (err) {
          console.log(err);
        } else {
          const user = new users({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            tel: req.body.tel,
            region: req.body.region,
            role: req.body.role,
          });
          user.save().then(() => {
            res.status(200).json({
              message: "successful signup",
            });
          });
        }
      });
    }
  }
);

// Login user
app.post("/user/login", async (req, res) => {
  const user = await users.findOne({ email: req.body.email });
  if (!user) {
    res.status(200).json({
      message: "incorrect email",
    });
  } else {
    const correctPwd = await bcrypt.compare(req.body.password, user.password);
    if (!correctPwd) {
      res.status(200).json({
        message: "incorrect password",
      });
    } else {
      let findedUser = {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        role: user.role,
      };
      res.status(200).json({
        message: "successful login",
        user: findedUser,
      });
    }
  }
});

// Display user details
app.get("/user/:id", (req, res) => {
  users.findOne({ _id: req.params.id }).then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        user : findedObject,
      });
    }
  });
});

// Update user details
app.put("/user/:id", (req, res) => {
  const user = {
    _id: req.body._id,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    tel: req.body.tel,
    region: req.body.region,
  };
  users.updateOne({ _id: req.params.id }, user).then(() => {
    res.status(200).json({
      message: "account updated",
    });
  });
});

// Delete user account
app.delete("/user/:id", (req, res) => {
  users.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({ 
      message: "account deleted" 
    });
  });
  products.deleteMany({ idOwner: req.params.id }).then(() => {
    res.status(200).json({ 
      message: "products deleted"
    });
  });
});

// Display users
app.get("/user", (req, res) => {
  users.find({ role: "client" }).then((findedObject) => {
    res.status(200).json({
      data: findedObject,
    });
  });
});

// Product Module CRUD // 

// Add Product
app.post("/product/addProduct",multer({ storage: storage }).single("image"),(req, res) => {
  let url = req.protocol + "://" + req.get("host");
  const product = new products({
    name : req.body.name,
    price : req.body.price,
    description : req.body.description,
    region : req.body.region,
    category : req.body.category,
    image : url + "/images/" + req.file.filename,
    idOwner: req.body.idOwner,
  });
  product.save().then(() => {
    res.status(200).json({
    remessage: "product added",
    });
  });
});

// Display user products
app.get("/product/:id", (req, res) => {
  products.find({ idOwner : req.params.id }).populate("idOwner").then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        products: findedObject,
      });
    }
  });
});

// Display Single Product
app.get("/product/updateProduct/:id",multer({ storage: storage }).single("image"),(req, res) => {
  products.findOne({ _id: req.params.id }).then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        product: findedObject,
      });
    }
  });
});

// Display Store 
app.get("/product",multer({ storage: storage }).single("image"),(req, res) => {
  products.find().populate("idOwner").then((findedObject) => {
    res.status(200).json({
      products: findedObject,
    });
  });
})

// Update Product
app.put("/product/updateProduct/:id",multer({ storage: storage }).single("image"),(req, res) => {
  let url = req.protocol + "://" + req.get("host");
  const product = {
    name : req.body.name,
    price : req.body.price,
    description : req.body.description,
    region : req.body.region,
    category : req.body.category,
    image : url + "/images/" + req.file.filename,
    idOwner: req.body.idOwner,
  };
  products.updateOne({ _id: req.params.id }, product).then(() => {
    res.status(200).json({
      message: "product updated",
    });
  });
});

// Delete product
app.delete("/product/:id", (req, res) => {
  products.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({ 
      message: "product deleted"
    });
  });
});

// Orders module CRUDS

// Display single Product
app.get("/product/order/:id",multer({ storage: storage }).single("image"),(req, res) => {
  products.findOne({ _id: req.params.id }).populate("idOwner").then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        order: findedObject,
      });
    }
  });
});

// Post order
app.post("/order/displayOrder",(req, res) => {
  const order = new orders({
    status : req.body.status,
    idBuyer : req.body.idBuyer,
    idOwner : req.body.idOwner,
    idProduct : req.body.idProduct,
  });
  order.save().then(() => {
    res.status(200).json({
    remessage: "order added",
    });
  });
});
// Display client orders
app.get("/order/myOrders/:id", (req, res) => {
  orders.find({ idBuyer : req.params.id }).populate("idProduct").populate("idOwner").then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        orders: findedObject,
      });
    }
  });
});
// Display Seller orders
app.get("/order/mySales/:id", (req, res) => {
  orders.find({ idOwner : req.params.id }).populate("idProduct").populate("idBuyer").then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        sales: findedObject,
      });
    }
  });
});
// Display single order
app.get("/order/checkOrder/:id",(req, res) => {
  orders.findOne({ _id: req.params.id }).populate("idProduct").populate("idBuyer").then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        order: findedObject,
      });
    }
  });
});
// Update Order
app.put("/order/checkOrder/:id", (req, res) => {
  const order = {
    status : req.body.status,
    idBuyer : req.body.idBuyer,
    idOwner : req.body.idOwner,
    idProduct : req.body.idProduct,
  };
  orders.updateOne({ _id: req.params.id }, order).then(() => {
    res.status(200).json({
      message: "order updated",
    });
  });
});
// delete order
app.delete("/order/decline/:id", (req, res) => {
  orders.deleteOne({ _id: req.params.id }).then(() => {
    res.status(200).json({ 
      message: "order declined"
    });
  });
});
// Order Decline card
app.get("/order/decline/:id",(req, res) => {
  orders.findOne({ _id: req.params.id }).populate("idProduct").populate("idOwner").then((findedObject) => {
    if (findedObject) {
      res.status(200).json({
        order: findedObject,
      });
    }
  });
});
module.exports = app;
