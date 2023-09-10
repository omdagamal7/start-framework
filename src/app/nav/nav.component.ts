import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(){
    this.paddingAnimation()
  }
  paddingAnimation(){
    window.addEventListener("scroll",()=>{
      var scrollTop = document.documentElement.scrollTop;
      if(scrollTop > 0){
        document.querySelector("nav")?.classList.remove("p-30");
      } else {
        document.querySelector("nav")?.classList.add("p-30");
      }
    });
  }
}
