import { Component, OnInit } from '@angular/core';
import {Libro} from '../../interfaces/libro';


const ELEMENT_DATA: Libro[] = [
    { id: 1, name: 'Jorge the best(?)', author: '@jorgeucano', portada: 'https://pbs.twimg.com/profile_images/1041714024747073536/7V5fzuQv_400x400.jpg', cantidad: 10 },
    { id: 1, name: 'Jorge the best(?)', author: '@jorgeucano', tema: 'History of my life', cantidad: 10 },
    { id: 1, name: 'Jorge the best(?)', author: '@jorgeucano', portada: 'https://pbs.twimg.com/profile_images/1041714024747073536/7V5fzuQv_400x400.jpg', cantidad: 10 },
    { id: 1, name: 'Jorge the best(?)', author: '@jorgeucano', tema: 'History of my life', fecha: new Date(), cantidad: 10 },
    { id: 1, name: 'Jorge the best(?)', author: '@jorgeucano', portada: 'https://pbs.twimg.com/profile_images/1041714024747073536/7V5fzuQv_400x400.jpg', cantidad: 10 }
];

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

    displayedColumns: string[] = ['id', 'name', 'author', 'portada', 'tema', 'fecha', 'cantidad'];
    dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit() {
  }

}
