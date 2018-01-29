---
title: Conectividad con PayU
position: 3.10.5
description: Valida la conectividad con nuestra plataforma
---

Antes de iniciar la generación de transacciones, deberás verificar la conectividad con nuestra plataforma.

Lo puedes verificar mediante el método `PING` para API o `doPing` para SDK.

~~~ json
{
   "test": false,
   "language": "en",
   "command": "PING",
   "merchant": {
      "apiLogin": "pRRXKOl8ikMmt9u",
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
   }
}
~~~
{: title="JSON" }
~~~ xml
<request>
   <language>en</language>
   <command>PING</command>
   <merchant>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
   </merchant>
   <isTest>false</isTest>
</request>
~~~
{: title="XML" }
~~~ java
boolean response = PayUPayments.doPing();
LoggerUtil.info("{0}", response);
~~~
{: title="SDK JAVA" }
~~~ php
<?php
$response = PayUPayments::doPing();
$response->code;
?>
~~~
{: title="SDK PHP" }
