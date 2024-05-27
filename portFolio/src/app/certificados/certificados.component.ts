import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ImagenModalComponent } from '../imagen-modal/imagen-modal.component';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-certificados',
  standalone: true,
  imports: [CommonModule, MatDialogContent, MatDialogActions,
    MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, RouterLink, MatDialogModule
  ],
  templateUrl: './certificados.component.html',
  styleUrl: './certificados.component.css'
})
export class CertificadosComponent {
  animal!: string;
  name!: string;

  dialogRef: MatDialogRef<ImagenModalComponent> | null= null; //inicializo la referencia del dialogo
  constructor(private dialog: MatDialog) { }

  ampliarImagen(rutaImagen: string): void{
    if(!this.dialogRef){
      this.dialogRef = this.dialog.open(ImagenModalComponent, {
        data: { rutaImagen },
      });
    }
    // }else {
    //   this.dialogRef.afterClosed().subscribe(result => {//
    //     if(!result && this.dialogRef){
    //       this.dialogRef.componentInstance.rutaImagen = rutaImagen;
    //     }else{
          
    //     }
    //     });
    //   }

        this.dialogRef.afterClosed().subscribe(result => {

          this.dialogRef = null;
        });
    
  }

}


