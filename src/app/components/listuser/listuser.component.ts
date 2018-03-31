import { Component, OnInit } from '@angular/core';
import{UserService} from'../../shared-service/user.service';
import {User} from '../../user';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
const  now = new Date();
@Component({
  selector: 'app-listuser',
  templateUrl: './listuser.component.html',
  styleUrls: ['./listuser.component.css']
})
export class ListuserComponent implements OnInit {
  model: NgbDateStruct;
  date: {year: number, month: number};
  totalRec : number;
  page: number = 1;
     private users: User[] ;
  constructor( private userservice: UserService,private httpService: HttpClient) { }
  arr: string [];
  ngOnInit() {
   /* this.userservice.getUsers().subscribe((users)=>{
      console.log(users);
      this.users=users;
    },(error)=>{
      console.log(error);
    }); */
    this.httpService.get('./assets/data.json').subscribe(
      data => {
        this.arr = data as string [];	 // FILL THE ARRAY WITH DATA.
          console.log(this.arr[1]);
          this.totalRec = this.arr.length;
                console.log(this.totalRec);
                console.log(this.page);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }
  
  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }
  

}
