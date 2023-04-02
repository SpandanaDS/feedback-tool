import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-options-page',
  templateUrl: './options-page.component.html',
  styleUrls: ['./options-page.component.css']
})
export class OptionsPageComponent {
  myReaction: any;
  options: any[];
  selectedItems:string[]= [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.options = [
      {name:'price', key : 'price'}, 
      {name: 'course content', key : 'content'}, 
      {name: 'tutor', key : 'tutor'}, 
      {name: 'platform', key : 'platform'}, 
      {name: 'virtual classroom', key : 'classroom'}, 
      {name: 'sales team', key : 'sales'}];
   }

  ngOnInit(): void {
    this.myReaction = this.route.snapshot.queryParams['data'];
  }

  onChange(checked: boolean, value: any) {
    if (checked) {
      this.selectedItems.push(value);
    } else {
      const index = this.selectedItems.indexOf(value);
      if (index !== -1) {
        this.selectedItems.splice(index, 1);
      }
    }
    console.log(this.selectedItems);
  }
  nextPage(){
    console.log(this.selectedItems);
    this.router.navigate(['/submit-page']);
  }
  newCLick(target: EventTarget | null){
    if(target){
      const id = (target as HTMLElement).id;
      console.log('Clicked on element with ID:', id);
      var div= document.getElementById(id) as HTMLDivElement;
      if(div.classList.value== 'option-container'){
          div.classList.value = 'checked';
          div.style.backgroundColor= '#ecc1f8';
          div.style.border= '1px solid #ecc1f8';
          div.style.borderRadius= '25px';
          div.style.padding= '10px 18px';
          div.style.margin= '5px 15px';
          div.style.textTransform= 'capitalize';
          div.style.fontFamily= 'Times New Roman';
          div.style.fontSize= '17px';
          this.selectedItems.push(div.innerHTML);
      }
      else{
        const index = this.selectedItems.indexOf(div.innerHTML);
        if (index !== -1) {
          this.selectedItems.splice(index, 1);
        }
        div.classList.value= 'unchecked';
        div.style.backgroundColor= 'white';
        div.style.border= '1px solid grey';
        div.style.borderRadius= '25px';
        div.style.padding= '10px 18px';
        div .style.margin= '5px 15px';
        div.style.textTransform= 'capitalize';
        div.style.fontFamily= 'Times New Roman';
        div.style.fontSize= '17px';
      }
      console.log(this.selectedItems);
    }
    // var div = document.getElementById(id) as HTMLDivElement;
    // if(div.classList.value == ''){
    //   div.classList.value= 'checked';
    // }
    // else{
    //   div.classList.value= 'unchecked';
    // }
    // console.log(div.classList.value);
  }
}
