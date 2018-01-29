---
title: Pagos con tarjetas de crédito - Captura ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
position: 3.11.13
description: API y SDK
---

~~~ json
{
   "language": "es",
   "command": "SUBMIT_TRANSACTION",
   "merchant": {
      "apiLogin": "pRRXKOl8ikMmt9u",
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA"
   },
   "transaction": {
      "order": {
         "id": "40049920"
      },
      "type": "CAPTURE",
      "parentTransactionId": "96535b36-99db-4c66-bd87-6ad5c59b25a8"
   },
   "test": false
}
~~~
{: title="Petición JSON" }
~~~ json
{
   "code": "SUCCESS",
   "error": null,
   "transactionResponse": {
      "orderId": 272601,
      "transactionId": "66c7bff2-c423-42ed-800a-8be11531e7a1",
      "state": "APPROVED",
      "paymentNetworkResponseCode": null,
      "paymentNetworkResponseErrorMessage": null,
      "trazabilityCode": "00000000",
      "authorizationCode": "00000000",
      "pendingReason": null,
      "responseCode": "APPROVED",
      "errorCode": null,
      "responseMessage": null,
      "transactionDate": null,
      "transactionTime": null,
      "operationDate": 1314012754,
      "extraParameters": null
   }
}
~~~
{: title="Respuesta JSON" }
~~~ xml
<request>
   <language>en</language>
   <command>SUBMIT_TRANSACTION</command>
   <merchant>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
   </merchant>
   <transaction>
      <order>
         <id>40049920</id>
      </order>
      <type>CAPTURE</type>
      <parentTransactionId>96535b36-99db-4c66-bd87-6ad5c59b25a8</parentTransactionId>
   </transaction>
   <isTest>false</isTest>
</request>
~~~
{: title="Petición XML" }
~~~ xml
<paymentResponse>
   <code>SUCCESS</code>
   <transactionResponse>
      <orderId>272601</orderId>
      <transactionId>66c7bff2-c423-42ed-800a-8be11531e7a1</transactionId>
      <state>APPROVED</state>
      <trazabilityCode>00000000</trazabilityCode>
      <authorizationCode>00000000</authorizationCode>
      <responseCode>APPROVED</responseCode>
      <operationDate>2014-01-02T11:32:34</operationDate>
   </transactionResponse>
</paymentResponse>
~~~
{: title="Respuesta XML" }
~~~ java
Map<String, String> parameters = new HashMap<String, String>();

//Ingrese aquí el identificador de la orden.
parameters.put(PayU.PARAMETERS.ORDER_ID, "40049920");
//Ingrese aquí el identificador de la transacción.
parameters.put(PayU.PARAMETERS.TRANSACTION_ID, "96535b36-99db-4c66-bd87-6ad5c59b25a8");
//Ingrese aquí el idima de la orden.
parameters.put(PayU.PARAMETERS.LANGUAGE, "Language.es");

//Solicitud de captura
TransactionResponse response = PayUPayments.doCapture(parameters);

//Respuesta
if(response != null){
	response.getOrderId();
	response.getTransactionId();
	response.getState();
	response.getPaymentNetworkResponseCode();
	response.getPaymentNetworkResponseErrorMessage();
	response.getTrazabilityCode();
	response.getResponseCode();
	response.getResponseMessage();
}
~~~
{: title="SDK JAVA" }
~~~ php
<?php
$parameters = array(
	//Ingrese aquí el identificador de la cuenta.
	PayUParameters::ACCOUNT_ID => "512327",
	//Ingrese aquí el identificador de la orden.
	PayUParameters::ORDER_ID => "40049920",
	//Ingrese aquí el identificador de la transacción.
	PayUParameters::TRANSACTION_ID => "96535b36-99db-4c66-bd87-6ad5c59b25a8",
	);

$response = PayUPayments::doCapture($parameters);

if ($response) {
	$response->transactionResponse->orderId;
	$response->transactionResponse->transactionId;
	$response->transactionResponse->state;
	$response->transactionResponse->paymentNetworkResponseCode;
	$response->transactionResponse->paymentNetworkResponseErrorMessage;
	$response->transactionResponse->trazabilityCode;
	$response->transactionResponse->responseCode;
	$response->transactionResponse->responseMessage;
}
?>
~~~
{: title="SDK PHP" }
