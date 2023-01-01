import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CollectionComponent } from './components/collection/collection.component';
import { HotDealComponent } from './components/hot-deal/hot-deal.component';
import { NewsLetterComponent } from './components/news-letter/news-letter.component';
import { FooterComponent } from './components/footer/footer.component';
import { TopHeaderComponent } from './components/top-header/top-header.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ClientProfileComponent } from './components/client-profile/client-profile.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { AddAdminComponent } from './components/add-admin/add-admin.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ShopComponent } from './components/shop/shop.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { TrackSalesComponent } from './components/track-sales/track-sales.component';
import { UserProductsComponent } from './components/user-products/user-products.component';
import { ProductsDashboardComponent } from './components/products-dashboard/products-dashboard.component';
import { UpdateProductComponent } from './components/update-product/update-product.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { DisplayOrderComponent } from './components/display-order/display-order.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrdersDashboardComponent } from './components/orders-dashboard/orders-dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderConfirmDeclineComponent } from './components/order-confirm-decline/order-confirm-decline.component';
import { DeclineOrderComponent } from './components/decline-order/decline-order.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductsComponent,
    CollectionComponent,
    HotDealComponent,
    NewsLetterComponent,
    FooterComponent,
    TopHeaderComponent,
    LoginComponent,
    SignupComponent,
    AdminDashboardComponent,
    ClientProfileComponent,
    AddProductComponent,
    AddAdminComponent,
    ContactUsComponent,
    AboutUsComponent,
    ShopComponent,
    ManageUsersComponent,
    TrackSalesComponent,
    UserProductsComponent,
    ProductsDashboardComponent,
    UpdateProductComponent,
    FilterPipe,
    SearchResultComponent,
    DisplayOrderComponent,
    OrdersComponent,
    OrdersDashboardComponent,
    OrderConfirmDeclineComponent,
    DeclineOrderComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
