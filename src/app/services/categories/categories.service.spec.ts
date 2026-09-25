import { TestBed } from '@angular/core/testing';
import { CategoriesService } from './categories.service';
import { CATEGORIES } from '../../data/categories.interface';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesService);
  });

  describe('Creacion del servicio', () => {

    it('deberia crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllCategories deberia retornar un observable con las categorias', (done) => {
      service.getAllCategories().subscribe(categories => {
        expect(categories).toEqual(CATEGORIES);
        expect(categories.length).toBe(CATEGORIES.length);
        done();
      });
    });

  });

});
