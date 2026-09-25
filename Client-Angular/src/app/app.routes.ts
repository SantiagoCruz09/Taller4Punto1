import { Routes } from '@angular/router';
import { DatePage } from './pages/date/date.page';
import { ProductsPage } from './pages/products/products.page';
import { UsersPage } from './pages/users/users.page';
import { EmployeesPage } from './pages/employees/employees.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { CategoriesPage } from './pages/categories/categories.page';

/**
 * Definición de las rutas principales de la aplicación.
 *
 * @remarks
 * Este archivo contiene la configuración de enrutamiento
 * utilizada por Angular Router para mapear las URLs
 * a los componentes correspondientes.
 *
 * Incluye:
 * - Rutas de navegación principales
 * - Redirección por defecto para rutas no existentes
 *
 * @see {@link UsersPage}
 * @see {@link ProductsPage}
 */
export const routes: Routes = [

  /**
   * Ruta de usuarios.
   */
  { path: 'users', component: UsersPage },

  /**
   * Ruta de productos.
   */
  { path: 'products', component: ProductsPage },

  /**
   * Ruta de la fecha.
   */
  { path: 'date', component: DatePage },

  /**
   * Ruta de empleados.
   */
  { path: 'employees', component: EmployeesPage },

  /**
   * Ruta de proyectos.
   */
  { path: 'projects', component: ProjectsPage },

  /**
   * Ruta de categorías.
   *
   * @remarks
   * Renderiza el componente `CategoriesPage`, encargado
   * de mostrar y gestionar el listado de categorías.
   */
  { path: 'categories', component: CategoriesPage },

  /**
   * Ruta comodín.
   */
  { path: '**', redirectTo: 'users' },
];