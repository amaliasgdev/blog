import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post.interface';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {

  arrPosts: Post[];
  fecha: string;
  categorias: string[];

  constructor(private postsService: PostsService) {
    this.arrPosts = [];
    this.categorias = [];
  }

  ngOnInit(): void {
    this.arrPosts = this.postsService.getAll();
    this.categorias = this.postsService.getCategory();
  }

  ngAfterViewInit() {
    this.arrPosts = this.postsService.getAll();
  }

  //selector
  onChange($event: any) {
    this.arrPosts = this.postsService.getAll();
    console.log('desde lista post', this.arrPosts)
    if ($event.target.value !== '') {
      this.arrPosts = this.arrPosts.filter(post => post.categoria === $event.target.value);
    } else {
      this.arrPosts = this.postsService.getAll();
    }
  }

  getFecha(fecha: any) {
    let date = new Date(fecha);
    console.log('date ', date)
    let diaSemana = this.getDiaSemana(date.getDay());
    console.log('diaSemana', diaSemana)
    let dia = date.getDate();
    console.log('dia', dia)
    let mes = this.getMes(date.getMonth());
    console.log('mes ', mes)
    let anio = date.getFullYear();
    console.log('anio ', anio)
    return `${diaSemana}, ${dia} de ${mes} de ${anio}`;
  }

  getDiaSemana(dia: number): string {
    let diaSemana: string[] = ['Domingo', 'Lunes', 'Martes', 'Miercóles', 'Jueves', 'Viernes', 'Sábado'];
    return diaSemana[dia];
  }

  getMes(mes: number): string {
    let arrMes: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    return arrMes[mes];
  }

}
