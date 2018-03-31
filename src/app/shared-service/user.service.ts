import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import{User} from'../user';

@Injectable()
export class UserService {
     private baseurl:string='http://localhost:8080/api';
     private headers=new Headers({'Content-Type':'Application/json'});
     private options=new RequestOptions({headers:this.headers});
  constructor(private http:Http) { }
  
           getUsers(){
             return this.http.get(this.baseurl+'/users',this.options).map((response:Response)=>
            
              response.json()
            ).catch(this.errorHandler);
           }
           getUser(id:Number){
            return this.http.get(this.baseurl+'/users'+id,this.options).map((response:Response)=>
           
             response.json()
           ).catch(this.errorHandler);
          }
          deleteUser(id:Number){
            return this.http.delete(this.baseurl+'/users'+id,this.options).map((response:Response)=>
           
             response.json()
           ).catch(this.errorHandler);
          }
          createUsers(user:User){
            return this.http.post(this.baseurl+'/users',JSON.stringify(user),this.options).map((response:Response)=>
           
             response.json()
           ).catch(this.errorHandler);
          }
          updateUsers(user:User){
            return this.http.put(this.baseurl+'/users',JSON.stringify(user),this.options).map((response:Response)=>
           
             response.json()
           ).catch(this.errorHandler);
          }
           errorHandler(error:Response)
           {
                      return Observable.throw(error||"Server Error");
           }


}
