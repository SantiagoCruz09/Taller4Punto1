import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { ProjectStatus, Project } from '../../interfaces/projects.interface';

/**
 * Componente de tabla de proyectos.
 *
 * Se utiliza para mostrar un listado de proyectos en una tabla,
 * mostrando información como nombre, descripción, presupuesto y un
 * badge visual que indica el estado de cada proyecto.
 *
 * @remarks
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-projects-table [projects]="projectsList"></app-projects-table>
 * ```
 */
@Component({
  selector: 'app-projects-table',
  templateUrl: './projects-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class ProjectsTableComponent {
  /**
   * Listado de proyectos que se mostrarán en la tabla.
   * @type {Project[]}
   */
  @Input() projects: Project[] = [];

  /**
   * Mapeo de estados de proyectos a tipos de Badge.
   * @type {Record<ProjectStatus, BadgeType>}
   */
  statusMap: Record<ProjectStatus, BadgeType> = {
    'Activo': 'success',
    'Finalizado': 'primary',
    'Pendiente': 'warning',
    'Cancelado': 'danger',
  }
}
