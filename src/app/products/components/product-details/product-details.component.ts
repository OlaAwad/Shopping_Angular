import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:any
  data:any = {}
  loading:boolean = false

  constructor(private _ActivatedRoute:ActivatedRoute,private _ProductsService: ProductsService) {
    this.id = this._ActivatedRoute.snapshot.paramMap.get("id")
    console.log(this.id)
   }

  ngOnInit(): void {
    this.getPrdDetails()
  }

  getPrdDetails(){
    this.loading = true
    this._ProductsService.getProductbyId(this.id).subscribe({
      next:(res:any)=>{
        this.data = res
        this.loading = false
      }
    })
  }

}
