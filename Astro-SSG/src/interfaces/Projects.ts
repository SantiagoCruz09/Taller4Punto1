export interface Project {
  id: number;
  name: string;
  description: string;
  status: ProjectStatus;
  budget: number;
}

export type ProjectStatus =
  | 'Activo'
  | 'Finalizado'
  | 'Pendiente'
  | 'Cancelado';
