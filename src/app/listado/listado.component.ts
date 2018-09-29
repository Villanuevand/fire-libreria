import { Component } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss']
})
export class ListadoComponent {

    books: Observable<any[]>;

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


}
