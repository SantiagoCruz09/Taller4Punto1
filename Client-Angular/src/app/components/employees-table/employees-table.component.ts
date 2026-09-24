import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { EmployeeDepartment, Employee } from '../../interfaces/employees.interface';

@Component({
  selector: 'app-employees-table',
  templateUrl: './employees-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class EmployeesTableComponent {
  @Input() employees: Employee[] = [];

  departmentMap: Record<EmployeeDepartment, BadgeType> = {
    'Sistemas': 'primary',
    'Ventas': 'success',
    'Recursos Humanos': 'warning',
    'Finanzas': 'info',
    'Logistica': 'secondary',
  }
}
