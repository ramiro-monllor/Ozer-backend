# Clients and Bills - API

<p align="center">
<img src="https://www.microtech.es/hubfs/Fotos%20blog/retener_clientes.jpg" width="300" alt="Clients and Bills - API"/>
</p>

## Introducción

Clients and Bills - API es un sistema desarrollado utilizando tecnologías modernas como Express, TypeScript, Node Js. La plataforma permite a los usuarios acceder a los clientes y a las facturas de nuestra plataforma.

## Tecnologías Utilizadas

- Express
- TypeScript
- Node Js

## Instalación y Ejecución

Para comenzar a utilizar Clients and Bills - API en tu entorno local, sigue los siguientes pasos:

1. Clona el repositorio desde [https://github.com/ramiro-monllor/Ozer-backend].
2. Abre una terminal y navega hasta la ubicación del proyecto.
3. Ejecuta el siguiente comando para instalar las dependencias:

```bash
$ npm install
```

Después de la instalación, inicia el servidor de desarrollo con:

```bash
$ npm run dev
```

Verificar la variables del .env.

Abre tu navegador y visita http://localhost:3001 para acceder a la API.

## Rutas Disponibles

### Facturas

- **Endpoint:** `/api/bill`
- **Método:** GET
- **Descripción:** Esta ruta devuelve una matriz que contiene todas las facturas.

- **Endpoint:** `/api/bill`
- **Método:** POST
- **Descripción:** Esta ruta crea una nueva factura.

- **Endpoint:** `/api/bill/:billId`
- **Método:** PUT
- **Descripción:** Esta ruta actualiza la información de una factura específica identificada por el parámetro billId.

- **Endpoint:** `/api/bill/:billId`
- **Método:** DELETE
- **Descripción:** Esta ruta elimina una factura específica identificada por el parámetro billId.

### Clientes

- **Endpoint:** `/api/client`
- **Método:** GET
- **Descripción:** Esta ruta devuelve una matriz que contiene todos los clientes.

- **Endpoint:** `/api/client/:clientId`
- **Método:** GET
- **Descripción:** Esta ruta devuelve un objeto con la información de un cliente específico identificado por el parámetro clientId, incluyendo las facturas asociadas a ese cliente.


## Repositorio

- https://github.com/ramiro-monllor/Ozer-backend
