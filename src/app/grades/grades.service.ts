// /* we are going to inject the service for a particular need */

// import {Injectable} from '@angular/core';/*if we have any service it is used*/
// import { Http,Response,HttpModule } from '@angular/http';
// // import {Observable} from 'rxjs/Observable';
// // import 'rxjs/add/operator/map';
// // import 'rxjs/Rx';
// // import {Observable} from  'rxjs/Rx';
// // import { map } from 'rxjs/operators';



// @Injectable()/* if we have any dependencies then we use in this*/
// export means we are giving out
// export class GradeService{
// 	constructor(private http:Http){
		
// 	}
// 	arrGrases : string[];
// 	path = 'Assets/data.json';

// 	// getGrades():Observable<any[]>{
// 	// 	    return this.http.get(this.path).map((resp:Response) => resp.json());
 
// 	// }
// 	getGrades(){
// 		    this.http.get(this.path).subscribe(
// 		    	data=>{
// 		    		this.arrGrases = data as string[];
// 		    	});
 
// 	}
// 	// 	getConfig(){
// 	// 	return this.http.get(this.path);
// 	// }
// }
// 		