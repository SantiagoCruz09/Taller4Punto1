import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { CategoryStatus, Category } from '../../interfaces/categories.interface';

/**
 * Componente de tabla de categorías.
 *
 * Se utiliza para mostrar un listado de categorías en una tabla,
 * mostrando información como nombre, descripción y un badge visual
 * que indica el estado de cada categoría.
 *
 * @remarks
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-categories-table [categories]="categoriesList"></app-categories-table>
 * ```
 */
@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class CategoriesTableComponent {
  /**
   * Listado de categorías que se mostrarán en la tabla.
   * @type {Category[]}
   */
  @Input() categories: Category[] = [];

  /**
   * Mapeo de estados de categorías a tipos de Badge.
   * @type {Record<CategoryStatus, BadgeType>}
   */
  statusMap: Record<CategoryStatus, BadgeType> = {
    'Activa': 'success',
    'Inactiva': 'secondary',
  }
}
