import { PensamentoService } from './../pensamento.service';
import { Pensamento } from './../pensamento';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];
  teste:any[]=[]
  constructor(private service:PensamentoService) {}

  ngOnInit(): void {
    this.service.listar().subscribe((pensamento)=>{this.listaPensamentos = pensamento})
  }
}
