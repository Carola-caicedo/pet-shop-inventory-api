# 🧾 Suppliers Module Documentation

## 📌 Overview
Este módulo gestiona toda la información relacionada con los proveedores de la tienda.  
Permite registrar, actualizar, consultar y eliminar datos de los proveedores.

---

## ⚙️ Endpoints
| Método | Endpoint | Descripción |
|--------|------------|-------------|
| **GET** | `/suppliers` | Lista todos los proveedores |
| **GET** | `/suppliers/:id` | Muestra los detalles de un proveedor específico |
| **POST** | `/suppliers` | Crea un nuevo proveedor |
| **PUT** | `/suppliers/:id` | Actualiza la información de un proveedor |
| **DELETE** | `/suppliers/:id` | Elimina un proveedor existente |

---

## 🧩 Controlador (`suppliers.controller.ts`)
Encargado de recibir las solicitudes HTTP y dirigirlas al servicio correspondiente.  
Utiliza los DTOs para validar los datos de entrada.

---

## 🧠 Servicio (`suppliers.service.ts`)
Contiene la lógica de negocio para crear, actualizar, listar o eliminar proveedores.  
Se conecta con la entidad `SupplierEntity` para interactuar con la base de datos.

---

## 🏗️ Entidad (`supplier.entity.ts`)
Define la estructura de la tabla de proveedores, con atributos como:
- `id`
- `name`
- `contact`
- `phone`
- `email`
- `address`

---

## 🧱 DTOs
- `CreateSupplierDto`
- `UpdateSupplierDto`
Ambos controlan qué campos son obligatorios o editables al crear o actualizar un proveedor.
