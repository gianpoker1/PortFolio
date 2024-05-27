import { Component } from '@angular/core';
import { CertificadosComponent } from '../certificados/certificados.component';
import { RouterLink } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CertificadosComponent, RouterLink, MatDialogModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
