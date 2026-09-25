# Taller 4 - Punto 1: Arquitecturas Frontend, SPA vs SSG

Este repositorio contiene el desarrollo del primer punto del Taller 4 de la asignatura Arquitectura de Software. El objetivo del ejercicio es comparar dos formas distintas de construir una aplicación frontend, implementando exactamente el mismo contenido en ambos paradigmas.

El repositorio está organizado como un monorepo con dos proyectos independientes. Client-Angular representa la arquitectura SPA, de Single Page Application, donde el navegador descarga un bundle de JavaScript y toda la interfaz se construye del lado del cliente. Astro-SSG representa la arquitectura SSG, de Static Site Generation, donde el HTML de cada página se genera durante el proceso de build y el navegador recibe el contenido ya construido.

Integrantes: Santiago Santacruz y Juan Felipe Marulanda.

Docente: Jesus David Mejia Vergara.

## Requisitos previos

Para ejecutar cualquiera de los dos proyectos se necesita tener instalado Node.js, en su versión 20.19 o superior, recomendándose la versión 22 LTS, además de npm y Git. Para el proyecto de Angular también es necesario tener instalado el Angular CLI, que se puede instalar globalmente con el comando npm install -g @angular/cli.

## Cómo ejecutar Astro-SSG

Se debe entrar a la carpeta Astro-SSG y ejecutar los comandos npm install seguido de npm run dev. El proyecto queda disponible en http://localhost:4321.

## Cómo ejecutar Client-Angular

Se debe entrar a la carpeta Client-Angular y ejecutar los comandos npm install seguido de npm start. El proyecto queda disponible en http://localhost:4200.

## Cómo generar los builds de producción

Para comparar el tamaño de cada aplicación una vez compilada, se deben generar los builds de ambos proyectos por separado, entrando a cada carpeta y ejecutando el comando npm run build. Cada comando genera una carpeta dist dentro de su respectivo proyecto, que es lo que normalmente se subiría a un servidor en un despliegue real.

## Cómo ejecutar las pruebas unitarias

Las pruebas unitarias del proyecto de Angular se ejecutan entrando a la carpeta Client-Angular y corriendo el comando npm test.

## Vistas implementadas

Las siguientes seis vistas están implementadas en ambos proyectos, con el mismo contenido y la misma estructura de datos, de manera que la comparación entre arquitecturas sea justa.

La vista de Usuarios se encuentra en la ruta /users tanto en Angular como en Astro, y muestra una tabla de usuarios con un badge de color según su ingeniería.

La vista de Productos se encuentra en la ruta /products en ambos proyectos, y muestra una tabla de productos con un badge de color según su categoría.

La vista de Fecha se encuentra en la ruta /date en Angular y en la ruta /current-date en Astro, y muestra la fecha actual del sistema.

La vista de Empleados se encuentra en la ruta /employees en ambos proyectos, y muestra una tabla de empleados con un badge de color según su departamento.

La vista de Proyectos se encuentra en la ruta /projects en ambos proyectos, y muestra una tabla de proyectos con un badge de color según su estado.

La vista de Categorías se encuentra en la ruta /categories en ambos proyectos, y muestra una tabla de categorías con un badge de color según si están activas o inactivas.

## Sobre el análisis comparativo

El análisis de tamaño de build, tiempo de carga, y la conclusión técnica sobre qué arquitectura resulta más eficiente según el caso de uso, se encuentran desarrollados en el documento entregable del taller, y no forman parte de este README.