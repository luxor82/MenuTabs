import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
 
  constructor(public navCtrl: NavController, private http: HTTP ) {
  
  }
 promise: Promise<any>;
  test(){

   this.promise = this.http.get('http://localhost:8080/HelloStruts/Ionic', {}, {})
    .then(data => {
      var testo= "OK " + data + " " ;
      console.log("OK");
      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);
      var input= document.getElementById("log") as HTMLInputElement;
      input.textContent=testo + " " + this.promise;
    })
    .catch(error => {
      var testo= "KO " + error;
      console.log("Error");
      console.log(error.status);
      console.log(error); // error message as string
      var input= document.getElementById("log") as HTMLInputElement;
      input.textContent=testo + " " + this.promise;
  
    });
  }
  
}
