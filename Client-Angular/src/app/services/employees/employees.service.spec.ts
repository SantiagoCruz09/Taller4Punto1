import { TestBed } from '@angular/core/testing';
import { EmployeesService } from './employees.service';
import { EMPLOYEES } from '../../data/employees.interface';

describe('EmployeesService', () => {
  let service: EmployeesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesService);
  });

  describe('Creacion del servicio', () => {

    it('deberia crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllEmployees deberia retornar un observable con los empleados', (done) => {
      service.getAllEmployees().subscribe(employees => {
        expect(employees).toEqual(EMPLOYEES);
        expect(employees.length).toBe(EMPLOYEES.length);
        done();
      });
    });

  });

});
