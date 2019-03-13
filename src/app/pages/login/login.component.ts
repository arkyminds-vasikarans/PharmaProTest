import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GsessionService } from '../../providers/gsession.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, public session:GsessionService) { }

  ngOnInit() {
  }
  login() {
    this.session.isLoggedIn = true;
    this.router.navigate(['/home']);
  }
}
