const app = require('./backend/app') // importing Express JS
app.listen(3000 ,()=>{
    console.log("Server Enabled");
    console.log("waiting for commands");
})