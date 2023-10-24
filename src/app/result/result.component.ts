import { Component } from '@angular/core';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  score!:number
  errs!:any[]
  constructor(private service:SelectionService){}
  ngOnInit(){
    this.score = this.service.getScore()
    this.errs = this.service.errors
  }

}
