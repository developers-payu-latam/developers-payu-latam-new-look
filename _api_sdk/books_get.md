---
title: /books/:id
position: 1.3
type: get
description: Get Book
---

Returns a specific book from your collection

{% details Read more about that **thing**... %}
~~~java
PayU.apiKey = "xxxxxxxxxxxx"; //Ingresa aquí tu apiKey.
PayU.apiLogin = "xxxxxxxxxxxx"; //Ingresa aquí tu apiLogin.
PayU.language = Language.en; //Ingresa aquí el idioma que prefieras.
PayU.isTest = false; //Dejarlo verdadero cuando sean pruebas.
LoggerUtil.setLogLevel(Level.ALL); //Incluirlo únicamente si desea ver toda la traza del log; si solo se desea ver la respuesta, se puede eliminar.
PayU.paymentsUrl = "https://api.payulatam.com/payments-api/"; //Incluirlo únicamente si desea probar en un servidor de pagos específico, e indicar la ruta del mismo.
PayU.reportsUrl = "https://api.payulatam.com/reports-api/"; //Incluirlo únicamente si desea probar en un servidor de reportes específico, e indicar la ruta del mismo.
~~~
{% enddetails %}

{% details Otro **thing**... %}
~~~php
<?php
PayU::$apiKey = "xxxxxxxxxxxx"; //Ingrese aquí su propio apiKey.
PayU::$apiLogin = "xxxxxxxxxxxx"; //Ingrese aquí su propio apiLogin.
PayU::$merchantId = "1"; //Ingrese aquí su Id de Comercio.
PayU::$language = SupportedLanguages::ES; //Seleccione el idioma.
PayU::$isTest = false; //Dejarlo True cuando sean pruebas.
...
?>
~~~
{% enddetails %}
