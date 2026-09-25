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
