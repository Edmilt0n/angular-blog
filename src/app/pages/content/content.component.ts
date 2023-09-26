import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataBase } from 'src/app/data/dataBase'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  imagemDinamica:string= "https://img.r7.com/images/2014/03/02/2ncc5h16dx_b33huqo83_file.jpg?dimensions=460x305&&resize=460x305&crop=666x441+96+66"
  tituloDinamico:string= ""
  descDinamica:string= ""
  private id:string | null = "0"

  constructor(
     private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get("id")
    )
    this.setValuesToComponent (this.id)
   }

  setValuesToComponent(id:string | null){
    const result = dataBase.filter(article => article.id == id)[0]
    this.tituloDinamico = result.title
    this.descDinamica = result.description
    this.imagemDinamica= result.imagemDinamica
    this.id= result.id
     }
  }



