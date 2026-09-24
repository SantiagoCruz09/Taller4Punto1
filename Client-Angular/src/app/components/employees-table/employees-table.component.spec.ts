import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { EMPLOYEES_MOCK } from '../../mocks/employees.mocks';
import { EmployeesTableComponent } from './employees-table.component';

describe('EmployeesTableComponent', () => {
  let component: EmployeesTableComponent;
  let fixture: ComponentFixture<EmployeesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('deberia renderizar una fila por cada empleado', () => {
    component.employees = EMPLOYEES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.employees.length);
  });

  it('deberia mostrar los datos del empleado en cada columna', () => {
    component.employees = EMPLOYEES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const employee = component.employees[index];
      const employeeSalary = new CurrencyPipe('en-US').transform(employee.salary);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(employee.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(employee.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(employee.lastName);
      expect(columns[3].nativeElement.textContent.trim()).toBe(employee.email);
      expect(columns[4].nativeElement.textContent.trim()).toBe(employeeSalary);
      expect(columns[5].nativeElement.textContent.trim()).toBe(employee.department);
    });
  });

  it('deberia mapear cada departamento a su BadgeType correcto', () => {
    expect(component.departmentMap['Sistemas']).toBe('primary');
    expect(component.departmentMap['Ventas']).toBe('success');
    expect(component.departmentMap['Recursos Humanos']).toBe('warning');
    expect(component.departmentMap['Finanzas']).toBe('info');
    expect(component.departmentMap['Logistica']).toBe('secondary');
  });
});
