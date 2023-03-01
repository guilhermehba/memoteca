import { Pensamento } from './../pensamento';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent implements OnInit {
  pensamento:Pensamento = {
    id: 1,
    conteudo: 'Aprendendo Angular 14',
    autoria: 'Dev Pombo',
    modelo: '',
  };
  constructor() {}

  ngOnInit(): void {
  }
  criarPensamento(){
    alert('Novo pensamento criado')
  }
  cancelar(){
    alert('pensamento cancelado')
  }
}