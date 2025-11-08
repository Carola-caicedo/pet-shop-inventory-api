# 🐶 Pets Module Documentation

## 📌 Overview
Este módulo administra la información de las mascotas disponibles en la tienda.  
Incluye operaciones CRUD y conexión con categorías o proveedores.

---

## ⚙️ Endpoints
| Método | Endpoint | Descripción |
|--------|------------|-------------|
| **GET** | `/pets` | Lista todas las mascotas registradas |
| **GET** | `/pets/:id` | Muestra la información de una mascota específica |
| **POST** | `/pets` | Registra una nueva mascota |
| **PUT** | `/pets/:id` | Actualiza los datos de una mascota |
| **DELETE** | `/pets/:id` | Elimina una mascota |

---

## 🧩 Controlador (`pets.controller.ts`)
Gestiona las peticiones HTTP relacionadas con las mascotas.  
Hace uso del servicio para aplicar las reglas de negocio.

---

## 🧠 Servicio (`pets.service.ts`)
Procesa la información, aplica reglas y se comunica con la entidad de base de datos `PetEntity`.

---

## 🏗️ Entidad (`pet.entity.ts`)
Define los atributos de una mascota:
- `id`
- `name`
- `breed`
- `age`
- `price`
- `categoryId`
- `supplierId`

---

## 🧱 DTOs
- `CreatePetDto`
- `UpdatePetDto`
Controlan los campos válidos para crear o actualizar registros.
