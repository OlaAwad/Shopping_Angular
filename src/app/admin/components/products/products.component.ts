import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Products } from 'src/app/products/models/products';
import { EditProductsService } from '../../services/edit-products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private _EditProductsService:EditProductsService, private _FormBuilder: FormBuilder ) { }
  products: Products[] = []
  categories: string[] = []
  base64: any = ''
  form!: FormGroup;
  select: string =''

  ngOnInit(): void {
    localStorage.setItem("lastVisitedPage", "adminPrd")
    this.form = this._FormBuilder.group({
      "title": ["", [Validators.required]],
      "description": ["", [Validators.required]],
      "price": ["", [Validators.required]],
      "stock": ["", [Validators.required]],
      "category": ["", [Validators.required]],
      "thumbnail": ["", [Validators.required]],
    })
    this.getProducts()
    this.getCategories()
  }

  getProducts(){
    this._EditProductsService.getAllProducts().subscribe({
      next:(res:any)=>{
        this.products = res.products
        // console.log(this.products)
      }
    })
  }

  getCategories() {
    this._EditProductsService.getAllCategories().subscribe({
      next: (res: any) => {
        // console.log(res)
        this.categories = res
      },
    })
  }

  getSelectedCategory(event: any){
    this.form.get("category")?.setValue(event.target.value)
    // console.log(event.target.value)
  }


  getImgPath(event:any){
    const file = event.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      this.base64 = reader.result
      this.form.get("thumbnail")?.setValue("lorem")
      // this.form.get("thumbnail")?.setValue(this.base64)

    }
  }

  addProduct(){
    const model = this.form.value
    this._EditProductsService.createProduct(model).subscribe({
      next:(res:any) => {
        // console.log(this.form)
        console.log("res: ",res)
        alert("A new product is successfully added")
        this.getProducts()
      }
    })
  }

  updatePrd(item: any){
    this.form.patchValue({
      "title": item.title ,
      "description": item.description ,
      "price": item.price ,
      "stock": item.stock ,
      "category": item.category ,
      "thumbnail": item.thumbnail 
    })
    this.base64 = item.thumbnail
    
  }

 
}
