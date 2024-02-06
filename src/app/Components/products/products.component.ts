import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { Product } from 'src/app/models/Product';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productForm: FormGroup | any;
  products: Array<Product> = []

  id!: Number
  name!: String
  description!: String
  price!: Number
  category!: String

  product!: Product;

  loading: boolean = true

  varBy: any;
  byValue = 1;

  constructor(private productService: ProductServiceService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getProductsList();

    this.productForm = new FormGroup({
      id: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.minLength(4)]),
      price: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    })

    this.getProductByIdData(this.byValue);

  }

  getProductsList() {
    this.productService.getProducts().subscribe(
      r => {
        this.products = r;
        console.log(r);
      }
    )
  }

  getProductsListById(id: any) {
    this.router.navigateByUrl('/products/by/' + id);
  }

  getProductByIdData(id: any) {
    this.productService.getProductById(id).subscribe(
      r => {
        this.varBy = JSON.stringify(r);
        console.log(this.varBy);
      }
    )
  }

  saveProductData() {
    this.productService.saveProduct(this.productForm.value).subscribe(data => {
      this.productForm.reset();
      console.log("New product added successfully!");
      alert("New product added successfully!");
      this.getProductsList();
    })
  }

  deleteProductData(id: any) {
    this.productService.deleteProduct(id).subscribe(r => {
      console.log(r);
      alert("Product with id " + id + " deleted successfully!");
      this.getProductsList();
    })
  }

}
