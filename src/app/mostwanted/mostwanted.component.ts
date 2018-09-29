import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFirestore} from '@angular/fire/firestore';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-mostwanted',
  templateUrl: './mostwanted.component.html',
  styleUrls: ['./mostwanted.component.scss']
})
export class MostwantedComponent {

    books: Observable<any[]>;

    constructor(private db: AngularFirestore) {
        // obtengo la lista de libros
        this.books = this.db.collection('book', ref => ref.where('stock', '<', '151')).snapshotChanges().pipe(
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
