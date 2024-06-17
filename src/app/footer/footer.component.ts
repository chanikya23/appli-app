import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  constructor( private router:Router){}
  goToHome(): void{
    this.router.navigate(['/header']).then(()=>{
      window.scrollTo(0,0);
    })

  }

}
