import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogClose, MatDialogContent} from '@angular/material/dialog';

@Component({
  selector: 'app-imagen-modal',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogClose
  ],
  templateUrl: './imagen-modal.component.html',
  styleUrl: './imagen-modal.component.css'
})
export class ImagenModalComponent implements OnInit{

  rutaImagen: string = '';//inicializo

  constructor(@Inject(MAT_DIALOG_DATA) public data:{rutaImagen: string }) { 
    this.rutaImagen = data.rutaImagen;//asigno la ruta 
  }

  ngOnInit(): void {
  }

}
