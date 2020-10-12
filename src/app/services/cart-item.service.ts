import { Injectable } from '@angular/core';
import { Product, Ecliterature } from './ecliterature.service';

export interface CartImage {
  imageId: number;
  imageUrl: string;
}

export interface CartItem extends CartImage {
  productId: number;
  total: number;
  price: number;
  product: string;
}

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  cartItems: CartItem[] = [];

  constructor() { }

  addToCart(product: Product, ecliterature: Ecliterature) {
    const isInCart = this.cartItems.find(({ productId }) => productId === product.Id,
      ({ ecliteratureId }) => ecliteratureId === ecliterature.id
    );

    if (!isInCart) {
      this.cartItems.push({
        productId: product.Id,
        total: 1,
        price: product.Price,
        product: product.Product,
        imageUrl: ecliterature.Url,
        imageId: ecliterature.id
      });
    }
  }

  removeCartItem(cartItem: CartItem) {
    const index = this.cartItems.findIndex(
      ({ productId }) => productId === cartItem.productId,
      ({ ecliteratureId }) => ecliteratureId === cartItem.imageId
    );

    if (index > -1) {
      this.cartItems = [
        ...this.cartItems.slice(0, index),
        ...this.cartItems.slice(index + 1, this.cartItems.length),
      ];
    }
  }

  getCartItems() {
    return this.cartItems;
  }

  onItemIncrease(cartItem: CartItem) {
    const index = this.cartItems.findIndex(({ productId }) => productId === cartItem.productId,
      ({ ecliteratureId }) => ecliteratureId === cartItem.imageId
    );

    if (index > -1) {
      const newCartItem = { ...cartItem, total: cartItem.total + 1 };
      this.cartItems = [
        ...this.cartItems.slice(0, index),
        newCartItem,
        ...this.cartItems.slice(index + 1, this.cartItems.length)
      ];
    }
  }

  onItemDecrease(cartItem: CartItem) {
    const index = this.cartItems.findIndex(({ productId }) => productId === cartItem.productId,
      ({ ecliteratureId }) => ecliteratureId === cartItem.imageId
    );

    if (index > -1) {
      const newCartItem = {
        ...cartItem,
        total: cartItem.total > 1 ? cartItem.total - 1 : 1
      };
      this.cartItems = [
        ...this.cartItems.slice(0, index),
        newCartItem,
        ...this.cartItems.slice(index + 1, this.cartItems.length)
      ];
    }
  }
}


