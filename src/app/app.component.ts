import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})

export class AppComponent implements OnInit {

  user = null;
  title = 'Sanoop Jose';
  dataReady = true;
  topics: FirebaseListObservable<any[]>;

  constructor(
    private auth: AuthService,
    public db: AngularFireDatabase) { }

  

  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
      this.topics = this.db.list('/topics');
      console.log('Topics: ', this.topics);
  }

  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
}