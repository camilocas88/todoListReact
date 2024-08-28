# Todo List App

Este proyecto es una aplicación de lista de tareas (To-Do List) desarrollada en React. La aplicación permite a los usuarios agregar, editar, eliminar y filtrar tareas. También utiliza `json-server` para simular una API de backend para la persistencia de los datos.

## Características

1. **Funcionalidad Básica**:
   - Agregar, editar y eliminar tareas.
   - Marcar tareas como completadas.
   - Filtrar tareas por todas, completadas y pendientes.

2. **Manejo de Estado**:
   - Utiliza `Zustand` para el manejo de estado de la aplicación.
   - Persistencia de tareas utilizando `json-server` como API simulada.

3. **Optimización**:
   - Lazy loading de componentes.
   - Memoization para evitar renderizaciones innecesarias.

## Instalación

### Requisitos previos

- Node.js (versión 14 o superior)
- npm o yarn

### Pasos de instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/camilocas88/todoListReact.git

2.	Navega al directorio del proyecto:
  ```bash
  cd todo-list-app

3.	Instala las dependencias:
  ```bash
  npm install

Ejecución

Servidor de Desarrollo

1.	Inicia el servidor de desarrollo de React:
  ```bash
  npm start

Esto abrirá la aplicación en tu navegador en http://localhost:3000.


API Simulada con json-server

	1.	Inicia el servidor json-server para simular una API de backend:

  npm run json-server


Esto iniciará el servidor en http://localhost:5001. El archivo db.json en la raíz del proyecto se utilizará como la fuente de datos para las tareas.

Comandos disponibles

	•	npm start: Inicia la aplicación React en modo de desarrollo.
	•	npm run json-server: Inicia el servidor json-server en el puerto 5001.
	•	npm run build: Construye la aplicación para producción en la carpeta build.
	•	npm test: Ejecuta las pruebas de la aplicación utilizando Jest.

Arquitectura del Proyecto

	•	src/components: Contiene los componentes de la aplicación, como TodoItem, TodoList, EditTodoModal, entre otros.
	•	src/store: Maneja el estado de la aplicación utilizando Zustand.
	•	public: Contiene el archivo index.html que sirve como la entrada de la aplicación.
	•	db.json: Archivo utilizado por json-server para simular la API de backend.

Persistencia de Tareas

La persistencia de las tareas se realiza a través de json-server, que simula una API RESTful. Las operaciones CRUD se realizan en este servidor para agregar, editar y eliminar tareas.

Optimización

	•	Lazy Loading: Los componentes se cargan de manera diferida utilizando React.lazy y Suspense.
	•	Memoization: Se utiliza React.memo para evitar renderizaciones innecesarias en los componentes que no han cambiado sus props.

Contribuir

Las contribuciones son bienvenidas. Por favor, asegúrate de seguir las mejores prácticas de desarrollo y abrir un pull request con tus cambios.

Licencia

Este proyecto está licenciado bajo la licencia MIT. Consulta el archivo LICENSE para más detalles.

