import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostsService } from '../services/posts.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private postService: PostsService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      titulo: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      texto: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(250)
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl('',
        Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    //Machacar la fecha que te pasan por el formulario con formato string a una de tipo fecha
    const fechaCreacion = new Date(this.formulario.value.fecha);
    this.formulario.value.fecha = fechaCreacion;

    this.postService.create(this.formulario.value);

    this.router.navigate(['/post']);

    this.formulario.reset();
  }

  checkErrors(control: string, error: string) {
    return this.formulario.get(control).hasError(error) && this.formulario.get(control).touched;
  }


}
