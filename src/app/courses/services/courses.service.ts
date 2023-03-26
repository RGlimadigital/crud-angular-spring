import { Injectable } from '@angular/core';
//Para que reconheça a interface Course temos que importa-la.
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  //A instancia do service estará disponível de forma global
  providedIn: 'root',
})
export class CoursesService {
  //Injeto o HttpClient no construtor
  constructor(httpClient: HttpClient) {}

  //Função para retornar uma lista de cursos:
  list(): Course[] {
    return [
      { _id: '1', name: 'Angular 15', category: 'Front-End' },
      { _id: '2', name: 'Spring Boot', category: 'Back-End' },
      { _id: '3', name: 'Banco de Dados MySQL', category: 'Database' },
    ];
  }
}
