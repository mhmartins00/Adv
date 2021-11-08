import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Acoes',
  templateUrl: './Acoes.component.html',
  styleUrls: ['./Acoes.component.css']
})
export class AcoesComponent implements OnInit {

  acoes: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getAcao();
  }

  getAcao(){
    this.http.get('http://localhost:5000/api/values').subscribe(response => {

      this.acoes = response;
      console.log();

      },error =>{
        console.log(error);
      });
  }

}
