import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course';
import { CoursesService } from '../services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  //Declarando e inicializando
  courses: Course[] = [];
  displayedColumns = ['name', 'category'];

  //Injetando a dependência do serviço
  constructor(private coursesService: CoursesService) {
    //Recebendo a lista de cursos desde o service.
    // this.courses = this.coursesService.list();
  }

  ngOnInit(): void {
    //Chamado apenas quando o html for inicializado -> ciclo de vida.
    this.courses = this.coursesService.list();
  }
}
