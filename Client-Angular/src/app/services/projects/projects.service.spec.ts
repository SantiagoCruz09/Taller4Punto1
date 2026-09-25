import { TestBed } from '@angular/core/testing';
import { ProjectsService } from './projects.service';
import { PROJECTS } from '../../data/projects.interface';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjectsService);
  });

  describe('Creacion del servicio', () => {

    it('deberia crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllProjects deberia retornar un observable con los proyectos', (done) => {
      service.getAllProjects().subscribe(projects => {
        expect(projects).toEqual(PROJECTS);
        expect(projects.length).toBe(PROJECTS.length);
        done();
      });
    });

  });

});
