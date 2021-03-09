import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//2. Importar los componentes
import {HomeComponent} from './home/home.component';
import {PecesComponent} from './peces/peces.component';
import {AccesoriosComponent} from './accesorios/accesorios.component';

//3. Identificamos nuestro array de rutas y agregar rutas de proyecto
const routes: Routes = [
	{path:'home', component: HomeComponent},
	{path: 'peces', component: PecesComponent},
	{path: 'accesorios', component: AccesoriosComponent},
	{path: '**', component:HomeComponent}
];

//4. Exportar rutas
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
/*@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})*/

//export class AppRoutingModule { }
