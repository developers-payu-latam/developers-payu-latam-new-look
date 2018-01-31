---
title: Integración API y SDK
position: 3.10.1
description: Diseña tu propio checkout y administra el sistema de pagos de tu sitio web<br>Con nuestros kits de desarrollo (PHP y Java) puedes integrar facilmente el API de pagos.<br>Disponible en <a href="/#apiargentinapayment_methods"><img src="/images/illustrations/argentina_logo.png" width="50"></a>&nbsp;&nbsp;<a href="/#apibrazilpayment_methods"><img src="/images/illustrations/brasil.png" width="50"></a>&nbsp;&nbsp;<a href="/#apichilepayment_methods"><img src="/images/illustrations/chile.png" width="50"></a>&nbsp;&nbsp;<a href="/#apicolombiapayment_methods"><img src="/images/illustrations/colombia.png" width="50"></a>&nbsp;&nbsp;<a href="/#apimexicopayment_methods"><img src="/images/illustrations/mexico.png" width="50"></a>&nbsp;&nbsp;<a href="/#apipanamapayment_methods"><img src="/images/illustrations/panama.png" width="50"></a>&nbsp;&nbsp;<a href="/#apiperupayment_methods"><img src="/images/illustrations/peru.png" width="50"></a>
---

Debes desarrollar un cliente HTTPS para transferir la información de las transacciones a través de SSL. Es importante que **NO** se almacenen los datos sensibles de la transacciones como el número de tarjeta de crédito, fecha de expiración, etc. Se recomienda seguir las práctias de PCI DSS (Payment Card Industry Data Security Standard).

Te ofrecemos dos opciones de integración haciendo uso de nuestra API.

|Directamente||
|---|---|
|PayU ofrece una API que le permite a tu comercio procesar transacciones desde diferentes tipos de aplicaciones (web, móvil, IVR, entre otras).<br><br>Dependiendo del país donde registres tu comercio, tendrás acceso a diferentes medios de pago, incluyendo tarjetas de crédito, transferencias bancarias y pagos en efectivo.<br><br>Podrás personalizar el checkout de acuerdo a las necesidades de tu negocio y lo mejor de todo, tu cliente permanecerá en tu sitio web durante la compra.|<img src="/images/illustrations/api1-es.png" width="500">|
{:.nobordertable}

|A través de nuestro SDK||
|---|---|
|PayU ofrece un SDK que permite conectarte a nuestra API de manera más sencilla.<br><br>Como cualquier integración API, podrás personalizar tu checkout de acuerdo a las necesidades de tu negocio y el cliente permanecerá en tu sitio web durante la compra.|<img src="/images/illustrations/developer-b.png" width="500">|
{:.nobordertable}

##### Procesamiento de transacciones

Te ofrecemos las siguientes opciones para el procesamiento de transacciones:

||<a href="/#apiargentinapayment_methods"><img src="/images/illustrations/argentina_logo.png" width="50"></a>|<a href="/#apibrazilpayment_methods"><img src="/images/illustrations/brasil.png" width="50"></a>|<a href="/#apichilepayment_methods"><img src="/images/illustrations/chile.png" width="50"></a>|<a href="/#apicolombiapayment_methods"><img src="/images/illustrations/colombia.png" width="50"></a>|<a href="/#apimexicopayment_methods"><img src="/images/illustrations/mexico.png" width="50"></a>|<a href="/#apipanamapayment_methods"><img src="/images/illustrations/panama.png" width="50"></a>|<a href="/#apiperupayment_methods"><img src="/images/illustrations/peru.png" width="50"></a>|
|---|---|---|---|---|---|---|---|
|Autorización|✓|✓|✗|✗|✗|✗|✓|
|Captura|✓|✓|✗|✗|✗|✗|✓|
|Autorización y captura|✓|✓|✓|✓|✓|✓|✓|
|Anulación|✓|✓|✗|✗|✗|✗|✓|
|Reembolso|✓|✓|✓|✓|✓|✓|✓|
{:.tablemethods}

Donde:

+ **Autorización:** se usa para verificar si una tarjeta de crédito se encuentra activa, si posee fondos, etc. El cobro no se realiza durante esta transacción.
- **Captura:** finaliza una transacción previamente autorizada. Es aquí cuando se realiza el débito de la cuenta de la tarjeta.
+ **Autorización y Captura:** este es el tipo de transacción más usada. Con esta opción se envía a autorización el monto de la transacción y si es aprobada, inmediatamente se realiza la captura.
- **Anulación:** se usa para reversar una transacción previamente autorizada.
+ **Reembolso:** se usa para reversar una transacción previamente capturada.

##### Servicios y funcionalidades API

||<a href="/#apiargentinapayment_methods"><img src="/images/illustrations/argentina_logo.png" width="50"></a>|<a href="/#apibrazilpayment_methods"><img src="/images/illustrations/brasil.png" width="50"></a>|<a href="/#apichilepayment_methods"><img src="/images/illustrations/chile.png" width="50"></a>|<a href="/#apicolombiapayment_methods"><img src="/images/illustrations/colombia.png" width="50"></a>|<a href="/#apimexicopayment_methods"><img src="/images/illustrations/mexico.png" width="50"></a>|<a href="/#apipanamapayment_methods"><img src="/images/illustrations/panama.png" width="50"></a>|<a href="/#apiperupayment_methods"><img src="/images/illustrations/peru.png" width="50"></a>|
|---|---|---|---|---|---|---|---|
|Pagos|✓|✓|✓|✓|✓|✓|✓|
|Promociones|✓|✗|✗|✗|✓|✗|✗|
|Tokenización|✓|✓|✓|✓|✓|✓|✓|
|Reembolsos|✓|✓|✗|✓|✓|✓|✓|
|Pagos recurrentes|✗|✓|✗|✓|✓|✗|✓|
|Procesamiento sin CVV2|✗|✓|✗|✓|✓|✗|✓|
|Consulta|✓|✓|✓|✓|✓|✓|✓|
{:.tablemethods}

##### Servicios y funcionalidades SDK

||<a href="/#apiargentinapayment_methods"><img src="/images/illustrations/argentina_logo.png" width="50"></a>|<a href="/#apibrazilpayment_methods"><img src="/images/illustrations/brasil.png" width="50"></a>|<a href="/#apichilepayment_methods"><img src="/images/illustrations/chile.png" width="50"></a>|<a href="/#apicolombiapayment_methods"><img src="/images/illustrations/colombia.png" width="50"></a>|<a href="/#apimexicopayment_methods"><img src="/images/illustrations/mexico.png" width="50"></a>|<a href="/#apipanamapayment_methods"><img src="/images/illustrations/panama.png" width="50"></a>|<a href="/#apiperupayment_methods"><img src="/images/illustrations/peru.png" width="50"></a>|
|---|---|---|---|---|---|---|---|
|Pagos|✓|✓|✓|✓|✓|✓|✓|
|Promociones|✗|✗|✗|✗|✗|✗|✗|
|Tokenización|✓|✓|✓|✓|✓|✓|✓|
|Reembolsos|✓|✓|✗|✓|✓|✓|✓|
|Pagos recurrentes|✗|✓|✗|✓|✓|✗|✓|
|Procesamiento sin CVV2|✗|✓|✗|✓|✓|✗|✓|
|Consulta|✓|✓|✓|✓|✓|✓|✓|
{:.tablemethods}

##### URLs de procesamiento

Deberás apuntar tu integración a las siguientes direcciones:

~~~
https://api.payulatam.com/payments-api/4.0/service.cgi
~~~
{: title="API" }
~~~ java
PayU.paymentsUrl = “https://api.payulatam.com/payments-api/”;
PayU.reportsUrl = “https://api.payulatam.com/reports-api/”;
~~~
{: title="SDK JAVA" }
~~~ php
<?php
Environment::setPaymentsCustomUrl(“https://api.payulatam.com/payments-api/4.0/service.cgi”);
Environment::setReportsCustomUrl(“https://api.payulatam.com/reports-api/4.0/service.cgi”);
Environment::setSubscriptionsCustomUrl(“https://api.payulatam.com/payments-api/rest/v4.3/”);
?>
~~~
{: title="SDK PHP" }

La codificación para los mensajes debe ser UTF-8.
{: .info }
Debes contar con lenguajes de servidor o CGI tales como Java, C#, VB, PHP, etc.
{: .info }
Las fechas con hora deben seguir el formato yyyy-MM-ddTHH:mm:ss, el formato de la hora es 24 horas. Ej. 2015-08-22T21:35:12.
{: .info }
Es importante validar la longitud y los números de tarjetas de crédito por franquicia junto con los códigos de seguridad.
{: .info }
En condiciones normales la conexión garantiza tiempos de respuesta de 3 segundos en promedio, si hay una situación anormal, el tiempo máximo de respuesta será de 1 minuto. Es altamente recomendable que configures los “timeouts” cuando te conectes con PayU.
{: .info }
Debes instalar el certificado SSL válido en tu servidor y tu sitio debe estar en capacidad de realizar conexiones SSL por lo cual la máquina virtual debe contar con las extensiones de seguridad apropiadas.
{: .warning }
Debes estar en capacidad de almacenar de forma segura tus credenciales de autenticación (API Key y API Login).
{: .warning }
Temporalmente NO utilices certificados de seguridad de curva elíptica o aquellos que cuenten con la suite de cifrado TLS_ECDHE_ECDSA_WITH_RC4_128_SHA en tus peticiones de pago.
{: .warning }
