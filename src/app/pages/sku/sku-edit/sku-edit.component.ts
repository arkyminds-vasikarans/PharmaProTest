import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Route, Router } from "@angular/router";
import { DatabaseService } from 'src/app/data-access/database.service';
import { Sku } from 'src/app/data-access/entities/sku.entity';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-sku-edit',
  templateUrl: './sku-edit.component.html',
  styleUrls: ['./sku-edit.component.scss']
})
export class SkuEditComponent implements OnInit {

  skuId: string = "";
  mode: string = "Edit";
  constructor(private route: ActivatedRoute, private router: Router,
    private databaseService: DatabaseService) { }
  sku: Sku = new Sku();
  ngOnInit() {
    this.skuId = this.route.snapshot.paramMap.get("skuId");
    console.log("this.skuId----" + this.skuId);
    if (this.skuId === 'NEW') {
      this.skuId = "";
      this.mode = "Create";
    } else {
      Sku.findOne(this.skuId).then(foundSku => {
        this.sku = foundSku;
      });
    }
  }

  back() {
    this.router.navigate(['/skuList']);
  }

  @HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode == 27) {
      this.back();
    }
  }

  reset() {
    this.ngOnInit();
  }

  save() {
    this.sku.save().then(x => {
      console.log(x);
      Swal({
        title: this.sku.SkuName + ' Created',
        type: 'success',
        confirmButtonText: 'Ok'
      });
      this.back();
    });


  }
  createSku() {
    this.sku.save().then(x => {
      if (x.SkuId) {
        Swal({
          title: this.sku.SkuName + ' Created',
          type: 'success',
          confirmButtonText: 'Ok'
        });
        this.back();
      } else {
        console.log(x);
      }
    }, err => {
      console.log(err);
    });
  }


}
