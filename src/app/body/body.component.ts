// import { Component, OnInit } from '@angular/core';
// import { ServicesService } from '../services/services.service';
// @Component({
//   selector: 'app-body',
//   templateUrl: './body.component.html',
//   styleUrls: ['./body.component.css']
// })
// export class BodyComponent implements OnInit{
//   products : any[]=[];
//   sanitizer: any;
//   newProduct:any ={
//     title:' ',
//     price:' ',
//     category:' ',
//     rating:' ',
//     image:' ',
//     description:' '
//   };

//   editingProduct!: boolean ;
//   constructor(private ServicesService:ServicesService){}
//   ngOnInit(): void{
//     this.ServicesService.getProducts().subscribe((data => {
//       this.products = data;
//     }))
//   }
//   addProducts(): void{
//     this.ServicesService.createProduct(this.newProduct).subscribe(data => {
//       console.log('New Product added :', data);
//       this.newProduct.image = this.newProduct.image.trim();
//       this.products.push(this.newProduct);
//       this.newProduct = { title:'',price:'', category:'', rating:'', image:'', description:''}
//     });
//   }
//   toggleDescription(product: any): void {
//     product.showFullDescription = !product.showFullDescription;
//   }

//   deleteProduct(id: number): void {
//     this.ServicesService.deleteProduct(id).subscribe(() => {
//       this.products = this.products.filter(product => product.id !== id);
//   });
//   }
 
//   getSafeImageUrl(imageUrl: string){
//     return this.sanitizer.bypassSecurityTrustUrl(imageUrl)
//   }
//   clearFormFields(id:number):any{
//     this.clearFormFields(id).subscribe(() =>{
//       this.newProduct = {title: '', price: '', category: '', rating: '', image: '', description: '' };
//       this.editingProduct = false;
//     })
//   }
// }

import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  products: any[] = [];
  newProduct: any = {
    title: '',
    price: '',
    category: '',
    rating:{rate:''},
    image: '',
    description: ''
  };

  constructor(private ServicesService: ServicesService, private sanitizer:DomSanitizer) {}

  ngOnInit(): void {
    this.ServicesService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addProducts(): void {
    this.ServicesService.createProduct(this.newProduct).subscribe(data => {
      console.log('New Product added :', data);
      const sanitizedImage = this.getSafeImageUrl(this.newProduct.image);
      this.products.push({ ...data, ...this.newProduct, image: sanitizedImage });
      this.newProduct = { title: '', price: '', category: '', rating:{rate:''}, image: '', description: '' };
    });
  }
  toggleDescription(product: any): void {
    product.showFullDescription = !product.showFullDescription;
  }

  deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }

  clearFormFields(): void {
    this.newProduct = {
      title: '',
      price: '',
      category: '',
      rating: {rate:''},
      image: '',
      description: ''
    };
  }
  getSafeImageUrl(imageUrl: string) {
    return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
  }
}

