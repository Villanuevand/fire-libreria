import { Component, OnInit } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-abm',
  templateUrl: './abm.component.html',
  styleUrls: ['./abm.component.scss']
})
export class AbmComponent implements OnInit {

    books: Observable<any[]>;
    bookSelected: any = {};
    numero: string;
    titulo: string;
    fecha: string;
    cantidad: string;
    precio: string;

  constructor(private db: AngularFirestore) {
      // obtengo la lista de libros
      this.books = this.db.collection('book').snapshotChanges().pipe(
          map((collection) => {
              const data: any = collection;
              const _data = [];
              data.forEach(d => {
                  const _d = d.payload.doc.data();
                  const id = d.payload.doc.id;
                  _data.push({ id, ..._d });
              });
              return _data;
          })
      );
  }

  ngOnInit() { }

  save() {
      const data = {
          numero: this.numero,
          titulo: this.titulo,
          fecha: this.fecha,
          cantidad: this.cantidad,
          precio: this.precio
      };
    this.db.collection('book').add(data).then(
        (response) => {
            console.log(response);
            document.getElementById('closeAgregar').click();
        },
        (error) => {
            console.log(error);
            document.getElementById('closeAgregar').click();
        }
    );
  }

  delete() {
    this.db.doc(`book/${this.bookSelected.id}`).delete().then(
        (response) => {
            console.log(response);
            document.getElementById('closeDelete').click();
        },
        (error) => {
            console.log(error);
            document.getElementById('closeDelete').click();
        }
    );
  }

  update() {
    this.db.doc(`book/${this.bookSelected.id}`).update(this.bookSelected).then(
        (response) => {
            console.log(response);
            document.getElementById('closeEdit').click();
        },
        (error) => {
            console.log(error);
            document.getElementById('closeEdit').click();
        }
    );
  }

}
