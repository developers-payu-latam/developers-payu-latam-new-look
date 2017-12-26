---
title: Integración WebCheckout
position: 2.10
description: Redirecciona a tu cliente a nuestra pasarela para completar la compra de forma segura<br>Disponible para <a href="/#webcheckoutargentinapayment_form">Argentina</a>, <a href="/#webcheckoutbrazilpayment_form">Brasil</a>, <a href="/#webcheckoutchilepayment_form">Chile</a>, <a href="/#webcheckoutcolombiapayment_form">Colombia</a>, <a href="/#webcheckoutmexicopayment_form">México</a>, <a href="/#webcheckoutpanamapayment_form">Panamá</a>, <a href="/#webcheckoutperupayment_form">Perú</a>
---

|Este tipo de integración permite que tu cliente pueda seleccionar los artículos que desea adquirir y al momento de realizar la compra sea redirigido a nuestra pasarela de pagos (WebCheckout).<br><br>Es necesario que el desarrollador de la integración cuente con conocimientos de un lenguaje de programación dinámico tipo PHP, Java, etc.<br><br>Podrás incluir el logo de tu comercio en esta página.<br><br>El intercambio de datos se realiza a través del método *HTTP POST*.|<img src="/images/illustrations/Checkout1-es.png" width="500" height="377">|
{:.nobordertable}

#### Componentes de la Integración

|**1. Formulario de pago**<br>Con este formulario HTML envías la petición de la transacción a nuestra pasarela de pagos incluyendo los datos de la compra, utilizando el método *HTTP POST*.<br><br>**2. Página de respuesta**<br>Es una página que permite mostrar al pagador el resultado de la transacción. Nuestro sistema dirigirá al pagador a esta página una vez haya realizado la transacción. Los datos con el resultado del pago serán enviados a tu sistema a través de *HTTP GET*. Esta página se llama para todos los estados de transacciones: aprobada, rechazada, en validación, esperando pago (para pagos en efectivo), etc. Esta página es obligatoria.<br><br>**3. Página de confirmación**<br>A través de esta página le confirmamos a tu sistema el resultado final de la transacción. En este punto puedes actualizar tus sistemas de inventarios, pedidos o bases de datos. Esta página nunca será visible al comprador ya que su objetivo es permitir la comunicación entre sistemas. Los datos son enviados por método *HTTP POST*. Si el pagador genera reintentos de pago durante la compra, se generarán las páginas de confirmación correspondientes a cada transacción. PayU solo envía páginas de confirmación para los estados de transacción aprobado y rechazado. Esta página no es obligatoria  |<img src="/images/illustrations/integracion.gif" width="500" height="405">|
{:.nobordertable}

#### ¿Cómo funciona?

|**1.** El proceso empieza cuando el comprador entra a tu página web, selecciona los productos o servicios que desea adquirir y hace clic en el botón pagar. Tu sistema debe totalizar el valor de la compra y enviar a nuestro sistema un formulario de pago por método HTTP POST con algunos datos de la compra.|<img src="/images/illustrations/paso1-es.jpg" width="500" height="230">|
|**2.** El pagador es dirigido a nuestro checkout, donde puede escoger el medio de pago con el que desea realizar la transacción.|<img src="/images/illustrations/paso2-es.jpg" width="500" height="269">|
|**3.** PayU procesa la transacción y muestra el resultado en la página de respuesta de la pasarela.|<img src="/images/illustrations/paso3-es.jpg" width="500" height="287">|
|**4.** PayU redirige al pagador a tu página web (página de respuesta) y envía la información del resultado a tu sistema a través del método HTTP GET.|<img src="/images/illustrations/paso4-es.jpg" width="500" height="287">|
|**5.** El sistema te notificará el estado final de la transacción a través de una página de confirmación por el método HTTP POST. Adicionalmente el sistema te enviará un correo electrónico de confirmación y uno al pagador.|<img src="/images/illustrations/paso5-es.jpg" width="500" height="338">|
{:.nobordertable}

Disponible para: [Argentina]({{ "#webcheckoutargentinapayment_form" }}), [Brazil]({{ "#webcheckoutbrazilpayment_form" }}), [Chile]({{ "#webcheckoutchilepayment_form" }}), [Colombia]({{ "#webcheckoutcolombiapayment_form" }}), [México]({{ "#webcheckoutmexicopayment_form" }}), [Panamá]({{ "#webcheckoutpanamapayment_form" }}) y [Perú]({{ "#webcheckoutperupayment_form" }})
{: .info }
La codificación de tu página debe ser UTF-8.
{: .info }
Temporalmente **NO** utilices certificados de seguridad de curva elíptica o aquellos que cuenten con la suite de cifrado TLS_ECDHE_ECDSA_WITH_RC4_128_SHA en tu página de confirmación.
{: .warning }
No debes enmascarar la URL durante el proceso de pago.
{: .error }
No debes ingresar nuestro Web Checkout dentro de un iframe.
{: .error }
