---
title: Página de respuesta ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
position: 2.12
description: WebCheckout
---

Al finalizar una transacción nuestro sistema enviará al pagador a la página de respuesta. A esta página nuestro sistema envía la información del resultado de la transacción mediante el método **HTTP GET**.

Si deseas que PayU muestre siempre la información de la transacción, asegúrate de no enviar nada en el parámetro "responseUrl" en el formulario de pago y dejarla en blanco en la configuración de tu cuenta en el [Módulo Administrativo]({{ "#administrativeintegrationaccount_config" }}). Ten en cuenta que en este caso, el usuario no tendrá la opción de regresar a tu página web

Algunos proveedores de hosting tienen configuraciones que no permiten enviar URLs como valores de parámetros URLs. Ejemplo: &merchant_url=http%3A%2F%2Fwww.lamiradaoptica.com
{: .info }
Para cuentas de Brasil no hay redireccionamiento a la página de respuesta.
{: .warning }
No dependas de la página de respuesta para actualizar tu base de datos o ejecutar procesos ya que es posible que el usuario no regrese a la misma; utiliza la [página de confirmación]({{ "#webcheckoutargentinaconfirmation_page" }}).
{: .error }

##### ¿Cómo puedo integrar la página de respuesta?

Lo puedes hacer en la forma de tu elección, lo único que debes hacer es capturar la información que te enviamos en el GET y presentarla a tus clientes.

Te enviaremos la información de la siguiente forma:

~~~ GET
http://www.test.com/response.php?merchantId=508029&merchant_name=Test+PayU+Test+comercio&merchant_address=Av+123+Calle+12&telephone=7512354&merchant_url=http%3A%2F%2Fpruebaslapv.xtrweb.com&transactionState=4&lapTransactionState=APPROVED&message=APPROVED&referenceCode=20%2F12%2F2017+14%3A50%3A52&reference_pol=843452712&transactionId=d6c64ea2-0248-474d-9b0f-1b4f0af419d0&description=Pagina+Respuesta&trazabilityCode=d6c64ea2-0248-474d-9b0f-1b4f0af419d0&cus=d6c64ea2-0248-474d-9b0f-1b4f0af419d0&orderLanguage=es&extra1=&extra2=&extra3=&polTransactionState=4&signature=f51dd97bfd35dc707ff90fa450d87aa8&polResponseCode=1&lapResponseCode=APPROVED&risk=.00&polPaymentMethod=263&lapPaymentMethod=MASTERCARD&polPaymentMethodType=2&lapPaymentMethodType=CREDIT_CARD&installmentsNumber=1&TX_VALUE=300.00&TX_TAX=.00&currency=ARS&lng=es&pseCycle=&buyerEmail=nombre.cliente%40test.com&pseBank=&pseReference1=&pseReference2=&pseReference3=&authorizationCode=NPS-011111&processingDate=2017-12-20
~~~
{: title="GET" }

Te presentamos un ejemplo en PHP de como puedes integrar la página

~~~
ApiKey~merchantId~referenceCode~new_value~currency~transactionState
~~~
{: title="Otro lenguaje" }
~~~ php
<?php
$ApiKey = "4Vj8eK4rloUd272L48hsrarnUA";
$merchant_id = $_REQUEST['merchantId'];
$referenceCode = $_REQUEST['referenceCode'];
$TX_VALUE = $_REQUEST['TX_VALUE'];
$New_value = number_format($TX_VALUE, 1, '.', '');
$currency = $_REQUEST['currency'];
$transactionState = $_REQUEST['transactionState'];
$firma_cadena = "$ApiKey~$merchant_id~$referenceCode~$New_value~$currency~$transactionState";
$firmacreada = md5($firma_cadena);
$firma = $_REQUEST['signature'];
$reference_pol = $_REQUEST['reference_pol'];
$cus = $_REQUEST['cus'];
$extra1 = $_REQUEST['description'];
$pseBank = $_REQUEST['pseBank'];
$lapPaymentMethod = $_REQUEST['lapPaymentMethod'];
$transactionId = $_REQUEST['transactionId'];

if ($_REQUEST['transactionState'] == 4 ) {
	$estadoTx = "Transacción aprobada";
}
else if ($_REQUEST['transactionState'] == 6 ) {
	$estadoTx = "Transacción rechazada";
}
else if ($_REQUEST['transactionState'] == 104 ) {
	$estadoTx = "Error";
}
else if ($_REQUEST['transactionState'] == 7 ) {
	$estadoTx = "Transacción pendiente";
}
else {
	$estadoTx=$_REQUEST['mensaje'];
}
if (strtoupper($firma) == strtoupper($firmacreada)) {
?>
	<h2>Resumen Transacción</h2>
	<table>
	<tr>
	<td>Estado de la transaccion</td>
	<td><?php echo $estadoTx; ?></td>
	</tr>
	<tr>
	<tr>
	<td>ID de la transaccion</td>
	<td><?php echo $transactionId; ?></td>
	</tr>
	<tr>
	<td>Referencia de la venta</td>
	<td><?php echo $reference_pol; ?></td>
	</tr>
	<tr>
	<td>Referencia de la transaccion</td>
	<td><?php echo $referenceCode; ?></td>
	</tr>
	<tr>
	<?php
	if($pseBank != null) {
	?>
		<tr>
		<td>cus </td>
		<td><?php echo $cus; ?> </td>
		</tr>
		<tr>
		<td>Banco </td>
		<td><?php echo $pseBank; ?> </td>
		</tr>
	<?php
	}
	?>
	<tr>
	<td>Valor total</td>
	<td>$<?php echo number_format($TX_VALUE); ?></td>
	</tr>
	<tr>
	<td>Moneda</td>
	<td><?php echo $currency; ?></td>
	</tr>
	<tr>
	<td>Descripción</td>
	<td><?php echo ($extra1); ?></td>
	</tr>
	<tr>
	<td>Entidad:</td>
	<td><?php echo ($lapPaymentMethod); ?></td>
	</tr>
	</table>
<?php
}
else
{
?>
	<h1>Error validando firma digital.</h1>
<?php
}
?>
~~~
{: title="PHP" }
<a name="sigresponsewcarg"></a> <!--- Anchor linking -->
##### Signature

Debes validar la firma que PayU te devuelve ya que es esta la que te permitirá comprobar la integridad de los datos. Deberás generar tu propia firma y compararla con la que se envía en el parámetro "signature" en el **GET**. En esta oportunidad, la cadena estará compuesta de la siguiente forma:

~~~ signature
ApiKey~merchantId~referenceCode~new_value~currency~transactionState
~~~
{: title="Signature" }

El parámetro *new_value* lo obtendrás de la siguiente forma: se debe aproximar **TX_VALUE** siempre a un decimal con el método de redondeo *"Round half to even"*

<details markdown="1">
  <summary>Caso 1: Si el primer decimal es par y el segundo es 5, se redondeará hacia el menor valor.</summary>
    Tu apiKey: 4Vj8eK4rloUd272L48hsrarnUA

    Parámetros que se obtienen en la página de respuesta:
    merchantId = 508029
    referenceCode = TestPayU04
    TX_VALUE = 150.25
    currency = USD
    transactionState = 6
    signature = 00286dc735bd9eaa8ae3a3a4cbb40688

    Se genera la firma de la siguiente forma: MD5(4Vj8eK4rloUd272L48hsrarnUA~508029~TestPayU~150~USD~6) = 00286dc735bd9eaa8ae3a3a4cbb40688
</details>

<details markdown="1">
  <summary>Caso 2: Si el primer decimal es impar y el segundo es 5, se redondeará hacia el valor mayor.</summary>
    Tu apiKey: 4Vj8eK4rloUd272L48hsrarnUA

    Parámetros que se obtienen en la página de respuesta:
    merchantId = 508029
    referenceCode = TestPayU04
    TX_VALUE = 150.35
    currency = USD
    transactionState = 6
    signature = 9df2bb60e2838170009040982967923f

    Se genera la firma de la siguiente forma: MD5(4Vj8eK4rloUd272L48hsrarnUA~508029~TestPayU04~150.4~USD~6) = 9df2bb60e2838170009040982967923f
</details>

<details markdown="1">
  <summary>Caso 3: En cualquier otro caso se redondeará al decimal más cercano.</summary>
    Tu apiKey: 4Vj8eK4rloUd272L48hsrarnUA

    Parámetros que se obtienen en la página de respuesta:
    merchantId = 508029
    referenceCode = TestPayU04
    TX_VALUE = 150.34
    currency = USD
    transactionState = 6
    signature = 779f163be9347a691bcdb25064644795

    Se genera la firma de la siguiente forma: MD5(4Vj8eK4rloUd272L48hsrarnUA~508029~TestPayU04~150.3~USD~6) = 779f163be9347a691bcdb25064644795
</details><br>

Debes tener almacenada tu ApiKey de forma segura
{: .info }
Los parámetros para generar la firma merchantId, referenceCode, TX_VALUE, currency y transactionState debes obtenerlos de la página de respuesta, **no de tu base de datos**
{: .warning }

Puedes comparar tu firma con nuestro [generador aquí]({{ "#toolssignatureresponse_page" }}).
