import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  arrPosts: Post[];

  constructor() {
    this.arrPosts = [
      {
        titulo: 'Batman 3 Jokers, de Geoff Johns y Jason Fabok',
        texto: 'Si hay algún personaje dentro del mundo del cómic y más concretamente de los superhéroes más icónico que Batman es precisamente su principal enemigo, Joker el aclamado príncipe payaso del crimen. Y es que no es precisamente corta la trayectoria del personaje que nació en los años 40, y tampoco son pocas la cantidad de obras que ha protagonizado nuestro villano favorito de Gotham, llegando incluso a eclipsar por completo a la figura de Batman y a protagonizar una película en solitario.Pero para hablar de esta nueva serie titulada Los 3 Jokers tenemos que remontarnos unos años atrás, concretamente al año 2015 y al número 42 de la serie regular de La liga de la Justicia, durante el evento de Darkseid war, donde Batman se sentaba en la silla de Metron, un artefacto de poder y conocimiento del universo de DC, y formulaba la siguiente pregunta ¿Cuál es el nombre del joker?, cuya respuesta supimos más tarde y era que existían 3 de ellos.Así durante 5 años hemos estado pendiente de que iba todo este asunto, y del que nos han ido soltando pequeñas pistas, como cuáles eran estos 3 jokers gracias a un pequeño vistazo que nos brindaron Geoff Jones junto a Jason Fabok durante la Comic Con de 2018.',
        autor: 'Joel Iglesias',
        imagen: 'https://i1.wp.com/www.tomosygrapas.com/wp-content/uploads/2021/01/batman-three-jokers-banner.jpg?w=978&ssl=1',
        fecha: new Date(),
        categoria: 'reseñas'
      },
      {
        titulo: 'Novedades Panini Marzo 2022',
        texto: 'Ya tenemos con nosotros el comunicado de novedades definitivo en PDF con todos los cómics que publicará Panini a lo largo de marzo de 2022. Un mes en que como es habitual tendremos muchos cómics de Marvel, cómic indepiente y manga. Os dejamos a continuación el PDF para que podáis ver por vosotros mismos las novedades de este mes. Novedades Panini Marzo 2022 by TomosyGrapas on Scribd',
        autor: 'Alfredo Matarranz',
        imagen: 'https://i2.wp.com/www.tomosygrapas.com/wp-content/uploads/2022/03/shmma464_0.png?w=788&ssl=1',
        fecha: new Date(),
        categoria: 'noticias'
      },
      {
        titulo: 'EL DON | Presentación y firma virtual de lo nuevo de ISAAC SÁNCHEZ Loulogio',
        texto: 'Isaac Sánchez, Loulogio, vuelve sin darnos respiro de su Taxus para romper con lo establecido y seguir progresando como autor con El Don. Una historia que llama al cómic book americano pero que nos sitúa en Alcorcón para ofrecernos una historia de superhéroes muy distintos a los que estamos acostumbrados. Obsesión por mejorar y exprimir los recursos del cómic es lo que nos encontraremos en esta nueva obra de un autor que no ha hecho más que despegar y que ya nos impresiona con su gran nivel. No se lo pierdan.',
        autor: 'El hombre Máquina',
        imagen: 'https://i2.wp.com/www.tomosygrapas.com/wp-content/uploads/2020/01/ISAAK-SANCHEZ.jpg?resize=1024%2C576&ssl=1',
        fecha: new Date(),
        categoria: 'entrevistas'

      }
    ];
    /**
     * grabar en LocalStorage el array inicial al arrancar la app si el array no está ya en el localstorage
     */
    if (JSON.parse(localStorage.getItem("blog")) == null) {
      this.grabarLocalStorage(this.arrPosts);
    }
  }

  grabarLocalStorage(arrayPost: Post[]) {
    localStorage.setItem("blog", JSON.stringify(arrayPost));
  }

  obtenerLocalStorage(): Post[] {
    let blog: Post[] = JSON.parse(localStorage.getItem("blog"));
    return blog;
  }

  getAll(): Post[] {
    return this.obtenerLocalStorage();
  }

  /**
   * Recupera el array de LocalStorage e inserta el post nuevo pasado por parámetro
   * @param pPost post generado en el formulario
   */
  create(pPost: Post) {
    const oldArrPost = JSON.parse(localStorage.getItem("blog"));
    oldArrPost.push(pPost);
    this.grabarLocalStorage(oldArrPost);
  }

  /**
   * 
   * @returns Devuelve todas las categorias del array para rellenar el 'selector' de ListaPosts
   */
  getCategory(): string[] {
    const arrayPost = this.getAll();
    return [...new Set(arrayPost.map(post => post.categoria))];
  }


}
