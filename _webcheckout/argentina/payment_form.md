---
title: Formulario de pago ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
description: WebCheckout
position: 2.11
---

En esta sección verás cómo enviar los datos de una transacción a PayU. Debes generar un formulario HTML con los datos de la transacción utilizando el método **HTTP POST** y que apunte a nuestro sistema.

##### Medios de pago disponibles

|<img src="/images/illustrations/tarjetas-de-credito.png"><br>Tarjetas de Crédito|<img src="/images/illustrations/master.png"><img src="/images/illustrations/visa.png"><img src="/images/illustrations/american.png"><img src="/images/illustrations/naranja.png"><br><img src="/images/illustrations/cabal.png"><img src="/images/illustrations/shopping.png"><img src="/images/illustrations/argencard.png"><img src="/images/illustrations/cencosud.png">|
|<img src="/images/illustrations/tarjetas-de-debito.png"><br>Tarjetas de Débito|<img src="/images/illustrations/visa.png">|
|<img src="/images/illustrations/efectivo.png"><br>Efectivo|<img src="/images/illustrations/pago-facil.png"><img src="/images/illustrations/rapi-pago.png"><img src="/images/illustrations/cobro-express.png"><img src="/images/illustrations/ripsa.png"><br><img src="/images/illustrations/banco-provincia.png">|
{:.nobordertablepaymentmethods}

##### Formulario

Te presentamos un ejemplo del formulario que debes construir con algunas de las variables que se pueden enviar a nuestra pasarela.

~~~html
<form method="post" action="https://gateway.payulatam.com/ppp-web-gateway/">
 <input name="merchantId"    type="hidden"  value="xxxxxx"> //Tu merchantId
 <input name="accountId"     type="hidden"  value="xxxxxx"> //Tu accountId
 <input name="description"   type="hidden"  value="Descripción de la compra">
 <input name="referenceCode" type="hidden"  value="Referencia_Única">
 <input name="amount"        type="hidden"  value="xxxxxx">
 <input name="currency"      type="hidden"  value="ARS">
 <input name="signature"     type="hidden"  value="signature">
 <input name="test"          type="hidden"  value="0">
 <input name="buyerEmail"    type="hidden"  value="buyerEmail">
 <input name="shippingAddress"    type="hidden"  value="Dirección"> //Solo si tu tienda hace envío de productos
 <input name="ShippingCity"    type="hidden"  value="Ciudad"> //Solo si tu tienda hace envío de productos
 <input name="ShippingCountry"    type="hidden"  value="AR"> //Solo si tu tienda hace envío de productos
 <input name="responseUrl"    type="hidden"  value="http://www.test.com/response">
 <input name="confirmationUrl"    type="hidden"  value="http://www.test.com/confirmation">
 <input name="Submit"        type="submit"  value="Enviar">
</form>
~~~

<details>
  <summary>Datos mínimos que debes envíar en el formulario</summary>
    <table>
      <thead>
        <tr>
          <th>Campo</th>
          <th>Tipo</th>
          <th>Tamaño</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>merchantId</td>
          <td>Numérico</td>
          <td>12</td>
          <td>Es el número identificador del comercio en el sistema de PayU, este número lo encontrarás en el correo de creación de la cuenta.</td>
        </tr>
        <tr>
          <td>accountId</td>
          <td>Numérico</td>
          <td>6</td>
          <td>Identificador de la cuenta del usuario para cada país que tenga asociado el comercio, al enviarla se despliegan solo los medios de pago pertenecientes a dicho país.</td>
        </tr>
        <tr>
          <td>referenceCode</td>
          <td>Alfanumérico</td>
          <td>255</td>
          <td>Es la referencia de la venta o pedido. Deber ser único por cada transacción que se envía al sistema. Normalmente es una forma de que identifiques las peticiones que se envían a la pasarela de pagos.</td>
        </tr>
        <tr>
          <td>description</td>
          <td>Alfanumérico</td>
          <td>255</td>
          <td>Es la descripción de la venta.</td>
        </tr>
        <tr>
          <td>amount</td>
          <td>Numérico</td>
          <td>14,2</td>
          <td>Es el monto total de la transacción. Puede contener dos dígitos decimales. Ej. 10000.00</td>
        </tr>
        <tr>
          <td>signature</td>
          <td>Alfanumérico</td>
          <td>255</td>
          <td>Es la firma digital creada para cada uno de las transacciones.</td>
        </tr>
        <tr>
          <td>currency</td>
          <td>Alfanumérico</td>
          <td>3</td>
          <td>La moneda respectiva en la que se realiza el pago. El proceso de conciliación se hace en pesos a la tasa representativa del día.</td>
        </tr>
        <tr>
          <td>buyerFullName</td>
          <td>Alfanumérico</td>
          <td>150</td>
          <td>Nombre completo del comprador.</td>
        </tr>
        <tr>
          <td>buyerEmail</td>
          <td>Alfanumérico</td>
          <td>255</td>
          <td>Campo que contiene el correo electrónico del comprador para notificarle el resultado de la transacción por correo electrónico. Se recomienda hacer una validación si se toma este dato en un formulario.</td>
        </tr>
        <tr>
          <td>telephone</td>
          <td>Alfanumérico</td>
          <td>50</td>
          <td>El teléfono de residencia del comprador.</td>
        </tr>
      </tbody>
    </table>
</details><br>

Una vez tengas el formulario listo, deberás apuntar a la url: **https://gateway.payulatam.com/ppp-web-gateway/**
{: .info }

##### Signature

Es una forma única de validar los pagos realizados a través de la plataforma, garantizando su autenticidad. Consiste en una cadena de caracteres a la cual se le aplica algoritmo *MD5*, *SHA1* o *SHA256* para encriptarla. La cadena está compuesta de la siguiente forma:

~~~
ApiKey~merchantId~referenceCode~amount~currency
~~~

Puedes comparar tu firma con nuestro [generador aquí]({{ "#toolssignaturepayment_request" }})

##### Pruebas de tu integración - Ambiente Sandbox

Si deseas validar que tu integración sea correcta, puedes hacer uso de nuestro ambiente de pruebas, para esto deberás generar tu formulario HTML con los siguientes parámetros:

|merchantId|API Login|API Key|accountId|
|----------|---------|-------|---------|
|508029|pRRXKOl8ikMmt9u|4Vj8eK4rloUd272L48hsrarnUA|512322|

Apuntando a la url: **https://sandbox.gateway.payulatam.com/ppp-web-gateway/**

Es importante que durante la realización de las pruebas no utilices datos de tarjetas de crédito reales, puedes utilizar generadores de tarjetas de crédito.
{: .info }
El campo `test = 1` lo incluyes para indicarle al sistema que es una transacción de prueba.
{: .info }
Las pruebas pueden realizarse sólo con tarjetas de crédito, los medios de pago en efectivo no pueden ser probados a través de este método.
{: .info }

##### Probando estados

En nuestro Sandbox podrás realizar pruebas de los tres diferentes estados de una transacción con tarjeta de crédito. Para esto, deberás ingresar en el campo *"Nombre en la tarjeta"*:

- **APPROVED:** Si deseas que la transacción quede en estado Aprobado.
- **REJECTED:** Si deseas que la transacción quede en estado Rechazado.
- **PENDING:** Si deseas que la transacción quede en estado Pendiente.

<center><img src="/images/illustrations/sandbox-ar-1.png" style="width: 100%;"></center>

En el campo Número de Tarjeta debes ingresar un número de tarjeta válido y que corresponda a la franquicia seleccionada. Para esto puedes buscar un generador de tarjetas de crédito en Internet.
{: .warning }
Luego de que realices todas las pruebas en el sistema y verifiques que todo está funcionando correctamente, se puede realizar el cambio al servidor de producción; en donde se procesaran las transacciones reales.
{: .success }
