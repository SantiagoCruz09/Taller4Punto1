/**
 * Interfaz que representa una categoría.
 *
 * @remarks
 * Cada categoría debe tener un `id` único, un nombre, una descripción
 * y un estado (`status`) que indica si está activa o inactiva.
 *
 * @example
 * ```ts
 * const categoria: Category = {
 *   id: 1,
 *   name: "Electronica",
 *   description: "Productos electronicos y tecnologia",
 *   status: "Activa"
 * };
 * ```
 */
export interface Category {
  /** Identificador único de la categoría */
  id: number;

  /** Nombre de la categoría */
  name: string;

  /** Descripción breve de la categoría */
  description: string;

  /** Estado actual de la categoría */
  status: CategoryStatus;
}

/**
 * Tipo de estado de una categoría.
 *
 * @remarks
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: CategoryStatus = "Inactiva";
 * ```
 */
export type CategoryStatus =
  | 'Activa'
  | 'Inactiva';
