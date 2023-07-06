import { Component, Input } from '@angular/core';
import { Teacher } from '../model/teacher.model';

@Component({
 selector: 'app-student',
 templateUrl: './student.component.html',
 styleUrls: ['./student.component.css']
})
export class StudentComponent {

 @Input() teacher?: Teacher;
 @Input('principle') principleName?: string;

}