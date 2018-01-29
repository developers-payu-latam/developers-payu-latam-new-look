---
title: Tablas de variables
position: 3.10.7
description:
---

Te presentamos las variables que puedes usar en las diferentes peticiones de pago junto con los valores que algunas de ellas deben tener por defecto.

<details>
  <summary>Listado de variables:</summary>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Formato</th>
          <th>Tamaño</th>
          <th>Descripción</th>
          <th>¿Obligatorio?</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>language</td>
          <td>Alfanúmerico</td>
          <td>2</td>
          <td>El lenguaje usado en la petición. Usando para los mensajes de error del sistema, puede ser <i>es</i>, <i>en</i> o <i>pt</i>.</td>
          <td>Sí</td>
        </tr>
        <tr>
          <td>command</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Define el envio de la petición a PayU. Usar: <i>SUBMIT_TRANSACTION</i>.</td>
          <td></td>
        </tr>
        <tr>
          <td>test / isTest</td>
          <td>Booleano</td>
          <td></td>
          <td><i>true</i> si se trata de una petición de prueba, <i>false</i> de lo contrario.</td>
          <td></td>
        </tr>
        <tr>
          <td>apiLogin</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El usuario o login suministrado por PayU.</td>
          <td></td>
        </tr>
        <tr>
          <td>apiKey</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>La clave o contraseña suministrada por PayU.</td>
          <td></td>
        </tr>
        <tr>
          <td>accountId</td>
          <td>Numérico</td>
          <td></td>
          <td>El identificador de la cuenta.</td>
          <td></td>
        </tr>
        <tr>
          <td>referenceCode</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El código de referencia de la orden. Representa el identificador de la transacción en el sistema del comercio. Debe ser único para cada transacción enviada a PayU.</td>
          <td></td>
        </tr>
        <tr>
          <td>description</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>La descripción de la orden.</td>
          <td></td>
        </tr>
        <tr>
          <td>language</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El idioma usado en los correos electrónicos que se envían el comprador y vendedor, puede ser <i>es</i>, <i>en</i> o <i>pt</i>.</td>
          <td></td>
        </tr>
        <tr>
          <td>notifyUrl</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>La URL usada como página de confirmación</td>
          <td></td>
        </tr>
        <tr>
          <td>partnerId</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>ID de aliado dentro de PayU.</td>
          <td></td>
        </tr>
        <tr>
          <td>signature</td>
          <td>Alfanumérico</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>shippingAddress.street1</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Primera línea de la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>shippingAddress.street2</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Segunda línea de la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>shippingAddress.city</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Ciudad de la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>shippingAddress.state</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Estado o departamento de la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>shippingAddress.country</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>País de la dirección de envío en formato ISO 3166 Código Alpha 2.</td>
          <td></td>
        </tr>
        <tr>
          <td>shippingAddress.postalCode</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Código postal de la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>shippingAddress.phone</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Teléfono asociado a la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>merchantBuyerId</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Identificador del comprador en el sistema del comercio.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.fullName</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Nombres completos del comprador.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.emailAddress</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Correo electrónico del comprador.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.contactPhone</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Teléfono de contacto del comprador.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.dniNumber</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Número de identificación del comprador.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.shippingAddress.street1</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Primera línea de la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.shippingAddress.street2</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Segunda línea de la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.shippingAddress.city</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Ciudad de la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.shippingAddress.state</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Estado o departamento de la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.shippingAddress.country</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>País de la dirección de envío en formato ISO 3166 Código Alpha 2.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.shippingAddress.postalCode</td>
          <td>Numérico</td>
          <td></td>
          <td>Código postal de la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>buyer.shippingAddress.phone</td>
          <td>Numérico</td>
          <td></td>
          <td>Teléfono asociado a la dirección de envío.</td>
          <td></td>
        </tr>
        <tr>
          <td>value</td>
          <td>Numérico</td>
          <td></td>
          <td>Es el monto total de la transacción, puede incluir dos decimales.</td>
          <td></td>
        </tr>
        <tr>
          <td>currency</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El código ISO de la moneda asociada al monto.</td>
          <td></td>
        </tr>
        <tr>
          <td>creditCard.number</td>
          <td>Numérico</td>
          <td></td>
          <td>El número de la tarjeta de crédito.</td>
          <td></td>
        </tr>
        <tr>
          <td>creditCard.securityCode</td>
          <td>Numérico</td>
          <td></td>
          <td>El código de seguridad de la tarjeta de crédito.</td>
          <td></td>
        </tr>
        <tr>
          <td>creditCard.expirationDate</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>La fecha de expiración de la tarjeta de crédito. Formato YYYY/MM.</td>
          <td></td>
        </tr>
        <tr>
          <td>creditCard.name</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El nombre que aparece en la tarjeta de crédito.</td>
          <td></td>
        </tr>
        <tr>
          <td>creditCard.processWithoutCvv2</td>
          <td>Booleano</td>
          <td></td>
          <td>Permite procesar transacciones de tarjeta de crédito sin incluir el código de seguridad CVV2</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.emailAddress</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Correo electrónico del pagador.</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.merchantPayerId</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Identificador del pagador en el sistema del comercio.</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.fullName</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El nombre completo del pagador, debe corresponder con el nombre enviado en el paramétro creditCard.name</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.dniNumber</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>ipo de documento del pagador.</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.billingAddress.street1</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Primera línea de la dirección de facturación.</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.billingAddress.street2</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Segunda línea de la dirección de facturación.</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.billingAddress.city</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Ciudad de la dirección de facturación.</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.billingAddress.state</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Estado o departamento de la dirección de facturación.</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.billingAddress.country</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>País de la dirección de facturación en formato ISO 3166 Código Alpha 2.</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.billingAddress.postalCode</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Código postal de la dirección de facturación.</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.billingAddress.phone</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Teléfono asociado a la dirección de facturación.</td>
          <td></td>
        </tr>
        <tr>
          <td>payer.billingAddress.contactPhone</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Teléfono de contacto del pagador.</td>
          <td></td>
        </tr>
        <tr>
          <td>type</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El tipo de transacción que se quiere realizar. Puede ser: <i>AUTHORIZATION</i>, <i>CAPTURE</i> o <i>AUTHORIZATION_AND_CAPTURE</i> </td>
          <td></td>
        </tr>
        <tr>
          <td>paymentMethod</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El medio de pago a utilizar.</td>
          <td></td>
        </tr>
        <tr>
          <td>paymentCountry</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El país donde se procesa el pago. Usar: <i>AR</i></td>
          <td></td>
        </tr>
        <tr>
          <td>deviceSessionId</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El identificador de la sesión del dispositivo desde donde se realiza la transacción.</td>
          <td></td>
        </tr>
        <tr>
          <td>ipAddress</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>La dirección IP del dispositivo desde donde se realiza la transacción.</td>
          <td></td>
        </tr>
        <tr>
          <td>cookie</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>La cookie almacenada en el dispositivo desde donde se realiza la transacción.</td>
          <td></td>
        </tr>
        <tr>
          <td>userAgent</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>El user agent del navegador desde donde se realiza la transacción.</td>
          <td></td>
        </tr>
        <tr>
          <td>extraParameters</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Los parámetros o datos adicionales asociados a una transacción.</td>
          <td></td>
        </tr>
        <tr>
          <td>expirationDate</td>
          <td>Alfanumérico</td>
          <td></td>
          <td>Define la fecha de expiración para los cupones de pago en efectivo. Formato: aaaa-mm-ddTHH:mm:ss</td>
          <td></td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Idioma:</summary>
    <table>
      <thead>
        <tr>
          <th>Idoma</th>
          <th>Código</th>
          <th colspan="2" style="text-align:center;">Variables</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>API</th>
          <th>SDK</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Español</td>
          <td>es</td>
          <td rowspan="3">language<br><br>transaction.language</td>
          <td rowspan="3">LANGUAGE</td>
        </tr>
        <tr>
          <td>Inglés</td>
          <td>en</td>
        </tr>
        <tr>
          <td>Portugués</td>
          <td>pt</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Código de países:</summary>
    <table>
      <thead>
        <tr>
          <th>País</th>
          <th>Código ISO</th>
          <th colspan="2" style="text-align:center;">Variables</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>API</th>
          <th>SDK</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Argentina</td>
          <td>AR</td>
          <td rowspan="7">buyer.shippingAddress.country<br><br>payer.billingAddress.country<br><br>shippingAddress.country</td>
          <td rowspan="7">COUNTRY<br><br>BUYER_COUNTRY<br><br>PAYER_COUNTRY</td>
        </tr>
        <tr>
          <td>Brasil</td>
          <td>BR</td>
        </tr>
        <tr>
          <td>Chile</td>
          <td>CH</td>
        </tr>
        <tr>
          <td>Colombia</td>
          <td>CO</td>
        </tr>
        <tr>
          <td>México</td>
          <td>MX</td>
        </tr>
        <tr>
          <td>Pánama</td>
          <td>PA</td>
        </tr>
        <tr>
          <td>Perú</td>
          <td>PE</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Divisas:</summary>
    <table>
      <thead>
        <tr>
          <th>Divisa</th>
          <th>Código ISO</th>
          <th colspan="2" style="text-align:center;">Variables</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>API</th>
          <th>SDK</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Peso Argentino</td>
          <td>ARS</td>
          <td rowspan="7">currency</td>
          <td rowspan="7">CURRENCY</td>
        </tr>
        <tr>
          <td>Real Brasileño</td>
          <td>BRS</td>
        </tr>
        <tr>
          <td>Peso Chileno</td>
          <td>CLP</td>
        </tr>
        <tr>
          <td>Peso Colombiano</td>
          <td>COP</td>
        </tr>
        <tr>
          <td>Peso Mexicano</td>
          <td>MXN</td>
        </tr>
        <tr>
          <td>Nuevo Sol Peruano</td>
          <td>PEN</td>
        </tr>
        <tr>
          <td>Dólar Estadounidense</td>
          <td>USD</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Pruebas:</summary>
    <table>
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Código</th>
          <th colspan="2" style="text-align:center;">Variables</th>
        </tr>
        <tr>
          <th></th>
          <th></th>
          <th>API</th>
          <th>SDK</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Para ejecución de pruebas</td>
          <td>true</td>
          <td rowspan="2">test (json)<br>isTest (xml)</td>
          <td rowspan="2">isTest</td>
        </tr>
        <tr>
          <td>En producción</td>
          <td>false</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Tipo de transacción:</summary>
    <table>
      <thead>
        <tr>
          <th>Descripción</th>
          <th colspan="2" style="text-align:center;">Código</th>
          <th colspan="2" style="text-align:center;">Variable</th>
        </tr>
        <tr>
          <th></th>
          <th>API</th>
          <th>SDK</th>
          <th>API</th>
          <th>SDK</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Autorización</td>
          <td>AUTHORIZATION</td>
          <td>doAuthorization</td>
          <td rowspan="3">type</td>
          <td rowspan="3">Se define al final de la petición como solicitud de respuesta</td>
        </tr>
        <tr>
          <td>Captura</td>
          <td>CAPTURE</td>
          <td>doCapture</td>
        </tr>
        <tr>
          <td>Autorización y Captura</td>
          <td>AUTHORIZATION_AND_CAPTURE</td>
          <td>doAuthorizationAndCapture</td>
        </tr>
      </tbody>
    </table>
</details>

<details>
  <summary>Comando:</summary>
    <table>
      <thead>
        <tr>
          <th>Descripción</th>
          <th colspan="2" style="text-align:center;">Código</th>
          <th colspan="2" style="text-align:center;">Variables</th>
        </tr>
        <tr>
          <th></th>
          <th>API</th>
          <th>SDK</th>
          <th>API</th>
          <th>SDK</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>SUBMIT_TRANSACTION</td>
          <td></td>
          <td rowspan="7">command</td>
          <td rowspan="7">No aplica</td>
        </tr>
        <tr>
          <td></td>
          <td>PING</td>
          <td>doPing</td>
        </tr>
        <tr>
          <td></td>
          <td>GET_PAYMENT_METHODS</td>
          <td>getPaymentMethods</td>
        </tr>
        <tr>
          <td></td>
          <td>GET_BANKS_LIST</td>
          <td>getPSEBanks</td>
        </tr>
        <tr>
          <td></td>
          <td>ORDER_DETAIL</td>
          <td>getOrderDetail</td>
        </tr>
        <tr>
          <td></td>
          <td>ORDER_DETAIL_BY_REFERENCE_CODE</td>
          <td>getOrderDetailByReferenceCode</td>
        </tr>
        <tr>
          <td></td>
          <td>TRANSACTION_RESPONSE_DETAIL</td>
          <td>getTransactionResponse</td>
        </tr>
      </tbody>
    </table>
</details>
