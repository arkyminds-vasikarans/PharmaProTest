
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SkuListComponent } from './pages/sku/sku-list/sku-list.component';
import { SkuEditComponent } from './pages/sku/sku-edit/sku-edit.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },{
        path: 'home',
        component: HomeComponent
    },{
        path: 'skuList',
        component: SkuListComponent
    },{
        path: 'skuEdit/:skuId',
        component: SkuEditComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
