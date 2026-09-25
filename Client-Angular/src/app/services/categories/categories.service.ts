import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category } from '../../interfaces/categories.interface';
import { CATEGORIES } from '../../data/categories.interface';

/**
 * Servicio encargado de la gestión de categorías.
 *
 * Proporciona métodos para obtener información de categorías
 * desde la data local.
 *
 * @example
 * ```ts
 * constructor(private categoriesService: CategoriesService) {}
 *
 * this.categoriesService.getAllCategories().subscribe(categories => {
 *   console.log(categories);
 * });
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  /**
   * Obtiene una lista de categorías desde el backend.
   *
   * @returns Observable que emite un array de categorías.
   */
  getAllCategories(): Observable<Category[]> {
    return of(CATEGORIES);
  }
}
