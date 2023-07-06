import { Component } from '@angular/core';
import { Teachers } from '../model/teacher.model';

@Component({
 selector: 'app-teacher',
 templateUrl: './teacher.component.html',
 styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

 teachers = Teachers;
 principle = 'Principle';

}