import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {catchError} from 'rxjs/operators'
import {throwError} from 'rxjs'
import { Student } from './student';
import { StudentInfo } from './studentInfo';
import { URLSearchParams } from 'url';


@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  _url = ""

  constructor(private _http:HttpClient) {
    
  }


  getAllInfo():Observable<StudentInfo[]>
  {
    this._url = "http://localhost:8000/api/"
    return this._http.get<StudentInfo[]>(this._url).pipe(catchError(this.errorHandler));
  }

  enroll(user: Student){
    this._url="http://localhost:8000/api/create"
    return this._http.post<any>(this._url,user)
    .pipe(catchError(this.errorHandler))

  }

  updateInfo(id,user:Student){
    this._url="http://localhost:8000/api/" + id + "/"
    return this._http.put<any>(this._url,user)
    .pipe(catchError(this.errorHandler))

  }

  deleteStudent(id){
    this._url="http://localhost:8000/api/" + id +"/delete"
    return this._http.delete<any>(this._url)
    .pipe(catchError(this.errorHandler))

  }

  errorHandler(error: HttpErrorResponse)
  {
    return throwError(error)
  }

}












