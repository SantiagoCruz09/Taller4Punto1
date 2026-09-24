export interface Employee {
  id: number;
  name: string;
  lastName: string;
  email: string;
  department: EmployeeDepartment;
  salary: number;
}

export type EmployeeDepartment =
  | 'Sistemas'
  | 'Ventas'
  | 'Recursos Humanos'
  | 'Finanzas'
  | 'Logistica';
