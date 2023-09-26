import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-card',
  templateUrl: './mid-card.component.html',
  styleUrls: ['./mid-card.component.css']
})
export class MidCardComponent implements OnInit {
  @Input()
  mImgDin:string=""
  @Input()
  tituloDinamico:string=""
  @Input()
  mDescDin:string=""
  @Input()
  id:string =""

  constructor() { }

  ngOnInit(): void {
  }

}
