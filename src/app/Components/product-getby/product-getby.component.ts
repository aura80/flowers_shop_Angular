import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-getby',
  templateUrl: './product-getby.component.html',
  styleUrls: ['./product-getby.component.css']
})
export class ProductGetbyComponent implements OnInit {

  productByForm: FormGroup | any;
  products: Array<Product> = [];

  id!: Number
  name!: String
  description!: String
  price!: Number
  category!: String

  product!: Product;

  varByData!: Product;
  byValue = 0;

  constructor(private activatedRoute: ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.byValue = params['id'];
      console.log('Parameter value: $(this.byValue');
    });

    this.getClientByIdData(this.byValue);
  }

  getClientByIdData(id: any) {
    this.productService.getProductById(id).subscribe(
      (r: Product) => {
        this.varByData = r;
        console.log(JSON.stringify(this.varByData));
      }
    )
  }

}
