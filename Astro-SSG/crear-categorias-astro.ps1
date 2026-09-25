Set-Content -Path "src\interfaces\Categories.ts" -Value @'
export interface Category {
  id: number;
  name: string;
  description: string;
  status: CategoryStatus;
}

export type CategoryStatus =
  | 'Activa'
  | 'Inactiva';
'@

Set-Content -Path "src\data\Categories.ts" -Value @'
import type { Category } from "@interfaces/Categories";

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
'@

Set-Content -Path "src\pages\categories.astro" -Value @'
---
import Badge from "@components/shared/Badge.astro";
import { CATEGORIES } from "@data/Categories";
import type { BadgeType } from "@interfaces/Badge";
import type { Category, CategoryStatus } from "@interfaces/Categories";
import MainLayout from "@layouts/MainLayout.astro";

const categories: Category[] = CATEGORIES;

const statusMap: Record<CategoryStatus, BadgeType> = {
  'Activa': 'success',
  'Inactiva': 'secondary',
}
---
<MainLayout>
  <table class="table table-striped border">
    <thead>
      <tr>
        <th scope="col">Id</th>
        <th scope="col">Nombre</th>
        <th scope="col">Descripcion</th>
        <th scope="col">Estado</th>
      </tr>
    </thead>
    <tbody>
      {categories.map((category) => (
        <tr>
          <th scope="row">{category.id}</th>
          <td>{category.name}</td>
          <td>{category.description}</td>
          <td>
            <Badge
              text={category.status}
              type={statusMap[category.status]}
            />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</MainLayout>
'@

Write-Host "Listo: se crearon los 3 archivos nuevos de Categorias en Astro-SSG" -ForegroundColor Green