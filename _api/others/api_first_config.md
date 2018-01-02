---
title: API
position: 3.1.2
description: Configuraciones iniciales
---

La transmisión de las transacciones es asegurada a través de una conexión TLS (Transport Layer Security) de 256 bits desde el servidor del comercio hasta nuestro Gateway de pagos. El intercambio de mensajes se realiza a través de cadenas XML o JSON, las operaciones se distinguen a través de un comando que se envía en la petición

Puedes definir el lenguaje que deseas usar a través de las cabeceras HTTP Content-type y Accept. Se pueden usar todas las combinaciones posibles.

|content-type|accept|
|---|---|
|application/xml|application/xml|
|application/json|application/json|
|application/xml|application/json|
|application/json|application/xml|
