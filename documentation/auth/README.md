# 🔐 Auth Module Documentation

**Overview:**
Este módulo gestiona la autenticación y autorización de usuarios en el sistema Pet-Shop.  
Implementa JWT (JSON Web Tokens) y control de roles para proteger los endpoints.

---

**Endpoints:**

**POST /auth/login**
**Description:** Autentica un usuario y retorna JWT token

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}



**Response:** 200
{
  "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "nombre": "John Doe",
    "email": "user@example.com",
    "rol": "admin"
  }
}


**POST /auth/register:**
**Description:** Registra un nuevo usuario

**Request Body:**

{
  "nombre": "New User",
  "email": "new@example.com",
  "password": "password123",
  "rol": "cliente"
}

// RESPONSE: 201

{
  "id": 2,
  "nombre": "New User",
  "email": "new@example.com",
  "rol": "cliente",
  "activo": true
}



// GET /auth/profile
// Description: Obtiene el perfil del usuario actual

// Headers:
// Authorization: Bearer <jwt-token>

// RESPONSE: 200

{
  "id": 1,
  "nombre": "John Doe",
  "email": "user@example.com",
  "rol": "admin",
  "activo": true
}


Guards Implementados
JwtAuthGuard
Verifica la validez del token JWT

Extrae información del usuario del token

Protege endpoints que requieren autenticación

RolesGuard
Valida los roles de usuario para acceso a endpoints

Usa el decorador @Roles() para especificar permisos

Ejemplo: @Roles(UserRole.ADMIN, UserRole.EMPLOYEE)



Componentes del Módulo
Controlador (auth.controller.ts)
login() - Autenticación de usuarios

register() - Registro de nuevos usuarios

getProfile() - Obtener perfil del usuario

Servicio (auth.service.ts)
validateUser() - Valida credenciales

login() - Genera JWT token

register() - Crea nuevo usuario con password hasheado

Estrategia (jwt.strategy.ts)
Configuración de Passport JWT para extraer usuario del token

DTOs
LoginDto - Validación de credenciales

RegisterDto - Validación de registro de usuario




