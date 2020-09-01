import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';
import { LibraryserviceService } from './shared/libraryservice.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { LibraryComponent } from './library/library.component';
import { BooksComponent } from './library/books/books.component';
import { BookListComponent } from './library/book-list/book-list.component';


@NgModule({
  declarations: [
    AppComponent,
    LibraryComponent,
    BooksComponent,
    BookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [LibraryserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
