import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GsessionService } from '../../providers/gsession.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router, public session:GsessionService) { }

  ngOnInit() {
  }
  goToSkus(){
    this.router.navigate(['/skuList'])
  }

}
