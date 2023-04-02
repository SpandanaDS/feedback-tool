import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras  } from '@angular/router';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  nextPage(reaction: any){
    if(reaction){
      const navigationExtras: NavigationExtras = {
        queryParams: {
          data: reaction
        }
      };
      this.router.navigate(['/feedback'],navigationExtras);
    }
  }
}
