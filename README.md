# Marvel app

Este proyecto trata de una aplicación de personajes de Marvel, desarrollada principalmente con React y NextJS. En este documento, explicaré brevemente los pasos seguidos para completar los requisitos y los aspectos más destacados de la implementación.

## Descripción

Esta aplicación muestra información sobre diversos personajes del universo de Marvel. 
Permite a los usuarios explorar diferentes personajes, marcar personajes como favoritos, poder filtrar por favoritos, buscar un personaje en específico mediante su nombre completo.
También es posible ver el detalle de un personaje en concreto, se muestra su nombre, una descripción y una lista de comics asociados al personaje.

## Principales tecnologías

- **React**: Se estableció como requisito para el desarollo de la interfaz de usuario, en concreto se ha usado la versión 18, la cual es la última release estable, añadiendo seguridad y confiabilidad para su uso en entornos de producción.
- **Next.js**: Next.js fue utilizado como el marco de trabajo de React. Ofrece características como renderización del lado del servidor (SSR), generación de páginas estáticas, enrutamiento simple, y una estructura de proyecto bien definida que facilita el desarrollo escalable. También se ha optado por su sistema por defecto integrado de caché en componentes, API e imágenes.
- **Vitest**: Para la realización de tests unitarios se optó por usar Vitest. Es una de las recomendaciones de NextJS para el desarrollo de test unitarios. En este caso se utilizó por su facilidad en cuanto a configuración, su rapidez a la hora de lanzar los tests, ya que tiene la capacidad de lanzar tests en paralelo. También se utilizó por ser similar en cuanto a sintaxis a Jest.

## Estructura

En cuanto a la estructura, se ha optado por usar una arquitectura hexagonal para organizar el código. 
Esta arquitectura separa claramente las capas de aplicación, dominio e infraestructura, lo que permite una mayor modularidad, reutilización y testabilidad del código.

## Pasos Seguidos

1. **Análisis de Requisitos**: Se examinaron cuidadosamente los requisitos especificados para comprender completamente lo que se esperaba de la aplicación.

2. **Configuración del Entorno**: Se utilizó Visual Studio Code como IDE, junto con las extensiones correspondientes para el desarrollo con ReactJS.
Se configuró el entorno de desarrollo con Node.js y se instaló React y Next.js utilizando npm.
También se instaló Prettier cómo formateador de código para trabajar en conjunto a ESLint.

3. **Diseño de la Interfaz de Usuario**: Se diseñaron los componentes de la interfaz de usuario necesarios para cumplir con los requisitos. Se utilizó CSS modules para estilizar los componentes, esta tecnología permite aislamiento de estilos, evitando conflictos encapsulando los estilos de cada componente.
Para que la aplicación fuese responsive se optó por usar CSS grid para la estructuración de los contenedores de los distintos componentes y flexbox para los elementos internos.

1. **Implementación de Funcionalidades**: Se implementaron las funcionalidades requeridas, como la obtención de datos de la API de Marvel, visualizar la lista de personajes, visualizar los detalles del personaje, la búsqueda de personajes, el filtrado de personajes por nombre específico, marcar como favoritos y filtrar por favoritos.

2. **Pruebas y Depuración**: Se realizaron pruebas unitarias al módulo de 'characters', el cual es el principal de la aplicación. Se depuraron errores y se corrigieron posibles problemas encontrados durante el proceso.

3. **Optimización y Despliegue**: Se optimizó el rendimiento de la aplicación según fuera necesario. Finalmente, la aplicación se preparó para el despliegue en un entorno de producción, ya sea localmente o en un servidor en la nube, en éste caso para mostrar la aplicación se ha usado Vercel por su compatibilidad con NextJS.

## Uso de caché
Por defecto, Next.js almacena en caché tanto como sea posible para mejorar el rendimiento y reducir costos. Esto significa que las rutas se renderizan estáticamente y las solicitudes de datos se almacenan en caché a menos que optes por no hacerlo, en este proyecto se decidió hacer uso de la cache por defecto en todas las llamadas.
Para comprobar el uso de caché por parte de NextJS, al tener componentes usando SSR, el manejo de la caché se gestiona en el servidor.


## Ejecución del Proyecto

Clonar el repositorio:

```bash
git clone https://github.com/manuxdjent/tech-assessment.git
```

Instalación:
```bash
cd tech-assesment
npm i
```
Ejecución de servidor de desarrollo local:
```bash
npm run dev
```

Generación de la aplicación para producción:
```bash
npm run build
```

Ejecución de tests:
```bash
npm run test
```

Ejecutar herramienta de linting:
```bash
npm run lint
```

## Configuración de variables del entorno
Antes de ejecutar la aplicación localmente o desplegarla en un entorno de producción usando el script 'npm run build', asegúrate de configurar correctamente las variables de entorno necesarias. Crea un archivo llamado .env.local en la raíz del proyecto y proporciona los valores adecuados para cada variable.
```plaintext
NEXT_PUBLIC_BASE_URL=https://api.marvel.com/v1
NEXT_PUBLIC_PRIVATE_KEY=your_private_key
NEXT_PUBLIC_PUBLIC_KEY=your_public_key
```

## Mejoras
- Aumentar el coverage del testing.