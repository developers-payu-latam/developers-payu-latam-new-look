---
title: SDK PHP
position: 3.1.4
description: Configuraciones iniciales
---

Para realizar el proceso de conexión con el API, el SDK se puede ejecutar en máquinas que tengan versiones mayores o iguales a 5.2.1 de PHP. Adicionalmente se requieren las siguientes extensiones de PHP en tu servidor:

- curl
+ xml
- mbstring
+ json

Deberás además incluir la clase PayU:

~~~ php
<?php
require_once '[ruta/payu-php-sdk]/lib/PayU.php';
...
?>
~~~

|Parámetro|Tipo|¿Requerido?|Descripción|
|---|---|---|---|
|language|Language|Sí|El idioma usado para los mensajes de error del sistema y en los correos electrónicos que se envían al comprador y vendedor. Se soportan actualmente *en* (Inglés), *es* (Español) y *pt* (Portugués).|
|isTest|Boolean|Sí|*true* si se trata de una petición de prueba, *false* de lo contrario. Dependiendo del tipo de transacción u operación, el comportamiento varía según el valor de este campo.|
|apiLogin|String|Sí|El *API Login* del comercio.|
|apiKey|String|Sí|El *API Key* del comercio.|
|merchantId|String|Sí|El identificador del comercio.|

~~~ php
<?php
PayU::$apiKey = "xxxxxxxxxxxx"; //Ingrese aquí su propio apiKey.
PayU::$apiLogin = "xxxxxxxxxxxx"; //Ingrese aquí su propio apiLogin.
PayU::$merchantId = "1"; //Ingrese aquí su Id de Comercio.
PayU::$language = SupportedLanguages::ES; //Seleccione el idioma.
PayU::$isTest = false; //Dejarlo True cuando sean pruebas.
...
?>
~~~

Adicionalmente, se debe configurar el API para que dirija las peticiones a la URL correspondientes utilizando la clase Environment como se muestra a continuación:  

~~~ php
<?php
// URL de Pagos
Environment::setPaymentsCustomUrl("https://sandbox.api.payulatam.com/payments-api/4.0/service.cgi");
// URL de Consultas
Environment::setReportsCustomUrl("https://sandbox.api.payulatam.com/reports-api/4.0/service.cgi");
// URL de Suscripciones para Pagos Recurrentes
Environment::setSubscriptionsCustomUrl("https://sandbox.api.payulatam.com/payments-api/rest/v4.3/");
...
?>
~~~

<a href="/sdk/java/payu-php-sdk-4.5.7.zip" class="payu-btn payu-btn-blue">Puedes obtener la clase aquí: v4.5.7</a>
