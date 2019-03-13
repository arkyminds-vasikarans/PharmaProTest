import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/data-access/database.service';
import { Sku } from 'src/app/data-access/entities/sku.entity';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sku-list',
  templateUrl: './sku-list.component.html',
  styleUrls: ['./sku-list.component.scss']
})


export class SkuListComponent implements OnInit {
  searchStr = "";
  ngOnInit() {
  }
  skus: Sku[] = [];
  recordsFound: number = 0;
  constructor(private router: Router, private databaseService: DatabaseService) {
    this.getSkus();
  }

  getSkus() {
    console.log(this.searchStr);
    this.databaseService
      .connection
      .then(() => Sku.createQueryBuilder('Sku')
        .where("sku.SkuName like :name", { name: '%' + this.searchStr + '%' })
        .limit(10)
        .cache(true)
        .getManyAndCount()
        .then(response => {
          this.skus = response[0];
          console.log(response[0]);
          this.recordsFound = response[1];
          console.log(response[1]);
        }));

  }
  getAllSku() {
    this.getSkus();
  }
  goToSkuEdit(id) {
    this.router.navigate(['/skuEdit/' + id]);
  }
  deleteSku(sku: Sku, index) {
    Swal({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {

        sku.remove().then(x => {
          console.log(x);
          if (!x.SkuId) {

            Swal({
              title: 'Deleted!',
              type: 'success',
              confirmButtonText: 'Ok'
            });
            this.skus.splice(index, 1);
          }
        });
      }
    });
  }
  goToCreateSku() {
    this.router.navigate(['/skuEdit/NEW']);
  }

  search(event) {
    this.getSkus();
  }

  refresh() {
    this.searchStr = "";
    this.getSkus();
  }

}
