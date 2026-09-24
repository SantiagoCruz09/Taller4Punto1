import { Component, inject } from '@angular/core';
import { EmployeesTableComponent } from '../../components/employees-table/employees-table.component';
import { Employee } from '../../interfaces/employees.interface';
import { EmployeesService } from '../../services/employees/employees.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.page.html',
  imports: [EmployeesTableComponent, AlertComponent],
})
export class EmployeesPage {
  employees: Employee[] = [];
  state: State = 'init';

  private employeesService = inject(EmployeesService);

  ngOnInit(): void {
    this.state = 'loading';
    this.employeesService.getAllEmployees().subscribe({
      next: (employees) => {
        this.employees = employees;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
