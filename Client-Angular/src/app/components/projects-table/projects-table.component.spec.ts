import { CurrencyPipe } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { PROJECTS_MOCK } from '../../mocks/projects.mocks';
import { ProjectsTableComponent } from './projects-table.component';

describe('ProjectsTableComponent', () => {
  let component: ProjectsTableComponent;
  let fixture: ComponentFixture<ProjectsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsTableComponent);
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

  it('deberia renderizar una fila por cada proyecto', () => {
    component.projects = PROJECTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.projects.length);
  });

  it('deberia mostrar los datos del proyecto en cada columna', () => {
    component.projects = PROJECTS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const project = component.projects[index];
      const projectBudget = new CurrencyPipe('en-US').transform(project.budget);

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(project.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(project.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(project.description);
      expect(columns[3].nativeElement.textContent.trim()).toBe(projectBudget);
      expect(columns[4].nativeElement.textContent.trim()).toBe(project.status);
    });
  });

  it('deberia mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Activo']).toBe('success');
    expect(component.statusMap['Finalizado']).toBe('primary');
    expect(component.statusMap['Pendiente']).toBe('warning');
    expect(component.statusMap['Cancelado']).toBe('danger');
  });
});
