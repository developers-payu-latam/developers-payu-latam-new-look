---
title: Medios de pago activos
position: 3.1.6
description: Valida los medios de pagos que tienes activos
---

Antes de iniciar la generación de transacciones a traves de nuestro API, deberás verificar los diferentes medios de pago que tienes activos para tu cuenta.

Lo puedes verificar mediante el método *getPaymentMethods*.

~~~ xml
<request>
   <language>en</language>
   <command>GET_PAYMENT_METHODS</command>
   <merchant>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
   </merchant>
   <isTest>false</isTest>
</request>
~~~
{: title="XML" }
~~~ json
{
   "test": false,
   "language": "en",
   "command": "GET_PAYMENT_METHODS",
   "merchant": {
      "apiLogin": "pRRXKOl8ikMmt9u",
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
   }
}
~~~
{: title="JSON" }
~~~ java
List<PaymentMethodComplete> response = PayUPayments.getPaymentMethods();
LoggerUtil.info("{0}", response);
~~~
{: title="SDK JAVA" }
~~~ php
<?php
$array=PayUPayments::getPaymentMethods();
$payment_methods=$array->paymentMethods;
foreach ($payment_methods as $payment_method){
	$payment_method->country;
	$payment_method->description;
	$payment_method->id;
}
...
?>
~~~
{: title="SDK PHP" }
