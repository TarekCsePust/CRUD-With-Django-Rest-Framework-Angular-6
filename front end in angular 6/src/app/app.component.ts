import { Component, OnInit } from '@angular/core';
import { Student } from './student';
import { StudentsService } from './students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  selected_item;
  sucessfull = false
  index;
  updateInfo = false
  updatedSucessfull = false
  lastId = null
  a:number = 0
 
  ngOnInit(){
    this.getAllStudent()
  }
  studentModel = new Student("","","",null)
  heading = "Add new student"
  errorMsg;
  
  students = []
  
  constructor(private studentService:StudentsService){

   

  }





  selecteItem(student){
    this.selected_item = student
    this.heading = "Update student info"
    this.sucessfull = false
    this.updateInfo = true
    this.updatedSucessfull = false
    this.studentModel = new Student(student.name,student.department,student.session,student.phone)
  }

  onSubmit(userForm){

    console.log(userForm)
    

    if(this.updateInfo){

      this.studentService.updateInfo(this.selected_item.id,this.studentModel).subscribe(
        data => console.log("sucessfull",data),
        error=> console.log("error",error)
        
      )

      this.updatedSucessfull = true
      this.index = this.students.indexOf(this.selected_item)
      this.students[this.index].name = this.studentModel.name
      this.students[this.index].department = this.studentModel.department
      this.students[this.index].session = this.studentModel.session
      this.students[this.index].phone = this.studentModel.phone



    }
    else{

      this.studentService.enroll(this.studentModel).subscribe(
        data => this.lastId=data,
        error=> console.log("error",error)
        
      )
    
      this.sucessfull = true

    }
    
  }

  pageReaload(){
    window.location.reload()
  }


  deleteInfo(){


    this.studentService.deleteStudent(this.selected_item.id).subscribe(
      data => console.log("deleted sucessfully",data),
      error=> this.errorMsg=error.statusText
      
    )

    this.index = this.students.indexOf(this.selected_item)
    this.students.splice(this.index,1)

  }

  getAllStudent(){
    this.studentService.getAllInfo().subscribe(
      data => this.students= data,
      error=> this.errorMsg=error.statusText
      
    )
  }

  clearform(){

    this.heading = "Add new student"
    this.sucessfull = false
    this.updatedSucessfull = false
    this.updateInfo = false
    this.studentModel = new Student("","","",null)
    
  }

}
