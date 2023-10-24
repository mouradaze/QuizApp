import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  selectForm!:FormGroup
  selection:any = [
    {'value':'Test','text':"Test 1"},
    {'value':'Test2','text':"Test 2"},
    {'value':'Test3','text':"Test 3"},
  ]
  constructor(private http:HttpClient,private fb:FormBuilder,private router:Router){}
  ngOnInit(): void {
    this.selectForm = this.fb.group({
      selected:""
    })
  }
  handleClick(){
    console.log(this.selectForm.value.selected)


    this.router.navigateByUrl("/question")
    
  }
}
