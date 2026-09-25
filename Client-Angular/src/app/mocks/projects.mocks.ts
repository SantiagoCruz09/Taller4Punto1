import { Project } from "../interfaces/projects.interface";

export const PROJECTS_MOCK: Project[] = [
  {
    id: 1,
    name: 'Portal de Matriculas',
    description: 'Plataforma web para matricula academica de estudiantes',
    status: 'Activo',
    budget: 15000000,
  },
  {
    id: 2,
    name: 'Biblioteca Virtual',
    description: 'Sistema de consulta y prestamo de libros digitales',
    status: 'Finalizado',
    budget: 8000000,
  }
];
