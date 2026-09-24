import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../../interfaces/employees.interface';
import { EMPLOYEES } from '../../data/employees.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  getAllEmployees(): Observable<Employee[]> {
    return of(EMPLOYEES);
  }
}
