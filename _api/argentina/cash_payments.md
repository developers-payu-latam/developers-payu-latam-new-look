---
title: Pagos en efectivo ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
position: 3.11.15
description: API y SDK
---

Tenemos las siguientes opciones disponibles para pagos en efectivo; deberás enviarlos en la variable `paymentMethod` para API o `PAYMENT_METHOD` para SDK; de acuerdo con la siguiente <a name="pMCarg"></a>tabla:

|Franquicias|Valor a enviar<br>en la petición|
|---|---|
|Cobro Express|COBRO_EXPRESS|
|Pago Fácil|PAGOFACIL|
|Provincia NET|BAPRO|
|Rapipago|RAPIPAGO|
|RIPSA Pagos|RIPSA|
{:.tableservices}

##### Ejemplo de petición y respuesta

~~~ json
{
   "language": "es",
   "command": "SUBMIT_TRANSACTION",
   "merchant": {
      "apiKey": "4Vj8eK4rloUd272L48hsrarnUA",
      "apiLogin": "pRRXKOl8ikMmt9u"
   },
   "transaction": {
      "order": {
         "accountId": "512322",
         "referenceCode": "payment_test_00000001",
         "description": "payment test",
         "language": "es",
         "signature": "95d7e92b23cae0cae6a98e34cc54be39",
         "notifyUrl": "http://www.tes.com/confirmation",
         "additionalValues": {
            "TX_VALUE": {
               "value": 100,
               "currency": "ARS"
            }
         },
         "buyer": {
            "emailAddress": "buyer_test@test.com"
         }
      },
      "type": "AUTHORIZATION_AND_CAPTURE",
      "paymentMethod": "PAGOFACIL",
      "paymentCountry": "AR",
      "ipAddress": "127.0.0.1"
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
      "orderId": 39903920,
      "transactionId": "1dc4b11f-8098-4915-816e-c54cf62f780d",
      "state": "PENDING",
      "paymentNetworkResponseCode": null,
      "paymentNetworkResponseErrorMessage": null,
      "trazabilityCode": "39903920_54cf62f780d",
      "authorizationCode": "10345888",
      "pendingReason": "AWAITING_NOTIFICATION",
      "responseCode": "PENDING_TRANSACTION_CONFIRMATION",
      "errorCode": null,
      "responseMessage": null,
      "transactionDate": null,
      "transactionTime": null,
      "operationDate": null,
      "extraParameters": {
         "URL_PAYMENT_RECEIPT_HTML": "https://gateway.payulatam.com/ppp-web-gateway/voucher.zul?vid=39903920Y1dc4b11f8098491Y180b93eb31a0419",
         "BAR_CODE": "995838014974798",
         "REFERENCE": "39903920"
      }
   }
}
~~~
{: title="Respuesta JSON" }
~~~ xml
<request>
   <language>es</language>
   <command>SUBMIT_TRANSACTION</command>
   <merchant>
      <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
      <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
   </merchant>
   <transaction>
      <order>
         <accountId>512322</accountId>
         <referenceCode>payment_test_00000001</referenceCode>
         <description>payment test</description>
         <language>es</language>
         <signature>95d7e92b23cae0cae6a98e34cc54be39</signature>
         <notifyUrl>http://www.tes.com/confirmation</notifyUrl>
         <additionalValues>
            <entry>
               <string>TX_VALUE</string>
               <additionalValue>
                  <value>100</value>
                  <currency>ARS</currency>
               </additionalValue>
            </entry>
         </additionalValues>
         <buyer>
            <emailAddress>buyer_test@test.com</emailAddress>
         </buyer>
      </order>
      <type>AUTHORIZATION_AND_CAPTURE</type>
      <paymentMethod>PAGOFACIL</paymentMethod>
      <!--BAPRO, COBRO EXPRESS, RAPIPAGO or RIPSA-->
      <paymentCountry>AR</paymentCountry>
      <ipAddress>127.0.0.1</ipAddress>
   </transaction>
   <isTest>false</isTest>
</request>
~~~
{: title="Petición XML" }
~~~ xml
<paymentResponse>
   <code>SUCCESS</code>
   <transactionResponse>
      <orderId>39903760</orderId>
      <transactionId>c5102dc3-5397-489c-a975-f054d7f2642f</transactionId>
      <state>PENDING</state>
      <trazabilityCode>39903760_054d7f2642f</trazabilityCode>
      <authorizationCode>10345871</authorizationCode>
      <pendingReason>AWAITING_NOTIFICATION</pendingReason>
      <responseCode>PENDING_TRANSACTION_CONFIRMATION</responseCode>
      <extraParameters>
         <entry>
            <string>URL_PAYMENT_RECEIPT_HTML</string>
            <string>https://gateway.payulatam.com/ppp-web-gateway/voucher.zul?vid=39903760Yc5102dc35397489Y312fdb26ad71134</string>
         </entry>
         <entry>
            <string>BAR_CODE</string>
            <string>995838014974789</string>
         </entry>
         <entry>
            <string>REFERENCE</string>
            <string>39903760</string>
         </entry>
      </extraParameters>
   </transactionResponse>
</paymentResponse>
~~~
{: title="Respuesta XML" }
~~~ java
String reference = "payment_test_00000001";
String value= "100";

Map<String, String> parameters = new HashMap<String, String>();

//Ingrese aquí el identificador de la cuenta.
parameters.put(PayU.PARAMETERS.ACCOUNT_ID, "512322");
//Ingrese aquí el código de referencia.
parameters.put(PayU.PARAMETERS.REFERENCE_CODE, ""+reference);
//Ingrese aquí la descripción.
parameters.put(PayU.PARAMETERS.DESCRIPTION, "payment test");
//Ingrese aquí el idima de la orden.
parameters.put(PayU.PARAMETERS.LANGUAGE, "Language.es");

// -- Valores --
//Ingrese aquí el valor.
parameters.put(PayU.PARAMETERS.VALUE, ""+value);
//Ingrese aquí la moneda.
parameters.put(PayU.PARAMETERS.CURRENCY, ""+Currency.ARS.name());

//Ingrese aquí el email del comprador.
parameters.put(PayU.PARAMETERS.BUYER_EMAIL, "buyer_test@test.com");

//Ingrese aquí el nombre del pagador.
parameters.put(PayU.PARAMETERS.PAYER_NAME, "First name and second payer name");

//Ingrese aquí el nombre del medio de pago en efectivo
//PAGOFACIL||BAPRO||COBRO_EXPRESS||RAPIPAGO||RIPSA"
parameters.put(PayU.PARAMETERS.PAYMENT_METHOD, "PAGOFACIL");

//Ingrese aquí el nombre del pais.
parameters.put(PayU.PARAMETERS.COUNTRY, PaymentCountry.AR.name());

//IP del pagadador
parameters.put(PayU.PARAMETERS.IP_ADDRESS, "127.0.0.1");

//Solicitud de autorización y captura
TransactionResponse response = PayUPayments.doAuthorizationAndCapture(parameters);

//Respuesta
if(response != null){
	response.getOrderId();
	response.getTransactionId();
	response.getState();
	if(response.getState().equals(TransactionState.PENDING)){
		response.getPendingReason();
		Map extraParameters = response.getExtraParameters();

		//obtener la url del comprobante de pago
		String url=(String)extraParameters.get("URL_PAYMENT_RECEIPT_HTML");

	}
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
$reference = "payment_test_00000001";
$value = "100";

$parameters = array(
	//Ingrese aquí el identificador de la cuenta.
	PayUParameters::ACCOUNT_ID => "512322",
	//Ingrese aquí el código de referencia.
	PayUParameters::REFERENCE_CODE => $reference,
	//Ingrese aquí la descripción.
	PayUParameters::DESCRIPTION => "payment test",

	// -- Valores --
	//Ingrese aquí el valor.
	PayUParameters::VALUE => $value,
	//Ingrese aquí la moneda.
	PayUParameters::CURRENCY => "ARS",

	//Ingrese aquí el email del comprador.
	PayUParameters::BUYER_EMAIL => "buyer_test@test.com",
	//Ingrese aquí el nombre del pagador.
	PayUParameters::PAYER_NAME => "First name and second buyer name",
	//Ingrese aquí el documento de contacto del pagador.
	PayUParameters::PAYER_DNI=> "5415668464654",

	//Ingrese aquí el nombre del método de pago
	//COBRO_EXPRESS || PAGOFACIL || RAPIPAGO || BAPRO || RIPSA
	PayUParameters::PAYMENT_METHOD => "COBRO_EXPRESS",

	//Ingrese aquí el nombre del pais.
	PayUParameters::COUNTRY => PayUCountries::AR,

	//IP del pagadador
	PayUParameters::IP_ADDRESS => "127.0.0.1",

);

$response = PayUPayments::doAuthorizationAndCapture($parameters);

if($response){
	$response->transactionResponse->orderId;
	$response->transactionResponse->transactionId;
	$response->transactionResponse->state;
	if($response->transactionResponse->state=="PENDING"){
		$response->transactionResponse->pendingReason;
		$response->transactionResponse->trazabilityCode;
		$response->transactionResponse->authorizationCode;
		$response->transactionResponse->extraParameters->URL_PAYMENT_RECEIPT_HTML;
		$response->transactionResponse->extraParameters->REFERENCE;
		$response->transactionResponse->extraParameters->BAR_CODE;
	}
	$response->transactionResponse->responseCode;
}
?>
~~~
{: title="SDK PHP" }
