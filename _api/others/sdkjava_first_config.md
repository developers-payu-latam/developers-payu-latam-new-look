---
title: SDK Java
position: 3.1.3
description: Configuraciones iniciales
---

Para realizar el proceso de conexión con el API, deberás incluir estas libererías adicionales en el *classpath*:

- HttpClient-4.2.5.jar
+ HttpCore-4.2.4.jar
- Commons-loggin-1.1.1.jar
+ Commons-codec-1.6.jar
- Commons-lang3-3.5.jar

|Parámetro|Tipo|¿Requerido?|Descripción|
|---|---|---|---|
|language|Language|Sí|El idioma usado para los mensajes de error del sistema y en los correos electrónicos que se envían al comprador y vendedor. Se soportan actualmente *en* (Inglés), *es* (Español) y *pt* (Portugués).|
|isTest|Boolean|Sí|*true* si se trata de una petición de prueba, *false* de lo contrario. Dependiendo del tipo de transacción u operación, el comportamiento varía según el valor de este campo.|
|apiLogin|String|Sí|El *API Login* del comercio.|
|apiKey|String|Sí|El *API Key* del comercio.|
|merchantId|String|Sí|El identificador del comercio.|
|paymentsUrl|String|Sí|La dirección web de la página a la que se va a enviar las peticiones relacionadas con los pagos. Por defecto toma la url de producción.|
|reportsUrl|String|Sí|La dirección web de la página a la que se va a enviar las peticiones relacionadas con los reportes. Por defecto toma la url de producción.|

~~~ java
PayU.apiKey = "xxxxxxxxxxxx"; //Ingresa aquí tu apiKey.
PayU.apiLogin = "xxxxxxxxxxxx"; //Ingresa aquí tu apiLogin.
PayU.language = Language.en; //Ingresa aquí el idioma que prefieras.
PayU.isTest = false; //Dejarlo verdadero cuando sean pruebas.
LoggerUtil.setLogLevel(Level.ALL); //Incluirlo únicamente si desea ver toda la traza del log; si solo se desea ver la respuesta, se puede eliminar.
PayU.paymentsUrl = "https://api.payulatam.com/payments-api/"; //Incluirlo únicamente si desea probar en un servidor de pagos específico, e indicar la ruta del mismo.
PayU.reportsUrl = "https://api.payulatam.com/reports-api/"; //Incluirlo únicamente si desea probar en un servidor de reportes específico, e indicar la ruta del mismo.
~~~

Para la ejecución de cada una de las operaciones provistas por el SDK de PayU, se debe enviar como argumento un Mapa de parámetros al método correspondiente, que contiene toda la información de la transacción a procesar.

~~~ java
Map<String, String>  parameters = new HashMap <String, String> ();
~~~

<a href="/sdk/java/payu-java-sdk-1.2.5.zip" class="payu-btn payu-btn-blue">Puedes obtener la librería aquí: v1.2.5</a>

Para facilitar su uso, se proporcionan una serie de constantes en la interfaz PayU.PARAMETERS, que contienen los nombres de los parámetros utilizados en los métodos del SDK y los cuales serán referenciados en cada operación disponible del manual.
{: .info }
A partir de la versión 1.2.X, es necesario agregar el certificado del API de pagos de PayU (<a href="https://api.payulatam.com/payments-api/">https://api.payulatam.com/payments-api/</a>) en la carpeta de llaves de Java. Esta carpeta se encuentra en: [carpetaJava]/jdk/jre/lib/security/cacerts
{: .info }
