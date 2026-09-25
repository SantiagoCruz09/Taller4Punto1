/**
 * Interfaz que representa un proyecto.
 *
 * @remarks
 * Cada proyecto debe tener un `id` único, un nombre, una descripción,
 * un estado (`status`) definido y un `budget` (presupuesto) en pesos colombianos.
 *
 * @example
 * ```ts
 * const proyecto: Project = {
 *   id: 1,
 *   name: "Portal de Matriculas",
 *   description: "Plataforma web para matricula academica",
 *   status: "Activo",
 *   budget: 15000000
 * };
 * ```
 */
export interface Project {
  /** Identificador único del proyecto */
  id: number;

  /** Nombre del proyecto */
  name: string;

  /** Descripción breve del proyecto */
  description: string;

  /** Estado actual del proyecto */
  status: ProjectStatus;

  /** Presupuesto asignado al proyecto, en pesos */
  budget: number;
}

/**
 * Tipo de estado de un proyecto.
 *
 * @remarks
 * Se utiliza principalmente para mapear badges de colores en la UI.
 *
 * @example
 * ```ts
 * const estado: ProjectStatus = "Pendiente";
 * ```
 */
export type ProjectStatus =
  | 'Activo'
  | 'Finalizado'
  | 'Pendiente'
  | 'Cancelado';
