import { Category } from "../interfaces/categories.interface";

/**
 * Listado de categorías disponibles en el sistema.
 *
 * Esta constante simula una fuente de datos (mock) que representa
 * las categorías de productos utilizadas para:
 * - Pruebas unitarias
 * - Desarrollo sin backend
 * - Ejercicios académicos
 *
 * @type {Category[]}
 */
export const CATEGORIES: Category[] = [
  { id: 1, name: 'Electronica', description: 'Dispositivos electronicos y tecnologia', status: 'Activa' },
  { id: 2, name: 'Hogar', description: 'Articulos para el hogar y decoracion', status: 'Activa' },
  { id: 3, name: 'Deportes', description: 'Implementos y ropa deportiva', status: 'Activa' },
  { id: 4, name: 'Moda', description: 'Ropa, calzado y accesorios', status: 'Inactiva' },
  { id: 5, name: 'Alimentos', description: 'Productos alimenticios y bebidas', status: 'Activa' },
  { id: 6, name: 'Juguetes', description: 'Juguetes y juegos para todas las edades', status: 'Inactiva' },
  { id: 7, name: 'Salud', description: 'Productos de cuidado personal y salud', status: 'Activa' },
  { id: 8, name: 'Belleza', description: 'Cosmeticos y productos de belleza', status: 'Activa' },
  { id: 9, name: 'Mascotas', description: 'Alimentos y accesorios para mascotas', status: 'Inactiva' },
  { id: 10, name: 'Papeleria', description: 'Utiles escolares y de oficina', status: 'Activa' },
];
