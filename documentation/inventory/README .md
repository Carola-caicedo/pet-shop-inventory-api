# 📦 Inventory Module Documentation

## 📌 Overview
Este módulo controla el inventario de productos, reflejando las entradas y salidas de mercancía.  
Está vinculado a proveedores, productos y movimientos de inventario.

---

## ⚙️ Endpoints
| Método | Endpoint | Descripción |
|--------|------------|-------------|
| **GET** | `/inventory` | Lista todos los movimientos de inventario |
| **GET** | `/inventory/:id` | Consulta un movimiento específico |
| **POST** | `/inventory` | Registra un nuevo movimiento (entrada o salida) |
| **PUT** | `/inventory/:id` | Actualiza un movimiento existente |
| **DELETE** | `/inventory/:id` | Elimina un registro de inventario |

---

## 🧩 Controlador (`inventory.controller.ts`)
Recibe las solicitudes relacionadas con el inventario y delega la lógica al servicio.

---

## 🧠 Servicio (`inventory.service.ts`)
Implementa la lógica de control de stock:
- Registra entradas o salidas.
- Valida existencias disponibles.
- Calcula el balance de productos.

---

## 🏗️ Entidad (`inventory.entity.ts`)
Define los campos:
- `id`
- `productId`
- `quantity`
- `type` (entrada o salida)
- `date`

---

## 🧱 DTOs
- `CreateInventoryDto`
- `UpdateInventoryDto`
Garantizan que los datos enviados sean correctos antes de procesarlos.
