import { Injectable } from '@angular/core';
import { Library } from './library.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LibraryserviceService {
  formData: Library;
  constructor(private afs : AngularFirestore) { }
  
  getBooks(){
    return this.afs.collection('library').snapshotChanges();//call in component
  }
}
