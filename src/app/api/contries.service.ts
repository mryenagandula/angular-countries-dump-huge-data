import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContriesService {
  public  baseUrl = "https://letstalk-be.herokuapp.com" || "http://localhost:3000"

  public headers:HttpHeaders= new HttpHeaders({
    'Content-Type':'application/json',
    'Accept':"application/json",
    'Access-Control-Allow-Methods':'GET,POST,PUT,DELETE',
    'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjIwN2NjOWVjYWQxNTAwMDA0ZWNiYTMzIiwiZW1haWxfaWQiOiJzcmlzYWQ5NUBnbWFpbC5jb20iLCJpYXQiOjE2NTk4MTEwODksImV4cCI6MTY2MDA3MDI4OX0.qd9oT1y2ZXzlC2TfO5AUSprx2Skqyv7pF_ljMx-vMw4'
  });

  constructor(private http: HttpClient) { }

  public loadContries(data:any){
    return this.http.post(`${this.baseUrl}/countries`,data,{headers:this.headers});
  }
}
