---
title: Promociones ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
position: 3.11.16
description: API y SDK
---

Esta funcionalidad te permitirá realizar la consulta vía API de promociones vigentes sus cobros asociados, características de la misma y demás información relevante para presentarla a tus clientes.

Se sugiere emplear un mecanismo basado en HMAC para autenticar y autorizar las peticiones provenientes de tu servidor. Para poder realizar la autenticación, se requiere que conozcas tu MerchantPublicKey, cuyo dato lo puedes encontrar en la pestaña “Configuración”, opción “Información técnica” bajo el nombre de “Llave pública”.

El header debe tener la siguiente estructura:

~~~
Authorization Header: "Hmac" + " " + MerchantPublicKey + ":" + Signature"
~~~

En donde el <code id="codeinl">Signature</code> se crea de la siguiente forma:

~~~
Signature = Base64(HMAC-SHA256(MerchantApiKey,ContentToSign))
~~~

El <code id="codeinl">ContentToSign</code> corresponde a:

~~~
HTTP-Verb + "\n" + "\n" + "\n" +
Date + "\n" +
URI
~~~

A continuación se detalla un ejemplo con los siguientes datos de prueba:

~~~
ContentToSign:
GET


Fri, 28 Apr 2017 18:32:01 GMT
/payments-api/rest/v4.9/pricing
~~~

- MerchantPublicKey: PKaC6H4cEDJD919n705L544kSU

Se concatena la anterior información y se le aplica la función HMAC de la siguiente forma:

~~~
Authorization: Hmac PKaC6H4cEDJD919n705L544kSU:sIxh54sANfKaxO0ugX6QwhPmZRS+TGy8gmdCwr3kjP0=
~~~

Para evitar Replay attacks, es necesario que envíes el header <code id="codeinl">Date</code>. Debido a las restricciones presentes en algunos clientes REST, también es posible que envíes el header <code id="codeinl">x-hmac-date</code> para cumplir con los requerimientos de seguridad

A continuación se describirán los atributos y tipos de campos de cada una de las variables que se retornan por parte de PayU en caso de realizar una consulta al API de Pricing y Promociones.

<details>
  <summary>Variables API Pricing:</summary>
    <table>
      <thead>
        <tr>
          <th>Propiedad</th>
          <th>Longitud</th>
          <th>Tipo</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>paymentMethodFeeDetail.paymentMethod</td>
          <td></td>
          <td>String</td>
          <td>Nombre del medio de pago.</td>
        </tr>
        <tr>
          <td>fee</td>
          <td></td>
          <td>Fee</td>
          <td>Objeto que contiene todos los Pricing para un medio de pago y cuota o un conjunto de cuotas (para el caso de países que tienen rango de cuotas).</td>
        </tr>
        <tr>
          <td>fee.installments</td>
          <td></td>
          <td>String</td>
          <td>Cuota(1) o un conjunto de cuotas (1 - 36, para el caso de países que tienen rango de cuotas).</td>
        </tr>
        <tr>
          <td>fee.pricing</td>
          <td></td>
          <td>Pricing</td>
          <td>Contiene los valores de Pricing por defecto para la transacción.</td>
        </tr>
        <tr>
          <td>fee.pricing.payerDetail</td>
          <td></td>
          <td>PayerDetail</td>
          <td>Contiene los valores de intereses y comisiones que se aplicarán al pagador.</td>
        </tr>
        <tr>
          <td>fee.pricing.payerDetail.commission</td>
          <td></td>
          <td>Decimal</td>
          <td>Total de comisiones a aplicar al pagador, incluye Comisiones e Impuestos sobre comisiones si aplica.</td>
        </tr>
        <tr>
          <td>fee.pricing.payerDetail.interests</td>
          <td></td>
          <td>Decimal</td>
          <td>Total de intereses a aplicar al pagador, incluye intereses e Impuestos sobre intereses si aplica.</td>
        </tr>
        <tr>
          <td>fee.pricing.payerDetail.total</td>
          <td></td>
          <td>Decimal</td>
          <td>El total del valor a pagar por el pagador por concepto de comisiones e intereses.</td>
        </tr>
        <tr>
          <td>fee.pricing.merchantDetail.commission</td>
          <td></td>
          <td>Merchant Detail</td>
          <td>Total de comisiones a aplicar al comercio, incluye Comisiones e Impuestos sobre comisiones si aplica.</td>
        </tr>
        <tr>
          <td>fee.pricing.merchantDetail.interests</td>
          <td></td>
          <td>Decimal</td>
          <td>Total de intereses a aplicar al comercio, incluye intereses e Impuestos sobre intereses si aplica.</td>
        </tr>
        <tr>
          <td>fee.pricing.merchantDetail.total</td>
          <td></td>
          <td>Decimal</td>
          <td>El total del valor a pagar por el comercio por concepto de comisiones e intereses.</td>
        </tr>
        <tr>
          <td>fee.pricing.totalValue</td>
          <td></td>
          <td>Decimal</td>
          <td>Total del pago, es el valor enviado por el comercio más las comisiones e intereses que correspondan al pagador.</td>
        </tr>
        <tr>
          <td>fee.pricing.additionalInfo.tea</td>
          <td></td>
          <td>Porcentaje</td>
          <td>Tasa de interés efectiva anual aplicada.</td>
        </tr>
        <tr>
          <td>fee.pricing.additionalInfo.cft</td>
          <td></td>
          <td>Porcentaje</td>
          <td>Costo financiero total.</td>
        </tr>
        <tr>
          <td>amount.value</td>
          <td></td>
          <td>Decimal</td>
          <td>Corresponde al valor enviado por el comercio, con el valor de la compra, puede encontrarse en una moneda diferente a la de la cuenta.</td>
        </tr>
        <tr>
          <td>amount.tax</td>
          <td></td>
          <td>Decimal</td>
          <td>Corresponde al valor enviado por el comercio, con el impuesto de la compra, puede encontrarse en una moneda diferente a la de la cuenta.</td>
        </tr>
        <tr>
          <td>amount.taxableBase</td>
          <td></td>
          <td>Decimal</td>
          <td>Corresponde al valor enviado por el comercio, con la base gravable de la compra, puede encontrarse en una moneda diferente a la de la cuenta.</td>
        </tr>
        <tr>
          <td>amount.currency</td>
          <td>3</td>
          <td>String</td>
          <td>Es la moneda con la que el comercio envía el la transacción.</td>
        </tr>
        <tr>
          <td>convertedAmount</td>
          <td></td>
          <td>Converted Amount</td>
          <td>Se relacionan los montos entrantes convertidos a la moneda de operación local. Estos valores se muestran solo si la moneda enviada es diferente a la moneda del país.</td>
        </tr>
        <tr>
          <td>convertedAmount.value</td>
          <td></td>
          <td>Decimal</td>
          <td>Monto de la transacción, en la moneda de la cuenta.</td>
        </tr>
        <tr>
          <td>convertedAmount.tax</td>
          <td></td>
          <td>Decimal</td>
          <td>Valor de impuestos.</td>
        </tr>
        <tr>
          <td>convertedAmount.taxableBase</td>
          <td></td>
          <td>Decimal</td>
          <td>Base gravable.</td>
        </tr>
        <tr>
          <td>convertedAmount.currency</td>
          <td>3</td>
          <td>String</td>
          <td>Es la moneda correspondiente a la cuenta enviada.</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Variables API Promociones:</summary>
    <table>
      <thead>
        <tr>
          <th>Propiedad</th>
          <th>Longitud</th>
          <th>Tipo</th>
          <th>Descripción</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>promotion.id</td>
          <td></td>
          <td>Integer</td>
          <td>Identificador de la promoción en la plataforma de PayU.</td>
        </tr>
        <tr>
          <td>promotion.title</td>
          <td>50</td>
          <td>String</td>
          <td>Título de la promoción.</td>
        </tr>
        <tr>
          <td>promotion.termsAndConditions</td>
          <td>250</td>
          <td>String</td>
          <td>Descripción de los términos y promociones que aplican sobre la promoción.</td>
        </tr>
        <tr>
          <td>promotion.paymentMethod</td>
          <td></td>
          <td>String</td>
          <td>Nombre del medio de pago que aplica para la promoción.</td>
        </tr>
        <tr>
          <td>promotion.subFranchise</td>
          <td></td>
          <td>String</td>
          <td>Nombre de la SubMarca/Subfranquicia por la cual se hace la promoción. Algunas de las submarcas/subfranquicias son: Nativa, Naranja, Cencosud.</td>
        </tr>
        <tr>
          <td>promotion.banks</td>
          <td></td>
          <td>List</td>
          <td>Lista de bancos a los que aplica la promoción.</td>
        </tr>
        <tr>
          <td>promotion.iins</td>
          <td></td>
          <td>List</td>
          <td>Lista con los IIN/BINES de los bancos, para los cuales aplica la promoción.</td>
        </tr>
        <tr>
          <td>promotion.days</td>
          <td></td>
          <td>List</td>
          <td>Lista de días en los que aplica la promoción.</td>
        </tr>
        <tr>
          <td>promotion.startDate</td>
          <td></td>
          <td>Datetime</td>
          <td>Fecha de inicio de la promoción.</td>
        </tr>
        <tr>
          <td>promotion.endDate</td>
          <td></td>
          <td>Datetime</td>
          <td>Fecha de fin de la promoción.</td>
        </tr>
      </tbody>
    </table>
</details><br>

Las consultas al API de Promociones deberas hacerlas a las siguientes URLS:

- Sandbox: https://sandbox.api.payulatam.com/payments-api/rest/v4.9/pricing
+ Producción: https://api.payulatam.com/payments-api/rest/v4.9/pricing

Usando el método <code id="codeinl">GET</code> con los siguientes parametros:

|Parámetros|¿Obligatorio?|
|---|---|
|accountId|Sí|
|currency||
|amount|Sí|
|tax||
|taxableBase||
|paymentMethod||

Dado que este es un servicio RESTful, te recomendamos no validar esquema, de esta forma, cuando se realicen actualizaciones sobre el webservice, no se afectará la integración; solo se deberán realizar los ajustes que se requieran para implementar las nuevas funcionalidades.
{: .info }
