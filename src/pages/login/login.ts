import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 
  constructor(public navCtrl: NavController, public http: HTTP ) {
  
  }

  test(){

    this.http.get('http://localhost:8080/HelloStruts/Ionic', {}, {})
    .then(data => {
  
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
  
    })
    .catch(error => {
  
      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);
  
    });
  }
  
}
