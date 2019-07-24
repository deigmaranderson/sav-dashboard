import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";

import { WidgetInfoTotal } from "./info_total/infototal.component"
import { WidgetAlertProduct } from "./alert_products_expire/alertproduct.component"
import { WidgetAlertPostit } from "./alert_postit/alertpostit.component"

@NgModule({
  declarations: [
    WidgetInfoTotal,
    WidgetAlertProduct,
    WidgetAlertPostit
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  exports: [
    WidgetInfoTotal,
    WidgetAlertProduct,
    WidgetAlertPostit
  ]
})

export class WidgetsModule { }
