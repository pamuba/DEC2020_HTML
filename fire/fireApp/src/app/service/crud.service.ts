import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(public fireService:AngularFirestore) { }

  create_NewEmployee(Record){
    return this.fireService.collection('Employee').add(Record)
  }
}
