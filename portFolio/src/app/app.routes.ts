import { Routes } from '@angular/router';
import { CertificadosComponent } from './certificados/certificados.component';
import { InicioComponent } from './inicio/inicio.component';
import { ImagenModalComponent } from './imagen-modal/imagen-modal.component';
import { ProyectosComponent } from './proyectos/proyectos.component';


export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'certificados', component: CertificadosComponent},
    {path: 'imagen-model', component: ImagenModalComponent},
    {path: 'proyectos', component: ProyectosComponent}
];

