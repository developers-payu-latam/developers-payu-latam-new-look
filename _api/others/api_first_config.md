---
title: Configuraciones iniciales ~ API
position: 3.10.2
description:
---

El intercambio de mensajes se realiza a través de cadenas <code id="codeinl">XML</code> o <code id="codeinl">JSON</code>, las operaciones se distinguen a través de un comando que se envía en la petición.

Puedes definir el lenguaje que deseas usar a través de las cabeceras <code id="codeinl">HTTP Content-type</code> y <code id="codeinl">Accept</code>. Se pueden usar todas las combinaciones posibles.

|content-type|accept|
|---|---|
|application/xml|application/xml|
|application/json|application/json|
|application/xml|application/json|
|application/json|application/xml|

La transmisión de las transacciones es asegurada a través de una conexión TLS (Transport Layer Security) de 256 bits desde el servidor del comercio hasta nuestro Gateway de pagos
{: .info }
