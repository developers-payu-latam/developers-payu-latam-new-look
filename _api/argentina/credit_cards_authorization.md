---
title: Pagos con tarjetas de crédito - Autorización ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
position: 3.11.12
description: API y SDK
---

Te presentamos un ejemplo de transacción tipo Autorización con los parametros mínimos que nos debes enviar:

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
      "type": "AUTHORIZATION",
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
      "orderId": 40049920,
      "transactionId": "96535b36-99db-4c66-bd87-6ad5c59b25a8",
      "state": "DECLINED",
      "paymentNetworkResponseCode": null,
      "paymentNetworkResponseErrorMessage": null,
      "trazabilityCode": null,
      "authorizationCode": null,
      "pendingReason": null,
      "responseCode": "ANTIFRAUD_REJECTED",
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
      <type>AUTHORIZATION</type>
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
      <orderId>40049300</orderId>
      <transactionId>f1135022-a42f-41d6-aa47-d3f650e58dea</transactionId>
      <state>DECLINED</state>
      <responseCode>ANTIFRAUD_REJECTED</responseCode>
   </transactionResponse>
</paymentResponse>
~~~
{: title="Respuesta XML" }
~~~ java
String reference = "payment_test_00000001";
String value= "100";

Map<String, String> parameters = new HashMap<String, String>();

//Ingrese aquí el identificador de la cuenta.
parameters.put(PayU.PARAMETERS.ACCOUNT_ID, "512327");
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
parameters.put(PayU.PARAMETERS.CURRENCY, ""+Currency.BRL.name());

// -- Comprador --
//Ingrese aquí el id del comprador.
parameters.put(PayU.PARAMETERS.BUYER_ID, "1");
//Ingrese aquí el nombre del comprador.
parameters.put(PayU.PARAMETERS.BUYER_NAME, "First name and second buyer  name");
//Ingrese aquí el email del comprador.
parameters.put(PayU.PARAMETERS.BUYER_EMAIL, "buyer_test@test.com");
//Ingrese aquí el teléfono de contacto del comprador.
parameters.put(PayU.PARAMETERS.BUYER_CONTACT_PHONE, "(11)756312633");
//Ingrese aquí el documento de contacto del comprador.
parameters.put(PayU.PARAMETERS.BUYER_DNI, "811.807.405-64");
// or
//parameters.put(PayU.PARAMETERS.BUYER_CNPJ, "32593371000110");

//Ingrese aquí la dirección del comprador.
parameters.put(PayU.PARAMETERS.BUYER_STREET, "calle 100");
parameters.put(PayU.PARAMETERS.BUYER_STREET_2, "5555487");
parameters.put(PayU.PARAMETERS.BUYER_CITY, "Sao paulo");
parameters.put(PayU.PARAMETERS.BUYER_STATE, "SP");
parameters.put(PayU.PARAMETERS.BUYER_COUNTRY, "BR");
parameters.put(PayU.PARAMETERS.BUYER_POSTAL_CODE, "01019-030");
parameters.put(PayU.PARAMETERS.BUYER_PHONE, "(11)756312633");

// -- pagador --
//Ingrese aquí el nombre del pagador.
parameters.put(PayU.PARAMETERS.PAYER_NAME, "First name and second payer name");

// -- Datos de la tarjeta de crédito --
//Ingrese aquí el número de la tarjeta de crédito
parameters.put(PayU.PARAMETERS.CREDIT_CARD_NUMBER, "4097440000000004");
//Ingrese aquí la fecha de vencimiento de la tarjeta de crédito
parameters.put(PayU.PARAMETERS.CREDIT_CARD_EXPIRATION_DATE, "2014/12");
//Ingrese aquí el código de seguridad de la tarjeta de crédito
parameters.put(PayU.PARAMETERS.CREDIT_CARD_SECURITY_CODE, "321");
//Ingrese aquí el nombre de la tarjeta de crédito
parameters.put(PayU.PARAMETERS.PAYMENT_METHOD, "VISA");

//Ingrese aquí el número de cuotas.
parameters.put(PayU.PARAMETERS.INSTALLMENTS_NUMBER, "1");
//Ingrese aquí el nombre del pais.
parameters.put(PayU.PARAMETERS.COUNTRY, PaymentCountry.BR.name());

//IP del pagadador
parameters.put(PayU.PARAMETERS.IP_ADDRESS, "127.0.0.1");

//Solicitud de autorización
TransactionResponse response = PayUPayments.doAuthorization(parameters);

//Respuesta
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
	PayUParameters::ACCOUNT_ID => "512327",
	//Ingrese aquí el código de referencia.
	PayUParameters::REFERENCE_CODE => $reference,
	//Ingrese aquí la descripción.
	PayUParameters::DESCRIPTION => "payment test",

	// -- Valores --
	//Ingrese aquí el valor.
	PayUParameters::VALUE => $value,
	//Ingrese aquí la moneda.
	PayUParameters::CURRENCY => "BRL",

	// -- Comprador
	//Ingrese aquí el nombre del comprador.
	PayUParameters::BUYER_NAME => "First name and second buyer  name",
	//Ingrese aquí el email del comprador.
	PayUParameters::BUYER_EMAIL => "buyer_test@test.com",
	//Ingrese aquí el teléfono de contacto del comprador.
	PayUParameters::BUYER_CONTACT_PHONE => "(11)756312633",
	//Ingrese aquí el documento de contacto del comprador.
	PayUParameters::BUYER_DNI => "811.807.405-64",
	// or
	//PayUParameters::BUYER_CNPJ => "32593371000110",

	//Ingrese aquí la dirección del comprador.
	PayUParameters::BUYER_STREET => "calle 100",
	PayUParameters::BUYER_STREET_2 => "5555487",
	PayUParameters::BUYER_CITY => "Sao paulo",
	PayUParameters::BUYER_STATE => "SP",
	PayUParameters::BUYER_COUNTRY => "BR",
	PayUParameters::BUYER_POSTAL_CODE => "01019-030",
	PayUParameters::BUYER_PHONE => "(11)756312633",

	// -- pagador --
	//Ingrese aquí el nombre del pagador.
	PayUParameters::PAYER_NAME => "First name and second payer  name",

	// -- Datos de la tarjeta de crédito --
	//Ingrese aquí el número de la tarjeta de crédito
	PayUParameters::CREDIT_CARD_NUMBER => "4097440000000004",
	//Ingrese aquí la fecha de vencimiento de la tarjeta de crédito
	PayUParameters::CREDIT_CARD_EXPIRATION_DATE => "2014/12",
	//Ingrese aquí el código de seguridad de la tarjeta de crédito
	PayUParameters::CREDIT_CARD_SECURITY_CODE=> "321",
	//Ingrese aquí el nombre de la tarjeta de crédito
	//VISA||MASTERCARD||AMEX||DINERS||ELO||HIPERCARD
	PayUParameters::PAYMENT_METHOD => "VISA",

	//Ingrese aquí el número de cuotas.
	PayUParameters::INSTALLMENTS_NUMBER => "1",
	//Ingrese aquí el nombre del pais.
	PayUParameters::COUNTRY => PayUCountries::BR,

	//IP del pagadador
	PayUParameters::IP_ADDRESS => "127.0.0.1",
	);

$response = PayUPayments::doAuthorization($parameters);

if ($response) {
	$response->transactionResponse->orderId;
	$response->transactionResponse->transactionId;
	$response->transactionResponse->state;
	if ($response->transactionResponse->state=="PENDING") {
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
