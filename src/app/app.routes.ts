import { Routes } from "@angular/router";

//screens
import { StarterViewComponent } from "./views/screens/dashboard/starterview.component";

//entrance
import { LoginComponent } from "./views/screens/entrance/login/login.component";
import { RegisterComponent } from "./views/screens/entrance/register/register.component";
import { ForgotPasswordComponent } from "./views/screens/entrance/forgotpassword/forgotpassword.component";
import { LockComponent } from "./views/screens/entrance/lock/lock.component";
import { TermsComponent } from "./views/screens/entrance/terms/terms.component";

//products
import { ProductsListComponent } from "./views/screens/products/list/products.list.component";
import { ProductsRegisterComponent } from "./views/screens/products/register/products.register.component";
import { ProductsImportComponent } from "./views/screens/products/import/products.import.component";

import { AlertsComponent } from "./views/screens/alerts/alerts.component";
import { FaqComponent } from "./views/screens/faq/faq.component";
import { OrdersComponent } from "./views/screens/orders/orders.component";
import { ContactComponent } from "./views/screens/contact/contact.component";
import { SettingsNotificationsComponent } from "./views/screens/settings/notifications/settings.notifications.component"

import { BlankLayoutComponent } from "./components/common/layouts/blankLayout.component";
import { BasicLayoutComponent } from "./components/common/layouts/basicLayout.component";
import { TopNavigationLayoutComponent } from "./components/common/layouts/topNavigationlayout.component";

export const ROUTES: Routes = [
  // Main redirect
  { path: '', redirectTo: 'starterview', pathMatch: 'full' },

  // App views
  {
    path: '', component: BasicLayoutComponent,
    children: [{ path: 'starterview', component: StarterViewComponent },]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [{ path: 'login', component: LoginComponent },]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [{ path: 'tela-de-bloqueio', component: LockComponent },]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [{ path: 'cadastro', component: RegisterComponent },]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [{ path: 'esqueci-minha-senha', component: ForgotPasswordComponent },]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [{ path: 'termos-de-uso', component: TermsComponent },]
  },
  {
    path: '', component: BlankLayoutComponent,
    children: [{ path: 'politicas-de-privacidade', component: TermsComponent },]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [
      { path: 'produtos', component: ProductsListComponent },
      { path: 'produtos/cadastrar', component: ProductsRegisterComponent },
      { path: 'produtos/importar', component: ProductsImportComponent }
    ]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [{ path: 'alertas', component: AlertsComponent }]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [{ path: 'cobranca', component: OrdersComponent }]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [{ path: 'faq', component: FaqComponent }]
  },
  {
    path: '', component: BasicLayoutComponent,
    children: [{ path: 'contato', component: ContactComponent }]
  },
  {
    path: 'configuracoes', component: BasicLayoutComponent,
    children: [
      { path: 'notificacoes', component: SettingsNotificationsComponent }
    ]
  },

  // Handle all other routes
  { path: '**', redirectTo: 'starterview' }
];
