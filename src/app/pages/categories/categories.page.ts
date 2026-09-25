import { Component, inject } from '@angular/core';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { Category } from '../../interfaces/categories.interface';
import { CategoriesService } from '../../services/categories/categories.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de categorías.
 *
 * Se utiliza para gestionar y mostrar un listado de categorías
 * utilizando el componente `CategoriesTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `CategoriesService`
 * para obtener las categorías y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  imports: [CategoriesTableComponent, AlertComponent],
})
export class CategoriesPage {
  /**
   * Listado de categorías obtenidas desde el servicio.
   * @type {Category[]}
   */
  categories: Category[] = [];

  /**
   * Estado actual del componente.
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener categorías.
   */
  private categoriesService = inject(CategoriesService);

  /**
   * Inicializa el componente y carga las categorías.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.categoriesService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
