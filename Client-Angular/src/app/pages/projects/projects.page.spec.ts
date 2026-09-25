import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsPage } from './projects.page';
import { provideHttpClient } from '@angular/common/http';
import { ProjectsService } from '../../services/projects/projects.service';
import { ProjectsTableComponent } from '../../components/projects-table/projects-table.component';
import { of, throwError } from 'rxjs';
import { PROJECTS_MOCK } from '../../mocks/projects.mocks';
import { By } from '@angular/platform-browser';

describe('ProjectsPage', () => {
  let component: ProjectsPage;
  let fixture: ComponentFixture<ProjectsPage>;
  let projectsService: ProjectsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsPage, ProjectsTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsPage);
    component = fixture.componentInstance;
    projectsService = TestBed.inject(ProjectsService);
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar a getAllProjects al iniciar', () => {
    const spyGetAllProjects = jest.spyOn(projectsService, 'getAllProjects').mockReturnValue(of(PROJECTS_MOCK));
    fixture.detectChanges();
    expect(spyGetAllProjects).toHaveBeenCalled();
  });

  it('deberia asignar los proyectos recibidos del servicio', () => {
    jest.spyOn(projectsService, 'getAllProjects').mockReturnValue(of(PROJECTS_MOCK));
    fixture.detectChanges();
    expect(component.projects).toEqual(PROJECTS_MOCK);
  });

  it('deberia pasar los proyectos al componente projects-table', () => {
    jest.spyOn(projectsService, 'getAllProjects').mockReturnValue(of(PROJECTS_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(ProjectsTableComponent))
      .componentInstance;
    expect(tableComponent.projects).toEqual(PROJECTS_MOCK);
  });

  it('deberia manejar el error cuando falla getAllProjects', () => {
    component.projects = [];
    const errorResponse = new Error('Error al cargar proyectos');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(projectsService, 'getAllProjects').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(projectsService.getAllProjects).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.projects.length).toBe(0);
  });
});
