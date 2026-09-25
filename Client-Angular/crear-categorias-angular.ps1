New-Item -ItemType Directory -Force -Path "src\app\services\categories" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\components\categories-table" | Out-Null
New-Item -ItemType Directory -Force -Path "src\app\pages\categories" | Out-Null

Set-Content -Path "src\app\interfaces\categories.interface.ts" -Value @'
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
'@

Set-Content -Path "src\app\data\categories.interface.ts" -Value @'
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
'@

Set-Content -Path "src\app\mocks\categories.mocks.ts" -Value @'
import { Category } from "../interfaces/categories.interface";

export const CATEGORIES_MOCK: Category[] = [
  {
    id: 1,
    name: 'Electronica',
    description: 'Dispositivos electronicos y tecnologia',
    status: 'Activa',
  },
  {
    id: 2,
    name: 'Hogar',
    description: 'Articulos para el hogar y decoracion',
    status: 'Activa',
  }
];
'@

Set-Content -Path "src\app\services\categories\categories.service.ts" -Value @'
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
'@

Set-Content -Path "src\app\services\categories\categories.service.spec.ts" -Value @'
import { TestBed } from '@angular/core/testing';
import { CategoriesService } from './categories.service';
import { CATEGORIES } from '../../data/categories.interface';

describe('CategoriesService', () => {
  let service: CategoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoriesService);
  });

  describe('Creacion del servicio', () => {

    it('deberia crearse correctamente', () => {
      expect(service).toBeTruthy();
    });

    it('getAllCategories deberia retornar un observable con las categorias', (done) => {
      service.getAllCategories().subscribe(categories => {
        expect(categories).toEqual(CATEGORIES);
        expect(categories.length).toBe(CATEGORIES.length);
        done();
      });
    });

  });

});
'@

Set-Content -Path "src\app\components\categories-table\categories-table.component.ts" -Value @'
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import { CategoryStatus, Category } from '../../interfaces/categories.interface';

/**
 * Componente de tabla de categorías.
 *
 * Se utiliza para mostrar un listado de categorías en una tabla,
 * mostrando información como nombre, descripción y un badge visual
 * que indica el estado de cada categoría.
 *
 * @remarks
 * Forma parte de la capa de presentación de la aplicación y se considera
 * un **organismo** dentro del sistema de diseño atómico.
 *
 * @example
 * ```html
 * <app-categories-table [categories]="categoriesList"></app-categories-table>
 * ```
 */
@Component({
  selector: 'app-categories-table',
  templateUrl: './categories-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class CategoriesTableComponent {
  /**
   * Listado de categorías que se mostrarán en la tabla.
   * @type {Category[]}
   */
  @Input() categories: Category[] = [];

  /**
   * Mapeo de estados de categorías a tipos de Badge.
   * @type {Record<CategoryStatus, BadgeType>}
   */
  statusMap: Record<CategoryStatus, BadgeType> = {
    'Activa': 'success',
    'Inactiva': 'secondary',
  }
}
'@

Set-Content -Path "src\app\components\categories-table\categories-table.component.html" -Value @'
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
		@for (category of categories; track category) {
			<tr>
				<th scope="row">{{ category.id }}</th>
				<td>{{ category.name }}</td>
				<td>{{ category.description }}</td>
				<td>
					<dsb-badge-atom
						[text]="category.status"
						[type]="statusMap[category.status]" >
                    </dsb-badge-atom>
				</td>
			</tr>
		}
	</tbody>
</table>
'@

Set-Content -Path "src\app\components\categories-table\categories-table.component.spec.ts" -Value @'
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { CATEGORIES_MOCK } from '../../mocks/categories.mocks';
import { CategoriesTableComponent } from './categories-table.component';

describe('CategoriesTableComponent', () => {
  let component: CategoriesTableComponent;
  let fixture: ComponentFixture<CategoriesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('deberia renderizar una fila por cada categoria', () => {
    component.categories = CATEGORIES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.categories.length);
  });

  it('deberia mostrar los datos de la categoria en cada columna', () => {
    component.categories = CATEGORIES_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const category = component.categories[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(category.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(category.name);
      expect(columns[2].nativeElement.textContent.trim()).toBe(category.description);
      expect(columns[3].nativeElement.textContent.trim()).toBe(category.status);
    });
  });

  it('deberia mapear cada estado a su BadgeType correcto', () => {
    expect(component.statusMap['Activa']).toBe('success');
    expect(component.statusMap['Inactiva']).toBe('secondary');
  });
});
'@

Set-Content -Path "src\app\pages\categories\categories.page.ts" -Value @'
import { Component, inject } from '@angular/core';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { Category } from '../../interfaces/categories.interface';
import { CategoriesService } from '../../services/categories/categories.service';
import { State } from '../../interfaces/state.interface';
import { AlertComponent } from '../../components/alert/alert.component';

/**
 * Componente contenedor de categorías.
 *
 * Se utiliza para gestionar y mostrar un listado de categorías
 * utilizando el componente `CategoriesTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el servicio `CategoriesService`
 * para obtener las categorías y pasarlas al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 */
@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  imports: [CategoriesTableComponent, AlertComponent],
})
export class CategoriesPage {
  /**
   * Listado de categorías obtenidas desde el servicio.
   * @type {Category[]}
   */
  categories: Category[] = [];

  /**
   * Estado actual del componente.
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Servicio para obtener categorías.
   */
  private categoriesService = inject(CategoriesService);

  /**
   * Inicializa el componente y carga las categorías.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.categoriesService.getAllCategories().subscribe({
      next: (categories) => {
        this.categories = categories;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error)
        this.state = 'error';
      },
    })
  }
}
'@

Set-Content -Path "src\app\pages\categories\categories.page.html" -Value @'
@switch(state){

    @case('loading'){
        <app-alert alertState="loading" text="Cargando Categorias..." ></app-alert>
    }

    @case('error'){
        <app-alert alertState="error" text="Error al Cargar las Categorias" ></app-alert>
    }

    @case('success'){
        <app-categories-table [categories]="categories" ></app-categories-table>
    }

}
'@

Set-Content -Path "src\app\pages\categories\categories.page.spec.ts" -Value @'
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesPage } from './categories.page';
import { provideHttpClient } from '@angular/common/http';
import { CategoriesService } from '../../services/categories/categories.service';
import { CategoriesTableComponent } from '../../components/categories-table/categories-table.component';
import { of, throwError } from 'rxjs';
import { CATEGORIES_MOCK } from '../../mocks/categories.mocks';
import { By } from '@angular/platform-browser';

describe('CategoriesPage', () => {
  let component: CategoriesPage;
  let fixture: ComponentFixture<CategoriesPage>;
  let categoriesService: CategoriesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriesPage, CategoriesTableComponent],
      providers: [provideHttpClient()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesPage);
    component = fixture.componentInstance;
    categoriesService = TestBed.inject(CategoriesService);
  });

  it('deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('deberia llamar a getAllCategories al iniciar', () => {
    const spyGetAllCategories = jest.spyOn(categoriesService, 'getAllCategories').mockReturnValue(of(CATEGORIES_MOCK));
    fixture.detectChanges();
    expect(spyGetAllCategories).toHaveBeenCalled();
  });

  it('deberia asignar las categorias recibidas del servicio', () => {
    jest.spyOn(categoriesService, 'getAllCategories').mockReturnValue(of(CATEGORIES_MOCK));
    fixture.detectChanges();
    expect(component.categories).toEqual(CATEGORIES_MOCK);
  });

  it('deberia pasar las categorias al componente categories-table', () => {
    jest.spyOn(categoriesService, 'getAllCategories').mockReturnValue(of(CATEGORIES_MOCK));
    fixture.detectChanges();
    const tableComponent = fixture.debugElement
      .query(By.directive(CategoriesTableComponent))
      .componentInstance;
    expect(tableComponent.categories).toEqual(CATEGORIES_MOCK);
  });

  it('deberia manejar el error cuando falla getAllCategories', () => {
    component.categories = [];
    const errorResponse = new Error('Error al cargar categorias');

    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(categoriesService, 'getAllCategories').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(categoriesService.getAllCategories).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.categories.length).toBe(0);
  });
});
'@

Write-Host "Listo: se crearon los 11 archivos nuevos de Categorias en Client-Angular (con documentacion)" -ForegroundColor Green