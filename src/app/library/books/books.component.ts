import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { LibraryserviceService } from 'src/app/shared/libraryservice.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  
  categories = ['Adventure','Classic','Action','Romantic','Historic','Inspirational'];
  constructor(public service: LibraryserviceService,
              private afs:AngularFirestore,
              private toastr : ToastrService) { }

  ngOnInit(){
    this.resetForm();
  }
  
  resetForm(rmForm?:NgForm){
     
    if(rmForm!=null){
      rmForm.resetForm();//from angular
    }
   
    this.service.formData = {
       
      id:null,
      Bookname:"",
      author:"",
      category:""
    }

  }
  onSubmit(form:NgForm){
    let data = Object.assign({}, form.value);
    delete data.id;
    if(form.value.id == null){
      this.afs.collection('library').add(data);
    }
    else
      this.afs.doc('library/'+form.value.id).update(data);
      this.resetForm(form);
      this.toastr.success('Submitted successfully');
    
  }
}
