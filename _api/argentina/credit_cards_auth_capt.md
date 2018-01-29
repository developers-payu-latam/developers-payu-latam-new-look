---
title: Pagos con tarjetas de crédito - Autorización y captura ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
position: 3.11.14
description: API y SDK
---

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
            "merchantBuyerId": "1",
            "fullName": "First name and second buyer  name",
            "emailAddress": "buyer_test@test.com",
            "contactPhone": "7563126",
            "dniNumber": "5415668464654",
            "shippingAddress": {
               "street1": "Viamonte",
               "street2": "1366",
               "city": "Buenos Aires",
               "state": "Buenos Aires",
               "country": "AR",
               "postalCode": "000000",
               "phone": "7563126"
            }
         },
         "shippingAddress": {
            "street1": "Viamonte",
            "street2": "1366",
            "city": "Buenos Aires",
            "state": "Buenos Aires",
            "country": "AR",
            "postalCode": "0000000",
            "phone": "7563126"
         }
      },
      "payer": {
         "merchantPayerId": "1",
         "fullName": "First name and second payer name",
         "emailAddress": "payer_test@test.com",
         "contactPhone": "7563126",
         "dniNumber": "5415668464654",
         "billingAddress": {
            "street1": "Avenida entre rios",
            "street2": "452",
            "city": "Plata",
            "state": "Buenos Aires",
            "country": "AR",
            "postalCode": "64000",
            "phone": "7563126"
         }
      },
      "creditCard": {
         "number": "4850110000000000",
         "securityCode": "321",
         "expirationDate": "2014/12",
         "name": "REJECTED"
      },
      "extraParameters": {
         "INSTALLMENTS_NUMBER": 1
      },
      "type": "AUTHORIZATION_AND_CAPTURE",
      "paymentMethod": "VISA",
      "paymentCountry": "AR",
      "deviceSessionId": "vghs6tvkcle931686k1900o6e1",
      "ipAddress": "127.0.0.1",
      "cookie": "pt1t38347bs6jc9ruv2ecpv7o2",
      "userAgent": "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
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
      "orderId": 39898440,
      "transactionId": "34a18c64-749f-4e5b-84dc-95e646f848a2",
      "state": "DECLINED",
      "paymentNetworkResponseCode": null,
      "paymentNetworkResponseErrorMessage": null,
      "trazabilityCode": null,
      "authorizationCode": null,
      "pendingReason": null,
      "responseCode": "PAYMENT_NETWORK_REJECTED",
      "errorCode": null,
      "responseMessage": null,
      "transactionDate": null,
      "transactionTime": null,
      "operationDate": null,
      "extraParameters": null
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
            <merchantBuyerId>1</merchantBuyerId>
            <fullName>First name and second buyer  name</fullName>
            <emailAddress>buyer_test@test.com</emailAddress>
            <contactPhone>7563126</contactPhone>
            <dniNumber>5415668464654</dniNumber>
            <shippingAddress>
               <street1>Viamonte</street1>
               <street2>1366</street2>
               <city>Buenos Aires</city>
               <state>Buenos Aires</state>
               <country>AR</country>
               <postalCode>000000</postalCode>
               <phone>7563126</phone>
            </shippingAddress>
         </buyer>
         <shippingAddress>
            <street1>Viamonte</street1>
            <street2>1366</street2>
            <city>Buenos Aires</city>
            <state>Buenos Aires</state>
            <country>AR</country>
            <postalCode>0000000</postalCode>
            <phone>7563126</phone>
         </shippingAddress>
      </order>
      <payer>
         <merchantPayerId>1</merchantPayerId>
         <fullName>First name and second payer name</fullName>
         <emailAddress>payer_test@test.com</emailAddress>
         <contactPhone>7563126</contactPhone>
         <dniNumber>5415668464654</dniNumber>
         <billingAddress>
            <street1>Avenida entre rios</street1>
            <street2>452</street2>
            <city>La Plata</city>
            <state>Buenos Aires</state>
            <country>AR</country>
            <postalCode>64000</postalCode>
            <phone>7563126</phone>
         </billingAddress>
      </payer>
      <creditCard>
         <number>4850110000000000</number>
         <securityCode>321</securityCode>
         <expirationDate>2014/12</expirationDate>
         <name>REJECTED</name>
      </creditCard>
      <extraParameters>
         <entry>
            <string>INSTALLMENTS_NUMBER</string>
            <string>1</string>
         </entry>
      </extraParameters>
      <type>AUTHORIZATION_AND_CAPTURE</type>
      <paymentMethod>VISA</paymentMethod>
      <paymentCountry>AR</paymentCountry>
      <deviceSessionId>vghs6tvkcle931686k1900o6e1</deviceSessionId>
      <ipAddress>127.0.0.1</ipAddress>
      <cookie>pt1t38347bs6jc9ruv2ecpv7o2</cookie>
      <userAgent>Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0</userAgent>
   </transaction>
   <isTest>false</isTest>
</request>
~~~
{: title="Petición XML" }
~~~ xml
<paymentResponse>
   <code>SUCCESS</code>
   <transactionResponse>
      <orderId>39895260</orderId>
      <transactionId>815e39c0-9df0-4d0e-9402-af9a6347539a</transactionId>
      <state>DECLINED</state>
      <responseCode>PAYMENT_NETWORK_REJECTED</responseCode>
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

// -- Comprador --
//Ingrese aquí el id del comprador.
parameters.put(PayU.PARAMETERS.BUYER_ID, "1");
//Ingrese aquí el nombre del comprador.
parameters.put(PayU.PARAMETERS.BUYER_NAME, "First name and second buyer  name");
//Ingrese aquí el email del comprador.
parameters.put(PayU.PARAMETERS.BUYER_EMAIL, "buyer_test@test.com");
//Ingrese aquí el teléfono de contacto del comprador.
parameters.put(PayU.PARAMETERS.BUYER_CONTACT_PHONE, "7563126");
//Ingrese aquí el documento de contacto del comprador.
parameters.put(PayU.PARAMETERS.BUYER_DNI, "5415668464654");
//Ingrese aquí la dirección del comprador.
parameters.put(PayU.PARAMETERS.BUYER_STREET, "Viamonte");
parameters.put(PayU.PARAMETERS.BUYER_STREET_2, "1366");
parameters.put(PayU.PARAMETERS.BUYER_CITY, "Buenos Aires");
parameters.put(PayU.PARAMETERS.BUYER_STATE, "Buenos Aires");
parameters.put(PayU.PARAMETERS.BUYER_COUNTRY, "AR");
parameters.put(PayU.PARAMETERS.BUYER_POSTAL_CODE, "000000");
parameters.put(PayU.PARAMETERS.BUYER_PHONE, "7563126");

// -- pagador --
//Ingrese aquí el id del pagador.
parameters.put(PayU.PARAMETERS.PAYER_ID, "1");
//Ingrese aquí el nombre del pagador.
parameters.put(PayU.PARAMETERS.PAYER_NAME, "First name and second payer name");
//Ingrese aquí el email del pagador.
parameters.put(PayU.PARAMETERS.PAYER_EMAIL, "payer_test@test.com");
//Ingrese aquí el teléfono de contacto del pagador.
parameters.put(PayU.PARAMETERS.PAYER_CONTACT_PHONE, "7563126");
//Ingrese aquí el documento de contacto del pagador.
parameters.put(PayU.PARAMETERS.PAYER_DNI, "5415668464654");
//Ingrese aquí la dirección del pagador.
parameters.put(PayU.PARAMETERS.PAYER_STREET, "Avenida entre rios");
parameters.put(PayU.PARAMETERS.PAYER_STREET_2, "452");
parameters.put(PayU.PARAMETERS.PAYER_CITY, "La Plata");
parameters.put(PayU.PARAMETERS.PAYER_STATE, "Buenos Aires");
parameters.put(PayU.PARAMETERS.PAYER_COUNTRY, "AR");
parameters.put(PayU.PARAMETERS.PAYER_POSTAL_CODE, "000000");
parameters.put(PayU.PARAMETERS.PAYER_PHONE, "7563126");

// -- Datos de la tarjeta de crédito --
//Ingrese aquí el número de la tarjeta de crédito
parameters.put(PayU.PARAMETERS.CREDIT_CARD_NUMBER, "4850110000000000");
//Ingrese aquí la fecha de vencimiento de la tarjeta de crédito
parameters.put(PayU.PARAMETERS.CREDIT_CARD_EXPIRATION_DATE, "2014/12");
//Ingrese aquí el código de seguridad de la tarjeta de crédito
parameters.put(PayU.PARAMETERS.CREDIT_CARD_SECURITY_CODE, "321");
//Ingrese aquí el nombre de la tarjeta de crédito
parameters.put(PayU.PARAMETERS.PAYMENT_METHOD, "VISA");

//Ingrese aquí el número de cuotas.
parameters.put(PayU.PARAMETERS.INSTALLMENTS_NUMBER, "1");
//Ingrese aquí el nombre del pais.
parameters.put(PayU.PARAMETERS.COUNTRY, PaymentCountry.AR.name());


//Session id del device.
parameters.put(PayU.PARAMETERS.DEVICE_SESSION_ID, "vghs6tvkcle931686k1900o6e1");
//IP del pagadador
parameters.put(PayU.PARAMETERS.IP_ADDRESS, "127.0.0.1");
//Cookie de la sesión actual.
parameters.put(PayU.PARAMETERS.COOKIE, "pt1t38347bs6jc9ruv2ecpv7o2");
//Cookie de la sesión actual.
parameters.put(PayU.PARAMETERS.USER_AGENT, "Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0");

//solicitud de autorización y captura
TransactionResponse response = PayUPayments.doAuthorizationAndCapture(parameters);

//  -- podrás obtener las propiedades de la respuesta --
if(response != null){
	response.getOrderId();
	response.getTransactionId();
	response.getState();
	if(response.getState().toString().equalsIgnoreCase("PENDING")){
		response.getPendingReason();
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

	// -- Comprador
	//Ingrese aquí el nombre del comprador.
	PayUParameters::BUYER_NAME => "First name and second buyer  name",
	//Ingrese aquí el email del comprador.
	PayUParameters::BUYER_EMAIL => "buyer_test@test.com",
	//Ingrese aquí el teléfono de contacto del comprador.
	PayUParameters::BUYER_CONTACT_PHONE => "7563126",
	//Ingrese aquí el documento de contacto del comprador.
	PayUParameters::BUYER_DNI => "5415668464654",
	//Ingrese aquí la dirección del comprador.
	PayUParameters::BUYER_STREET => "Viamonte",
	PayUParameters::BUYER_STREET_2 => "1366",
	PayUParameters::BUYER_CITY => "Buenos Aires",
	PayUParameters::BUYER_STATE => "Buenos Aires",
	PayUParameters::BUYER_COUNTRY => "AR",
	PayUParameters::BUYER_POSTAL_CODE => "000000",
	PayUParameters::BUYER_PHONE => "7563126",

	// -- pagador --
	//Ingrese aquí el nombre del pagador.
	PayUParameters::PAYER_NAME => "First name and second payer name",
	//Ingrese aquí el email del pagador.
	PayUParameters::PAYER_EMAIL => "payer_test@test.com",
	//Ingrese aquí el teléfono de contacto del pagador.
	PayUParameters::PAYER_CONTACT_PHONE => "7563126",
	//Ingrese aquí el documento de contacto del pagador.
	PayUParameters::PAYER_DNI => "5415668464654",
	//Ingrese aquí la dirección del pagador.
	PayUParameters::PAYER_STREET => "Avenida entre rios",
	PayUParameters::PAYER_STREET_2 => "452",
	PayUParameters::PAYER_CITY => "La Plata",
	PayUParameters::PAYER_STATE => "Buenos Aires",
	PayUParameters::PAYER_COUNTRY => "AR",
	PayUParameters::PAYER_POSTAL_CODE => "000000",
	PayUParameters::PAYER_PHONE => "7563126",

	//Ingrese aquí el número de la tarjeta de crédito
	PayUParameters::CREDIT_CARD_NUMBER => "4850110000000000",
	//Ingrese aquí la fecha de vencimiento de la tarjeta de crédito
	PayUParameters::CREDIT_CARD_EXPIRATION_DATE => "2014/12",
	//Ingrese aquí el código de seguridad de la tarjeta de crédito
	PayUParameters::CREDIT_CARD_SECURITY_CODE=> "321",
	//Ingrese aquí el nombre de la tarjeta de crédito
	// "MASTERCARD" || "AMEX" || "ARGENCARD" || "CABAL" || "NARANJA" || "CENCOSUD" || "SHOPPING"
	PayUParameters::PAYMENT_METHOD => "VISA",

	//Ingrese aquí el número de cuotas.
	PayUParameters::INSTALLMENTS_NUMBER => "1",
	//Ingrese aquí el nombre del pais.
	PayUParameters::COUNTRY => PayUCountries::AR,

	//Session id del device.
	PayUParameters::DEVICE_SESSION_ID => "vghs6tvkcle931686k1900o6e1",
	//IP del pagadador
	PayUParameters::IP_ADDRESS => "127.0.0.1",
	//Cookie de la sesión actual.
	PayUParameters::PAYER_COOKIE=>"pt1t38347bs6jc9ruv2ecpv7o2",
	//Cookie de la sesión actual.
	PayUParameters::USER_AGENT=>"Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
	);

$response = PayUPayments::doAuthorizationAndCapture($parameters);

if ($response) {
	$response->transactionResponse->orderId;
	$response->transactionResponse->transactionId;
	$response->transactionResponse->state;
	if ($response->transactionResponse->state=="PENDING"){
		$response->transactionResponse->pendingReason;
	}
	$response->transactionResponse->paymentNetworkResponseCode;
	$response->transactionResponse->paymentNetworkResponseErrorMessage;
	$response->transactionResponse->trazabilityCode;
	$response->transactionResponse->responseCode;
	$response->transactionResponse->responseMessage;

}
?>
~~~
{: title="SDK PHP" }
