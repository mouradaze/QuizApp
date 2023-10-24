import { Component, OnInit } from '@angular/core';
import { SelectionService } from '../services/selection.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{
  
  constructor(private selectService:SelectionService,private router:Router){}
  questions:any
  selected:string[] = []
  score!:number 
  show:boolean = false
  
  
  ngOnInit(): void {
    this.questions = this.selectService.questions()
    
  }
  handleQst(){
    console.log(this.selected)
    this.selectService.result(this.selected)
    this.score = this.selectService.getScore()
    this.show = true
    console.log(this.selectService.score)
    window.scrollTo(0,0)
    //this.router.navigateByUrl("/result")
  }

}
