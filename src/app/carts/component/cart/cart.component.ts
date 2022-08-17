import {
  Component,
  OnInit,
  NO_ERRORS_SCHEMA,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core'
import { CartsService } from '../../services/carts.service'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  constructor(private _CartsService: CartsService) {}
  cartProducts: any[] = []
  totalPrice: number = 0
  productsAmount: number = 0
  quantity: number = 0
  success: boolean = false
  orderId: string = ''
  info: any

  ngOnInit(): void {
    localStorage.setItem("lastVisitedPage", "cart")
    this.getCartProducts()
    this.getTotalAmount()
  }

  getCartProducts() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!)
    }
    // console.log(this.cartProducts)
    this.getTotalPrice()
  }

  getTotalPrice() {
    this.totalPrice = 0
    for (let x in this.cartProducts) {
      this.totalPrice +=
        this.cartProducts[x].price * this.cartProducts[x].amount
    }
  }

  decreaseAmount(index: number) {
    this.cartProducts[index].amount--
    this.getTotalPrice()
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  }

  increaseAmount(index: number) {
    this.cartProducts[index].amount++
    this.getTotalPrice()
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  }

  deletePrd(index: number) {
    this.cartProducts.splice(index, 1)
    this.getTotalPrice()
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  }

  clearAllPrd() {
    this.cartProducts = []
    this.getTotalPrice()
    localStorage.setItem('cart', JSON.stringify(this.cartProducts))
  }

  getTotalAmount() {
    for (let x in this.cartProducts) {
      this.productsAmount += this.cartProducts[x].amount
    }
  }

  addCart() {
    let products = this.cartProducts.map((item) => {
      return { id: item.id, quantity: item.amount}
    })
    this.info = {
      userId: 5,
      products: products,
    }
    console.log(this.info)
    this._CartsService.createNewOrder(this.info).subscribe({
      next: (res: any) => {
        this.success = true
      },
    })

  }

  

 
}
