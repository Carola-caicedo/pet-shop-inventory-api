

**Overview:**
Este módulo gestiona la administración de usuarios del sistema.  
Permite a los administradores crear, editar, listar y eliminar usuarios con diferentes roles.


**Endpoints:**

**GET /users**
**Description:** Obtiene todos los usuarios (Solo Admin)

**Headers:**
- Authorization: Bearer <jwt-token>


**Response (200):**
```json
[
  {
    "id": 1,
    "nombre": "Admin User",
    "email": "admin@example.com",
    "rol": "admin",
    "activo": true
  },
  {
    "id": 2,
    "nombre": "Employee User", 
    "email": "employee@example.com",
    "rol": "empleado",
    "activo": true
  }
]



GET /users/:id
Description: Obtiene un usuario por ID

Response (200):


{
  "id": 1,
  "nombre": "John Doe",
  "email": "john@example.com", 
  "rol": "admin",
  "activo": true
}


POST /users
Description: Crea un nuevo usuario (Solo Admin)

Request Body:

{
  "nombre": "New User",
  "email": "new@example.com",
  "password": "password123",
  "rol": "empleado"
}

Response (201):

{
  "id": 3,
  "nombre": "New User",
  "email": "new@example.com",
  "rol": "empleado",
  "activo": true
}


PATCH /users/:id
Description: Actualiza un usuario 

Request Body:

{
  "nombre": "Updated Name"
}


Response (200):

{
  "id": 1,
  "nombre": "Updated Name",
  "email": "user@example.com",
  "rol": "admin", 
  "activo": true
}

DELETE /users/:id
Description: Elimina un usuario

Response (200):

{
  "message": "User deleted successfully"
}



Sistema de Roles
UserRole Enum

export enum UserRole {
  ADMIN = 'admin',
  EMPLOYEE = 'empleado', 
  CLIENT = 'cliente'
}

Permisos por Rol
ADMIN: Acceso completo a todos los endpoints

EMPLOYEE: Gestión de productos, categorías, inventario

CLIENT: Solo consultas y perfil propio

Componentes del Módulo
Controlador (users.controller.ts)
findAll() - Lista usuarios (Admin)

findOne() - Obtiene usuario por ID

create() - Crea nuevo usuario (Admin)

update() - Actualiza usuario

remove() - Elimina usuario (Admin)

Servicio (users.service.ts)
Gestión completa de usuarios

Validación de permisos

Hash de contraseñas con bcrypt


Entidad (user.entity.ts)
id, nombre, email, password, rol, activo

Timestamps automáticos

DTOs
CreateUserDto - Validación creación usuario

UpdateUserDto - Validación actualización usuario