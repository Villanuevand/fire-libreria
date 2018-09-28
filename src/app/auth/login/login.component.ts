import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase';
import {SharedService} from '../../service/shared-service';

import { first, tap } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    message: string;
    constructor(private afAuth: AngularFireAuth, private sharedService: SharedService, private router: Router) { }

  ngOnInit() {
        // check user is login
      this.afAuth.authState.pipe(first()).pipe(
          tap(user => {
              if (user) {
                  console.log(user);
                  this.sharedService.user = (<any>user).user;
                  this.router.navigate(['/libreria/']);
              }
          })
      )
          .subscribe();
    }

  loginGoogle() {
      this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
          .then(
            (response) => {
                  console.log('then response', response);
                  if (response.operationType === 'SignIn') {
                      this.sharedService.user = response.user;
                      this.router.navigate(['/libreria/']);
                  }
            }
          ).catch(
            (err) => {
                console.log('catch err', err);
                if (err.code === 'auth/popup-closed-by-use') {
                    this.message = 'Por favor, logueate y no cierres la ventana';
                }
            }
          )
  }

}
