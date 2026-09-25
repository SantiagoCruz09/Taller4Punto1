import { Component, inject } from '@angular/core';
import { ProjectsTableComponent } from '../../components/projects-table/projects-table.component';
import { Project } from '../../interfaces/projects.interface';
import { ProjectsService } from '../../services/projects/projects.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de proyectos.
 *
 * Se utiliza para gestionar y mostrar un listado de proyectos
 * utilizando el componente `ProjectsTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `ProjectsService`
 * para obtener los proyectos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 */
@Component({
  selector: 'app-projects',
  templateUrl: './projects.page.html',
  imports: [ProjectsTableComponent, AlertComponent],
})
export class ProjectsPage {
  /**
   * Listado de proyectos obtenidos desde el servicio.
   * @type {Project[]}
   */
  projects: Project[] = [];

  /**
   * Estado actual del componente.
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener proyectos.
   */
  private projectsService = inject(ProjectsService);

  /**
   * Inicializa el componente y carga los proyectos.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.projectsService.getAllProjects().subscribe({
      next: (projects) => {
        this.projects = projects;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
