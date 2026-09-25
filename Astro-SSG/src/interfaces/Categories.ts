export interface Category {
  id: number;
  name: string;
  description: string;
  status: CategoryStatus;
}

export type CategoryStatus =
  | 'Activa'
  | 'Inactiva';
