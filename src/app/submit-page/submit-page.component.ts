import { Component } from '@angular/core';

@Component({
  selector: 'app-submit-page',
  templateUrl: './submit-page.component.html',
  styleUrls: ['./submit-page.component.css']
})
export class SubmitPageComponent {
  showSubmit: boolean= true;
  showLastpage= false;
  additionalComment: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    var textarea = document.getElementById("myTextarea") as HTMLTextAreaElement;
    this.additionalComment = textarea.value;
    console.log(textarea.value);
    this.showSubmit= false;
    this.showLastpage= true;
  }
  skip(){
    this.additionalComment = '';
    this.showSubmit=  false;
    this.showLastpage= true;
  }
}
