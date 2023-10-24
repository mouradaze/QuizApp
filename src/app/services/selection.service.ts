import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class SelectionService {
  score:number = 0
  
  qsts:any = [
    {
      qst:"Which HTML tag is used to emphasize text and make it appear in italics ?",
      answer:"<em>",
      options:[
          "<em>",
          "<strong>",
          "<i>",
          "<b>"
      ]
  },
  {
      qst:"What is the purpose of the '<form>' element in HTML ?",
      answer:"Collecting user input",
      options:[
          "Styling text",
          "Displaying images",
          "Collecting user input",
          "Creating hyperlinks"
      ]
  },
  {
      qst:"Which HTML element is used to define the structure of an HTML document, including the title and metadata?",
      answer:"<head>",
      options:[
          "<body>",
          "<head>",
          "<html>",
          "<meta>"
      ]
  },
  {
      qst:"What is the purpose of the <img> tag in HTML ?",
      answer:"<em>",
      options:[
          "Creating forms",
          "Styling text",
          "Displaying images",
          "Creating hyperlinks"
      ]
  },
  {
      qst:"Which HTML tag is used for creating a line break ?",
      answer:"<table>",
      options:[
          "<table>",
          "<div>",
          "<form>",
          "<ul>"
      ]
  }
    
  ]
  constructor(private router:Router) { }
  
  questions(){
    return this.qsts
   
  }
  errors:string[] = []
  result(selected:string[]){
    this.score = 0
    for(let i=0;i<this.qsts.length;i++){
      if(this.qsts[i].answer === selected[i])
      this.score+=1
      else
      this.errors.push(this.qsts[i].qst)
    }
    this.score = (this.score/this.qsts.length)*100
  }
  getScore(){
    return this.score
  }
}
