import { Component, OnInit,Input } from '@angular/core';
// ***
import {Rollnum} from './rollnum'
// ***
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';

/*
Note:
if a component have services then they are put in providers
if multiple services exist for a component then we will have multiple providers
Note : Don't forget to import form modules in app.module.ts

*/
@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css'],
  // providers:[GradeService]
})
export class GradesComponent implements OnInit {

	// grades:any[] = null;/* this array is updated from the values came from constructor*/
	/*using this constructor we call methods in grades.service.ts*/
	rollnum = new Rollnum('')
	// output:any[] = null;
  // constructor(private gradeServ:GradeService) {
  // 		// this.grades = this.gradeServ.getGrades();
  //  }
  constructor (private httpService: HttpClient) { }
  grades:any[];
  output:any[];

   x=""
    ngOnInit() {

        this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.grades = data as any [];   // FILL THE ARRAY WITH DATA.
         console.log("here is:"+this.grades);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
      
  }

 redirect(){
    
     this.x = this.rollnum.id+"";/*.id means we are referring to element in the constructor of class */
     for(let e of this.grades){
     	// console.log(e);
     	for(var key in e){
     		if(key==="rollnum"){/*e[key] means we get value i.e rollnum*/
     			if(this.x === e[key]){
     				// console.log("cool");
     				// this.x = e["name"];
     				this.output = e;
     				console.log(this.output);
     				return;
     			}
     		}
     	}
     	

     }
     this.output.length = 0;
  }
}

