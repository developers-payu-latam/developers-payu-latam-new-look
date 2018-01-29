---
title: Promociones - Ejecución de transacción ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
position: 3.11.19
description: API y SDK
---

Una vez seleccionada una promoción, se debe enviar en la petición API el ID de la misma en la transacción. El ID de la promoción se envía como un extra parámetro.

~~~ json
{
   "language":"es",
   "command":"SUBMIT_TRANSACTION",
   "merchant": {
      "apiKey":"4Vj8eK4rloUd272L48hsrarnUA",
      "apiLogin":"pRRXKOl8ikMmt9u"
   },
   "transaction": {
      "order": {
         "accountId":"512322",
         "referenceCode":"payment_test_00000001",
         "description":"payment test",
         "language":"es",
         "signature":"95d7e92b23cae0cae6a98e34cc54be39",
         "notifyUrl":"http://www.tes.com/confirmation",
         "additionalValues": {
            "TX_VALUE": {
               "value":100,
               "currency":"ARS"
             }
         },
         "buyer": {
            "merchantBuyerId":"1",
            "fullName":"First name and second buyer  name",
            "emailAddress":"buyer_test@test.com",
            "contactPhone":"7563126",
            "dniNumber":"5415668464654",
            "shippingAddress": {
               "street1":"Viamonte",
               "street2":"1366",
               "city":"Buenos Aires",
               "state":"Buenos Aires",
               "country":"AR",
               "postalCode":"000000",
               "phone":"7563126"
             }
         },
         "shippingAddress": {
            "street1":"Viamonte",
            "street2":"1366",
            "city":"Buenos Aires",
            "state":"Buenos Aires",
            "country":"AR",
            "postalCode":"0000000",
            "phone":"7563126"
          }
      },
      "payer": {
         "merchantPayerId":"1",
         "fullName":"First name and second payer name",
         "emailAddress":"payer_test@test.com",
         "contactPhone":"7563126",
         "dniNumber":"5415668464654",
         "billingAddress": {
            "street1":"Avenida entre rios",
            "street2":"452",
            "city":"Plata",
            "state":"Buenos Aires",
            "country":"AR",
            "postalCode":"64000",
            "phone":"7563126"
          }
      },
      "creditCard": {
         "number":"4850110000000000",
         "securityCode":"321",
         "expirationDate":"2014/12",
         "name":"REJECTED"
      },
      "extraParameters": {
         "INSTALLMENTS_NUMBER":1,
         "PROMOTION_ID":16
      },
      "type":"AUTHORIZATION_AND_CAPTURE",
      "paymentMethod":"VISA",
      "paymentCountry":"AR",
      "deviceSessionId":"vghs6tvkcle931686k1900o6e1",
      "ipAddress":"127.0.0.1",
      "cookie":"pt1t38347bs6jc9ruv2ecpv7o2",
      "userAgent":"Mozilla/5.0 (Windows NT 5.1; rv:18.0) Gecko/20100101 Firefox/18.0"
   },
   "test":false
 }
~~~
{: title="Petición JSON" }
~~~ xml
<request>
      <language>es</language>
      <command>SUBMIT_TRANSACTION</command>
      <merchant>
       <apiLogin>pRRXKOl8ikMmt9u</apiLogin>
       <apiKey>4Vj8eK4rloUd272L48hsrarnUA</apiKey>
      </merchant>
       <transaction>
          <order>
             <accountId>512322</accountId>
             <referenceCode>REF201500102-0001</referenceCode>
             <description>Combo multiproductos</description>
             <language>es</language>
             <notifyUrl>http://payu.com/Confirmation</notifyUrl>
             <shippingAddress>
                <country>AR</country>
             </shippingAddress>
             <buyer>
                <emailAddress>email@correo.com</emailAddress>
             </buyer>
             <additionalValues class="java.util.HashMap">
                <entry>
                   <string>TX_VALUE</string>
                   <additionalValue>
                      <value>500</value>
                      <currency>ARS</currency>
                   </additionalValue>
                </entry>
             </additionalValues>
          </order>
          <creditCard>
             <number>4916********2266/number>
             <securityCode>***</securityCode>
             <expirationDate>2019/03</expirationDate>
             <name>Juan Perez S.</name>
          </creditCard>
          <type>AUTHORIZATION_AND_CAPTURE</type>
          <paymentMethod>VISA</paymentMethod>
          <paymentCountry>AR</paymentCountry>
          <payer>
             <fullName>Juan Perez S.</fullName>
             <emailAddress>email@correo.com</emailAddress>
          </payer>
          <ipAddress>200.150.5.152</ipAddress>
          <cookie>cookie_a1b2c3d4</cookie>
          <userAgent>Chrome</userAgent>
          <extraParameters class="java.util.HashMap">
             <entry>
                <string>INSTALLMENTS_NUMBER</string>
                <string>3</string>
             </entry>
             <entry>
                <string>PROMOTION_ID</string>
                <string>16</string>
             </entry>
          </extraParameters>
       </transaction>
       <isTest>false</isTest>
    </request>
~~~
{: title="Respuesta XML" }
