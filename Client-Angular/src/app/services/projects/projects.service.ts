import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Project } from '../../interfaces/projects.interface';
import { PROJECTS } from '../../data/projects.interface';

/**
 * Servicio encargado de la gestión de proyectos.
 *
 * Proporciona métodos para obtener información de proyectos
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private projectsService: ProjectsService) {}
 *
 * this.projectsService.getAllProjects().subscribe(projects => {
 *   console.log(projects);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  /**
   * Obtiene una lista de proyectos desde el backend.
   *
   * @returns Observable que emite un array de proyectos.
   */
  getAllProjects(): Observable<Project[]> {
    return of(PROJECTS);
  }
}
