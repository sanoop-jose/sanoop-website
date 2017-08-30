import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './contact.component.html'
})
export class ContactComponent implements OnInit {
  title = 'Contact';
  user = null;
  adminDetails: FirebaseObjectObservable<any>;

  constructor(
    public db: AngularFireDatabase) { }

  ngOnInit() {
   this.adminDetails = this.db.object('/adminDetails');
      console.log('Topics: ', this.adminDetails);
      
  }
}
