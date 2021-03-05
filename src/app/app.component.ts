import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'second-app';
//   a=''
//   b="xy"
//   name=''
//  y=''
//  x=false;
//  d="google.com"
//   ab(){
//     this.a="ram"+this.b;
//   }
//   cd(value: any){
// this.y="hi "+value;
//   }
  emp=[
    {
      mob: 13765,
      age: 22,
    },
    {
      mob: 11,
      age: 22,
    },
    {
      mob: 33,
      age: 22,
    },
  ]
// }
name="angular";
 date=new Date();
book = new FormControl(''); 
author=new FormControl(''); 
isbn=new FormControl(''); 
}