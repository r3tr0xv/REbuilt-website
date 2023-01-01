import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DeclineOrderComponent } from './components/decline-order/decline-order.component';
import { DisplayOrderComponent } from './components/display-order/display-order.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { OrderConfirmDeclineComponent } from './components/order-confirm-decline/order-confirm-decline.component';
import { OrdersDashboardComponent } from './components/orders-dashboard/orders-dashboard.component';
import { OrdersComponent } from './components/orders/orders.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ShopComponent } from './components/shop/shop.component';
import { SignupComponent } from './components/signup/signup.component';
import { TrackSalesComponent } from './components/track-sales/track-sales.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'contact',component:ContactUsComponent},
  {path:'about',component:AboutUsComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'addAdmin',component:AddAdminComponent},
  {path:'addProduct',component:AddProductComponent},
  {path:'adminDashboard',component:AdminDashboardComponent},
  {path:'shop',component:ShopComponent},
  {path:'salesTracker',component:TrackSalesComponent},
  {path:'usersDashboard',component:ManageUsersComponent},
  {path:'productsDashboard/:id',component:ProductsDashboardComponent},
  {path:'clientProfile/:id',component:ClientProfileComponent},
  {path:'updateProduct/:id',component:UpdateProductComponent},
  {path:'displayOrder/:id',component:DisplayOrderComponent},
  {path:'myOrders/:id',component:OrdersDashboardComponent},
  {path:'mySales/:id',component:OrdersComponent},
  {path:'checkOrder/:id',component:OrderConfirmDeclineComponent},
  {path:'decline/:id',component:DeclineOrderComponent},
  {path:'search',component:SearchResultComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
