---
title: Tag "deviceSessionId"
position: 3.19.4
description: API y SDK
---

El <code id="codeinl">deviceSessionId</code> es un código que captura la información del equipo desde donde se genera la transacción y genera un identificador único para este. Esta herramienta de seguridad permite detectar atacantes.

Para realizar la integración debes incluir el siguiente script en la página donde se capturan los datos para pagos con tarjeta de crédito:

~~~ javascript
<p style="background:url(https://maf.pagosonline.net/ws/fp?id=${deviceSessionId}usuarioId)"></p>
<img src="https://maf.pagosonline.net/ws/fp/clear.png?id=${deviceSessionId}usuarioId">
<script src="https://maf.pagosonline.net/ws/fp/check.js?id=${deviceSessionId}usuarioId"></script>
<object type="application/x-shockwave-flash" data="https://maf.pagosonline.net/ws/fp/fp.swf?id=${deviceSessionId}usuarioId" width="1" height="1" id="thm_fp">
  <param name="movie" value="https://maf.pagosonline.net/ws/fp/fp.swf?id=${deviceSessionId}usuarioId" />
</object>
~~~

Deberás generar el <code id="codeinl">deviceSessionId</code> aplicandole la función MD5 a la concatenación del <code id="codeinl">session_id</code> de la cookie con el timestamp incluyendo milisegundos (<code id="codeinl">microtime()</code>):

~~~ php
$deviceSessionId = md5(session_id().microtime())
~~~

Una vez tengas el <code id="codeinl">deviceSessionId</code>, deberás concatenarlo con el <code id="codeinl">usuarioId</code> 80200. A continuación encontraras un ejemplo:

~~~ javascript
<p style="background:url(https://maf.pagosonline.net/ws/fp?id=409105705380200")></p>
<img src="https://maf.pagosonline.net/ws/fp/clear.png?id=409105705380200">
<script src="https://maf.pagosonline.net/ws/fp/check.js?id=409105705380200"></script>
<object type="application/x-shockwave-flash" data="https://maf.pagosonline.net/ws/fp/fp.swf?id=409105705380200" width="1" height="1" id="thm_fp">
  <param name="movie" value="https://maf.pagosonline.net/ws/fp/fp.swf?id=409105705380200"/>
</object>
~~~

Donde:

+ <code id="codeinl">deviceSessionId</code>: 4091057053
- <code id="codeinl">usuarioId</code>: 80200

Finalmente debes capturar el <code id="codeinl">deviceSessionId</code> y enviarlo en la petición API en la variable <code id="codeinl">transaction.deviceSessionId</code> para API y <code id="codeinl">DEVICE_SESSION_ID</code> para SDK.

Deberás generar un nuevo <code id="codeinl">deviceSessionId</code> para cada intento de transacción.
{: .warning }
