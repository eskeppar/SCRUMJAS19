import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CartItemService } from 'src/app/services/cart-item.service';
import { Ecliterature, EcliteratureService, Product } from '../../services/ecliterature.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  ecliteratures: Ecliterature[] = [];
  products: Product[] = [];
  totalCartItem: number;
  @Output() sendProduct = new EventEmitter();
  @Output() sendEcliterature = new EventEmitter();

  constructor(private service: EcliteratureService,
    // tslint:disable-next-line: align
    private productService: EcliteratureService,
    // tslint:disable-next-line:align
    private cartItemService: CartItemService
  ) { }

  ngOnInit(): void {
    this.service.ecliterature$.subscribe(ecliteratures => {
      this.ecliteratures = ecliteratures;

      console.log(ecliteratures);
    });
    this.service.getEcliteratures();

    this.productService.products$.subscribe(products => {
      this.products = products;

      console.log(this.products);
    });
    this.productService.getProducts();

    this.totalCartItem = this.cartItemService.getCartItems().length;
  }

  onAddProduct(product: Product, ecliterature: Ecliterature) {
    this.sendProduct.emit(product);
    this.sendEcliterature.emit(ecliterature);
    this.cartItemService.addToCart(product, ecliterature);
    this.totalCartItem = this.cartItemService.getCartItems().length;
  }

  isProductInCart(product: Product, ecliterature: Ecliterature) {
    return !this.cartItemService.getCartItems.bind(({ productId }) => productId === product.Id,
      ({ ecliteratureId }) => ecliteratureId === ecliterature.id
    );
  }

  onRemoveFromCart(product: Product, ecliterature: Ecliterature) {
    this.cartItemService.removeCartItem({
      productId: product.Id,
      total: 1,
      price: 0,
      product: product.Product,
      imageUrl: ecliterature.Url,
      imageId: ecliterature.id
    });
    this.totalCartItem = this.cartItemService.getCartItems().length;
  }
}

