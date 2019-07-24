import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

//screens

import { StarterViewComponent } from "./screens/dashboard/starterview.component";

//Entrance
import { LoginComponent } from "./screens/entrance/login/login.component";
import { RegisterComponent } from "./screens/entrance/register/register.component";
import { ForgotPasswordComponent } from "./screens/entrance/forgotpassword/forgotpassword.component";
import { LockComponent } from "./screens/entrance/lock/lock.component";
import { TermsComponent } from "./screens/entrance/terms/terms.component";

//Products
import { ProductsListComponent } from "./screens/products/list/products.list.component";
import { ProductsRegisterComponent } from "./screens/products/register/products.register.component";
import { ProductsImportComponent } from "./screens/products/import/products.import.component";

import { AlertsComponent } from "./screens/alerts/alerts.component";
import { FaqComponent } from "./screens/faq/faq.component";
import { OrdersComponent } from "./screens/orders/orders.component";
import { ContactComponent } from "./screens/contact/contact.component";
import { SettingsNotificationsComponent } from "./screens/settings/notifications/settings.notifications.component";

import { PeityModule } from '../components/charts/peity';
import { SparklineModule } from '../components/charts/sparkline';

import { WidgetsModule } from "../components/widgets/widgets.module"

// Chart.js Angular 2 Directive by Valor Software (npm)
import { ChartsModule } from 'ng2-charts/ng2-charts';

import { FlotModule } from '../components/charts/flotChart';
import { IboxtoolsModule } from '../components/common/iboxtools/iboxtools.module';
import { JVectorMapModule } from '../components/map/jvectorMap';

@NgModule({
  declarations: [
    StarterViewComponent,
    ProductsListComponent,
    ProductsRegisterComponent,
    ProductsImportComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    TermsComponent,
    AlertsComponent,
    FaqComponent,
    OrdersComponent,
    ContactComponent,
    SettingsNotificationsComponent,
    LockComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    PeityModule,
    SparklineModule,
    WidgetsModule,
    ChartsModule,
    FlotModule,
    IboxtoolsModule,
    JVectorMapModule
  ],
  exports: [
    StarterViewComponent,
    LoginComponent,
    ProductsListComponent,
    ProductsRegisterComponent,
    AlertsComponent,
    FaqComponent,
    OrdersComponent,
    ContactComponent,
    SettingsNotificationsComponent
  ],
})

export class AppviewsModule {
}
