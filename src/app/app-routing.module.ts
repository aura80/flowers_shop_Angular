import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ClientsComponent } from './Components/clients/clients.component';
import { OfferComponent } from './Components/offer/offer.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ClientEditComponent } from './Components/client-edit/client-edit.component';
import { ClientGetbyComponent } from './Components/client-getby/client-getby.component';
import { ProductEditComponent } from './Components/product-edit/product-edit.component';
import { ProductGetbyComponent } from './Components/product-getby/product-getby.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { OrderEditComponent } from './Components/order-edit/order-edit.component';
import { OrderGetbyComponent } from './Components/order-getby/order-getby.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'offer', component: OfferComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'clients/:id', component: ClientEditComponent },
  { path: 'clients/by/:id', component: ClientGetbyComponent },
  { path: 'clients/:name', component: ClientGetbyComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'products/:id', component: ProductEditComponent },
  { path: 'products/by/:id', component: ProductGetbyComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'orders/:id', component: OrderEditComponent },
  { path: 'orders/by/:id', component: OrderGetbyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
