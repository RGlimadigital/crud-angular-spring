import { Component, OnInit } from '@angular/core';
import { Course } from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  //Declarando e inicializando
  courses: Course[] = [
    { _id: '1', name: 'Angular 15', category: 'Front-End' },
    { _id: '2', name: 'Spring Boot', category: 'Back-End' },
    { _id: '3', name: 'Banco de Dados MySQL', category: 'Database' },
  ];
  displayedColumns = ['name', 'category'];

  constructor() {}

  ngOnInit(): void {}
}
