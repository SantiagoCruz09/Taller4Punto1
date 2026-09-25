import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarConfig, NavbarOrganism } from '@brejcha13320/design-system-bootstrap';

/**
 * Componente raíz de la aplicación.
 *
 * @remarks
 * Este componente actúa como punto de entrada principal
 * de la aplicación Angular. Define la estructura base
 * y configura el navbar principal mediante el componente
 * `NavbarOrganism`.
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [RouterOutlet, NavbarOrganism],
})
export class App {

  /**
   * Configuración del navbar principal.
   *
   * @type {NavbarConfig}
   */
  navbarConfig: NavbarConfig = {
    title: 'Angular Client',
    iconConfig: {
      icon: 'bootstrap',
      size: 2
    },
    navLinks: [
      { text: 'Usuarios', url: '/users' },
      { text: 'Productos', url: '/products' },
      { text: 'Fecha', url: '/date' },
      { text: 'Empleados', url: '/employees' },
      { text: 'Proyectos', url: '/projects' },
      { text: 'Categorias', url: '/categories' },
    ]
  };
}