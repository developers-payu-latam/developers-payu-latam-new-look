---
title: Pagos con tarjetas de crédito ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
position: 3.11.11
description: API y SDK
---

Tenemos las siguientes franquicias disponibles de acuerdo al tipo de transacción que desees realizar; deberás enviarlos en la variable <code id="codeinl">paymentMethod</code> para API o <code id="codeinl">PAYMENT_METHOD</code> para SDK; de acuerdo con la siguiente <a name="pMarg"></a>tabla:

|Franquicias|Autorización|Captura|Autorización<br>y captura|Valor a enviar<br>en la petición|
|---|---|---|---|---|
|American Express|✓|✓|✓|AMEX|
|Argencard|✓|✓|✓|ARGENCARD|
|Cabal|✓|✓|✓|CABAL|
|Cencosud|✓|✓|✓|CENCOSUD|
|Mastercard|✓|✓|✓|MASTERCARD|
|Tarjeta Naranja|✗|✗|✓|NARANJA|
|Tarjeta Shopping|✓|✓|✓|SHOPPING|
|Visa|✓|✓|✓|VISA|
{:.tableservices}

##### Procesamiento de cuotas

Para el correcto procesamiento de compras diferidas a cuotas deberás presentar la información a tus clientes de la siguiente forma:

1. El valor original de la compra.
2. El valor total financiado.
3. La cantidad de cuotas y el valor de cada una.
4. La tasa de interés efectiva anual (TEA) aplicada.
5. El costo financiero total (CFT). Esta información deberá tener las siguientes caracteristicas:
  - Estar ubicado de forma contigua al resto de las variables informadas.
  + Aparecer en una tipografía en color destacado, de idéntica fuente y con un tamaño al menos cinco veces mayor al utilizado para informar la tasa de interés efectiva anual y/o la cantidad de cuotas y/o su importe.

<center><img src="/images/illustrations/cuotas_arg.png"></center>

En la siguiente tabla te presentamos los valores para TEA y CFT con los que podrás calcular el valor de las cuotas.

|Cuotas|TEA %|CFT %|
|---|---|---|
|3|73.64|94|
|6|89.22|114|
|9|91.10|116|
|12|72.49|91|
|18|93.75|118|
|24|99.64|125|

Según la regulación vigente desde el 1 de febrero de 2017 no podrás mencionar la frase “sin interés” (o cualquier otra frase similar), cuando el costo de financiación del producto y/o servicio sea trasladado al precio de venta del consumidor
{: .warning }
