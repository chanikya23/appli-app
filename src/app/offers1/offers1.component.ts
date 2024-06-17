import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-offers1',
  templateUrl: './offers1.component.html',
  styleUrls: ['./offers1.component.css']
})
export class Offers1Component {
  products :any[]=[];
  constructor(private ServicesService:ServicesService){}
  ngOnInit(): void{
    this.ServicesService.getProducts().subscribe((data=>{
      this.products=data;
    }))
  }

}
