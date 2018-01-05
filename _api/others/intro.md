---
title: Integración API y SDK
position: 3.1.1
description: Diseña tu propio checkout y administra el sistema de pagos de tu sitio web<br>Con nuestros kits de desarrollo (PHP y Java) puedes integrar facilmente el API de pagos.<br>Disponible en <a href="/#apiargentinapayment_methods"><img src="/images/illustrations/argentina_logo.png" width="50"></a>&nbsp;&nbsp;<a href="/#apiargentinapayment_methods"><img src="/images/illustrations/brasil.png" width="50"></a>&nbsp;&nbsp;<a href="/#apiargentinapayment_methods"><img src="/images/illustrations/chile.png" width="50"></a>&nbsp;&nbsp;<a href="/#apiargentinapayment_methods"><img src="/images/illustrations/colombia.png" width="50"></a>&nbsp;&nbsp;<a href="/#apiargentinapayment_methods"><img src="/images/illustrations/mexico.png" width="50"></a>&nbsp;&nbsp;<a href="/#apiargentinapayment_methods"><img src="/images/illustrations/panama.png" width="50"></a>&nbsp;&nbsp;<a href="/#apiargentinapayment_methods"><img src="/images/illustrations/peru.png" width="50"></a>
---

Debes desarrollar un cliente HTTPS para transferir la información de las transacciones a través de SSL. Es importante que **NO** se almacenen los datos sensibles de la transacciones como el número de tarjeta de crédito, fecha de expiración, etc. Se recomienda seguir las práctias de PCI DSS (Payment Card Industry Data Security Standard).

Te ofrecemos dos opciones de integración haciendo uso de nuestra API.

|Directamente||
|---|---|
|PayU ofrece una API que le permite a tu comercio procesar transacciones desde diferentes tipos de aplicaciones (web, móvil, IVR, entre otras).<br><br>Dependiendo del país donde registres tu comercio, tendrás acceso a diferentes medios de pago, incluyendo tarjetas de crédito, transferencias bancarias y pagos en efectivo.<br><br>Podrás personalizar el checkout de acuerdo a las necesidades de tu negocio y lo mejor de todo, tu cliente permanecerá en tu sitio web durante la compra.|<img src="/images/illustrations/api1-es.png" width="500" height="322">|
{:.nobordertable}

|A través de nuestro SDK||
|---|---|
|PayU ofrece un SDK que permite conectarte a nuestra API de manera más sencilla.<br><br>Como cualquier integración API, podrás personalizar tu checkout de acuerdo a las necesidades de tu negocio y el cliente permanecerá en tu sitio web durante la compra.|<img src="/images/illustrations/developer-b.png" width="500" height="294">|
{:.nobordertable}

##### Servicios y funcionalidades API

||<img src="/images/illustrations/argentina_logo.png" width="50">|<img src="/images/illustrations/brasil.png" width="50">|<img src="/images/illustrations/chile.png" width="50">|<img src="/images/illustrations/colombia.png" width="50">|<img src="/images/illustrations/mexico.png" width="50">|<img src="/images/illustrations/panama.png" width="50">|<img src="/images/illustrations/peru.png" width="50">|
|---|---|---|---|---|---|---|---|
|Pagos|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|
|Promociones|<center>✓</center>|<center>✗</center>|<center>✗</center>|<center>✗</center>|<center>✓</center>|<center>✗</center>|<center>✗</center>|
|Tokenización|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|
|Reembolsos|<center>✓</center>|<center>✓</center>|<center>✗</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|
|Pagos recurrentes|<center>✗</center>|<center>✓</center>|<center>✗</center>|<center>✓</center>|<center>✓</center>|<center>✗</center>|<center>✓</center>|
|Procesamiento sin CVV|<center>✗</center>|<center>✓</center>|<center>✗</center>|<center>✓</center>|<center>✓</center>|<center>✗</center>|<center>✓</center>|
|Consulta|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|
{:.tabletest}
&nbsp;
##### Autorización y Captura de pagos

||<img src="/images/illustrations/argentina_logo.png" width="50">|<img src="/images/illustrations/brasil.png" width="50">|<img src="/images/illustrations/chile.png" width="50">|<img src="/images/illustrations/colombia.png" width="50">|<img src="/images/illustrations/mexico.png" width="50">|<img src="/images/illustrations/panama.png" width="50">|<img src="/images/illustrations/peru.png" width="50">|
|---|---|---|---|---|---|---|---|
|En un paso|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|
|En dos pasos|<center>✓*</center>|<center>✓</center>|<center>✗</center>|<center>✗</center>|<center>✗</center>|<center>✗</center>|<center>✓</center>|

&nbsp;
##### Servicios y funcionalidades SDK

||<img src="/images/illustrations/argentina_logo.png" width="50">|<img src="/images/illustrations/brasil.png" width="50">|<img src="/images/illustrations/chile.png" width="50">|<img src="/images/illustrations/colombia.png" width="50">|<img src="/images/illustrations/mexico.png" width="50">|<img src="/images/illustrations/panama.png" width="50">|<img src="/images/illustrations/peru.png" width="50">|
|---|---|---|---|---|---|---|---|
|Pagos|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|
|Promociones|<center>✗</center>|<center>✗</center>|<center>✗</center>|<center>✗</center>|<center>✗</center>|<center>✗</center>|<center>✗</center>|
|Tokenización|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|
|Reembolsos|<center>✓</center>|<center>✓</center>|<center>✗</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|
|Pagos recurrentes|<center>✗</center>|<center>✓</center>|<center>✗</center>|<center>✓</center>|<center>✓</center>|<center>✗</center>|<center>✓</center>|
|Consulta|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|<center>✓</center>|

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
