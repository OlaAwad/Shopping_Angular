import {
  Component,
  NgModule,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
  OnInit,
  EventEmitter,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core'
import { Router } from '@angular/router'
import { CartsService } from 'src/app/carts/services/carts.service'
import { Products } from '../../models/products'
import { ProductsModule } from '../../products.module'
import { ProductsService } from '../../services/products.service'


@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css'],
})
export class AllProductsComponent implements OnInit {
  products: Products[] = []
  categories: string[] = []
  loading: boolean = false
  cartProducts: any[] = []
  addBtn = false
  amount = 1
  @Input() word: string = ''

  constructor(
    private _ProductsService: ProductsService,
    _CartsService: CartsService, private _Router: Router
  ) {}

  getProducts() {
    this.loading = true
    this._ProductsService.getAllProducts().subscribe({
      next: (res: any) => {
        this.products = res.products
        this.products.forEach((product) => (product.amount = this.amount))
        // console.log(this.products)


        this.loading = false
      },
    })
  }

  getCategories() {
    this.loading = true
    this._ProductsService.getAllCategories().subscribe({
      next: (res: any) => {
        // console.log(res)
        this.categories = res
        this.loading = false
      },
    })
  }

  filterByCat(event: any) {
    let value = event.target.value
    console.log(value)
    if (value == 'all') {
      this.getProducts()
    } else {
      this.getProductsofCat(value)
    }
  }

  getProductsofCat(cat: string) {
    this.loading = true
    this._ProductsService.getProductsByCat(cat).subscribe({
      next: (res: any) => {
        this.products = res.products
        this.products.forEach((product) => (product.amount = this.amount))
        this.loading = false
      },
    })
  }

  //Add to cart:
  addToCart(product) {
    // console.log(product)
    // console.log('userToken' in localStorage)
    //Check if user has logged in: 
    if('userToken' in localStorage){
      //1- Get data from local storage and store it in cart products:
      if ('cart' in localStorage) {
        this.cartProducts = JSON.parse(localStorage.getItem('cart')!)

        //Check if item exists to not duplicate it:
        let exist = this.cartProducts.find((item) => item.id == product.id)
        if (exist) {
          alert('Product is already in your cart')
        } else {
          //2- Push data into cart:

          this.cartProducts.push(product)

          //3- Send updated array (cartProducts) to localStorage:
          localStorage.setItem('cart', JSON.stringify(this.cartProducts))
          // console.log(this.cartProducts)
        }
      } else {
        //2- Push data into cart:
        this.cartProducts.push(product)
        // console.log(this.cartProducts)

        //3- Send updated array (cartProducts) to localStorage:
        localStorage.setItem('cart', JSON.stringify(this.cartProducts))
      }
    } else{
      this._Router.navigate(['/login'])
    }
    
  }

  sortBy(option) {
    if(option.value == 'featured'){
      this.products.sort((a,b) => Number(a.id) - Number(b.id))
    } else if (option.value == 'lowToHigh') {
      this.products.sort((a, b) => Number(a.price) - Number(b.price))
    } else if (option.value == 'highToLow') {
      this.products.sort((a, b) => Number(b.price) - Number(a.price))
    } else if (option.value == 'ratingHTL') {
      this.products.sort((a, b) => Number(b.rating) - Number(a.rating))
    }
  }

  searchProduct(word) {
    this.word = word.target.value
    this._ProductsService.search(this.word).subscribe({
      next: (res: any) => {
        this.products = res.products
      },
    })
    console.log(this.word)
  }

  ngOnInit(): void {
    localStorage.setItem("lastVisitedPage", "products")
    this.getProducts()
    this.getCategories()
  }

}
