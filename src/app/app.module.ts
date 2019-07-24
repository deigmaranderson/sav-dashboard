import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { ROUTES } from "./app.routes";
import { AppComponent } from './app.component';

// App views
import { AppviewsModule } from "./views/view.module";

// App modules/components
import { LayoutsModule } from "./components/common/layouts/layouts.module";
import { environment } from 'environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    LayoutsModule,
    AppviewsModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: "BASE_API_URL", useValue: environment.api_url },
    { provide: "APP_ID", useValue: environment.app_id },
    { provide: "APP_TOKEN", useValue: environment.app_token }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
