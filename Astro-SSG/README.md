# Taller 4 - Punto 1: Astro SSG

Este proyecto corresponde a la parte de la actividad construida con Astro, siguiendo el paradigma de Static Site Generation (SSG). A diferencia de una aplicación de página única, aquí el HTML de cada vista se genera completamente durante el proceso de build, por lo que el navegador recibe el contenido ya listo para mostrarse, sin depender de JavaScript para la primera carga.

Este proyecto forma parte de un monorepo comparativo entre SPA y SSG. El otro proyecto, Client-Angular, implementa exactamente las mismas vistas usando Angular como arquitectura SPA. El README de la raíz del repositorio explica esa comparación con más detalle.

Integrantes: Santiago Santacruz y Juan Felipe Marulanda.

## Requisitos previos

Se necesita tener instalado Node.js en una versión 18.20.8 o superior, 20.3 o superior, o 22 en adelante, junto con npm.

## Cómo ejecutar el proyecto en modo desarrollo

Desde la carpeta del proyecto se deben ejecutar los siguientes comandos.

npm install
npm run dev

Una vez que el servidor de desarrollo inicie, el proyecto queda disponible en http://localhost:4321.

## Generar el build de producción

Para generar la versión final del sitio, lista para desplegar, se usa el comando npm run build. Este comando genera el sitio estático dentro de la carpeta dist. Si se quiere revisar cómo se ve ese build antes de subirlo a algún servidor, se puede usar el comando npm run preview.

## Vistas disponibles

El proyecto cuenta con seis vistas, todas implementadas también en la versión Angular del mismo dominio de datos.

La ruta /users muestra el listado de usuarios, con un badge de color según la ingeniería a la que pertenece cada uno.

La ruta /products muestra el listado de productos, con un badge de color según su categoría.

La ruta /current-date muestra la fecha actual del sistema.

La ruta /employees muestra el listado de empleados, con un badge de color según el departamento al que pertenecen.

La ruta /projects muestra el listado de proyectos, con un badge de color según el estado en el que se encuentra cada proyecto.

La ruta /categories muestra el listado de categorías, con un badge de color según si están activas o inactivas.

## Estructura del proyecto

Dentro de la carpeta src se organiza el código de la siguiente manera. La carpeta components/shared contiene los componentes reutilizables entre vistas, como el badge, los íconos y la barra de navegación. La carpeta data contiene los datos de ejemplo que usa cada vista, organizados por dominio. La carpeta interfaces contiene los tipos de TypeScript que describen la forma de cada entidad, como usuario, producto, empleado, proyecto y categoría. La carpeta layouts contiene el layout principal que envuelve todas las páginas. La carpeta pages contiene cada una de las vistas de la aplicación, que Astro convierte automáticamente en rutas.

## Documentación oficial

Para más información sobre cómo está organizado un proyecto Astro en general, se puede consultar la guía oficial en docs.astro.build.