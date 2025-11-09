Documentación del módulo: Products & Categories
Autora: Diana Sofía Sierra
Proyecto: Pet Shop Inventory API
Módulo: Products & Categories

 Descripción general
Este módulo gestiona productos y categorías dentro del sistema de inventario.
Permite realizar operaciones CRUD (crear, leer, actualizar y eliminar) y relacionar productos con sus respectivas categorías.
 Controladores probados
ProductsController
•	Maneja las rutas /products/*
•	Funcionalidades:
o	Crear producto
o	Listar productos
o	Actualizar producto
o	Eliminar producto
•	Pruebas unitarias validadas con Jest
CategoriesController
•	Maneja las rutas /categories/*
•	Funcionalidades:
o	Crear categoría
o	Listar categorías
o	Actualizar categoría
o	Eliminar categoría
•	Pruebas unitarias completadas con Jest

 Servicios probados
ProductsService
•	Lógica de negocio: control de stock, alertas de inventario, actualización de datos.
•	Métodos probados:
o	create()
o	findAll()
o	update()
o	remove()
CategoriesService
•	Lógica de manejo de categorías.
•	Métodos probados:
o	create()
o	findAll()
o	update()
o	remove()

 Ejemplos de Requests/Responses
Crear producto (POST /products):
{
  "nombre": "Collar de cuero",
  "descripcion": "Collar elegante para perro",
  "precio": 25000,
  "stock": 10,
  "proveedor": "PetStyle",
  "categoria_id": 1
}
Respuesta esperada:
{
  "id": 1,
  "nombre": "Collar de cuero",
  "stock": 10
}
Actualizar producto (PATCH /products/1):
{
  "nombre": "Collar de cuero actualizado",
  "stock": 8
}
Eliminar producto (DELETE /products/1):
{
  "affected": 1
}

Sección “¿Cómo se testea?”
1.	Ejecutar los tests con Jest:
2.	npm test
3.	Deben ejecutarse correctamente los archivos:
4.	src/test/products/products.controller.spec.ts
5.	src/test/products/products.service.spec.ts
6.	src/test/categories/categories.controller.spec.ts
7.	src/test/categories/categories.service.spec.ts
8.	Resultado esperado:
9.	Test Suites: 5 passed, 5 total
10.	Tests:       12 passed, 12 total

 Carpetas trabajadas
src/products/
src/categories/
test/products/
test/categories/
documentation/products/

Autoría del módulo
•	Responsable: Diana Sofía Sierra
•	Rol en el equipo: Testing y documentación técnica del módulo Products & Categories.
•	Repositorio de trabajo: Rama del equipo compartido en GitHub.



