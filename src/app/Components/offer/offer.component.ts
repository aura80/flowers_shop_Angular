import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent {

  products: Array<Product> = []

  constructor(private productService: ProductServiceService) {}

  ngOnInit() {
    this.getProductsList();
  }

  getProductsList() {
    this.productService.getProducts().subscribe(
      r => {
        this.products = r;
        console.log(r);
      }
    )
  }
}
