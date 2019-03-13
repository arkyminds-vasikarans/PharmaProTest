import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MatTableModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule
} from '@angular/material';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SaleComponent } from './pages/sale/sale.component';
import { LoginComponent } from './pages/login/login.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SaleReturnComponent } from './pages/sale-return/sale-return.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { PurchaseReturnComponent } from './pages/purchase-return/purchase-return.component';
import { UsersComponent } from './pages/users/users.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { HeaderComponent } from './pages/header/header.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SkuListComponent } from './pages/sku/sku-list/sku-list.component';
import { SkuEditComponent } from './pages/sku/sku-edit/sku-edit.component';
import { WebviewDirective } from './directives/webview.directive';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function createTranslateLoader(http: HttpClient) {   
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,      
        SaleComponent,
        LoginComponent,
        ReportsComponent,
        SaleReturnComponent,
        PurchaseComponent,
        PurchaseReturnComponent,
        UsersComponent,
        CustomersComponent,
        HeaderComponent,
        SidebarComponent,
        SkuEditComponent,
        SkuListComponent, WebviewDirective
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatTableModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatGridListModule,
        MatButtonModule,
        AppRoutingModule,
        RouterModule,
        TranslateModule.forRoot(),
        BsDropdownModule.forRoot(),
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
