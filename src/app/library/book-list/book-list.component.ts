import { Component, OnInit } from '@angular/core';
import { LibraryserviceService } from 'src/app/shared/libraryservice.service';
import { Library } from 'src/app/shared/library.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  list: Library[];//model
  constructor(public service:LibraryserviceService,private afs: AngularFirestore) { }

  ngOnInit(){
     
    this.service.getBooks().subscribe(res =>{
        this.list = res.map(item=>{
          return {
            id:item.payload.doc.id,
            ...item.payload.doc.data()  as Library }
          
        })
    });
    
  }

  Update(book:Library){
    this.service.formData = Object.assign({},book);
  }

  Delete(id:string){
    if(confirm('Are you sure')){
      this.afs.doc('library/'+id).delete();
    }
  }

 

}
