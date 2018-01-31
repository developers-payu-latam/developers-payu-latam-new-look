---
title: <img src="/images/illustrations/shopify.jpg">
position: 2.41
description: Solución preintegrada
---

La plataforma de comercio Shopify esta originalmente diseñada para procesar pagos a través de tarjetas de crédito únicamente, es por esto que la gestión de ordenes se basa en dos "estados" globales: **Orders** y **Abandoned Checkouts**. Esto representa ciertos inconvenientes con transacciones procesadas con medios de pago en efectivo.

<strong>Para recordar:</strong><br>El redireccionamiento desde nuestra pagina de respuesta al sitio de la tienda no se realiza de forma automática, y no puede ser configurado.
{: .warning }

##### Gestión de ordenes en Shopify

Te presentamos a continuación información que debes tener en cuenta sobre el comportamiento de Shopify, su gestión de ordenes, y su relación con nuestra pasarela segura de pagos.

###### Orders

En esta pestaña se verán todas las compras aprobadas que se realicen en tu tienda y:

- Hayan sido procesadas con tarjetas de crédito y el pago aprobado inmediatamente.
+ Hayan sido procesadas con tarjetas de crédito y el pago haya quedado pendiente por validación Anti Fraude, y el pagador ***dio*** clic en "Regresar al sitio de la tienda" desde nuestra pasarela.
- Hayan sido procesadas con medios de pago en efectivo y el pagador ***dio*** clic en "Regresar al sitio de la tienda" desde nuestra pasarela.

###### Abandoned Checkouts

En esta pestaña se verán todos los procesos de compra que se realicen en tu tienda y:

- No fueron completados.
+ Han sido abandonados durante el proceso de pago.
- Hayan sido procesadas con cualquier medio de pago y el pago rechazado inmediatamente.
+ Hayan sido procesadas con tarjetas de crédito y el pago haya quedado pendiente por validación Anti Fraude, y el pagador ***NO dio*** clic en "Regresar al sitio de la tienda" desde nuestra pasarela.
- Hayan sido procesadas con medios de pago en efectivo y el pagador ***NO dio*** clic en "Regresar al sitio de la tienda" desde nuestra pasarela.

Para los dos últimos casos, Shopify ***NO*** realizará ningun tipo de reserva de inventario.
{: .error }

Te recomendamos incluir en tu checkout un banner sugiriendole a tus clientes dar clic en el enlace de "Regresar al sitio de la tienda" presentado en nuestro WebCheckout.
{: .success }

##### Configura tu tienda

<table class="nobordertable">
  <tbody>
    <tr>
      <td><strong>1.</strong> Ingresa a tu tienda de Shopify y ve al menú <strong><em>Settings</em></strong> y allí da clic sobre <strong><em>Payment providers</em></strong>.</td>
      <td><img src="/images/illustrations/shopify1-es.png" width="500"></td>
    </tr>
    <tr>
      <td><strong>2.</strong> En la opción <strong><em>Accept credit cards</em></strong> selecciona <strong><em>PayU Latam</em></strong>.</td>
      <td><img src="/images/illustrations/shopify2-es.png" width="500"></td>
    </tr>
    <tr>
      <td><strong>3.</strong> Ingresa las credenciales solicitadas: <strong><em>Account Id</em></strong> y <strong><em>APIKey</em></strong>. Los puedes encontrar en tu <a href="#administrativeothersintro">Módulo Administrativo</a> en las secciones <a href="#administrativecheckingbalance">"Cuentas"</a> y <a href="#administrativeconfigtechnical">"Configuración"</a> respectivamente.<br><br> Finalmente da clic en <strong><em>Activate</em></strong><br><br><div class="error">No debes confundir el <em>Account Id</em> con el <em>Merchant Id</em></div></td>
      <td><img src="/images/illustrations/shopify3-es.png" width="500"></td>
    </tr>
  </tbody>
</table>

Te recomendamos deshabilitar la validación de referencia única para todos los estados, para evitar inconvenientes al momento de procesar tus pagos.<br><br><img src="/images/illustrations/unique_ref_es.png"><br><br>El check lo podrás visualizar en tu [Módulo Administrativo]({{ "#administrativeothersintro" }}) en la sección ["Cuentas -> Configuración de cuentas"]({{ "#administrativeconfigaccounts" }}).
{: .success }

##### Flujo de pago

<table class="nobordertable">
  <tbody>
    <tr>
      <td><strong>1.</strong> Tu cliente elige el producto que desea comprar, lo agrega a su carrito y procede al <strong><em>check out</em></strong> de tu tienda.</td>
      <td><img src="/images/illustrations/shopify4-es.png" width="500"></td>
    </tr>
    <tr>
      <td><strong>2.</strong> Ingresa sus datos de acuerdo a la configuración de tu tienda, elige el método de envio y accede a la selección del medio de pago a usar, <strong><em>PayU</em></strong>, da clic en <strong><em>Finalizar el pedido</em></strong> y será redireccionado a nuestro WebCheckout donde podrá realizar el respectivo pago.</td>
      <td><img src="/images/illustrations/shopify5-es.png" width="500"></td>
    </tr>
    <tr>
      <td><strong>3.</strong> Una vez tu cliente realice el pago con cualquier medio disponible, verá nuestra página de respuesta y un enlace para <strong><em>Regresar al sitio de la tienda</em></strong>, este "regreso" es opcional y dependerá de si tu cliente da clic en el enlace o no. Recuerda tener presente los posibles estados que puede tener la orden y donde la puedes encontrar dependiendo de los mismos (<a href="#gestión-de-ordenes-en-shopify">Gestión de ordenes</a>)<br><br><div class="success">Te recomendamos incluir en tu checkout un banner sugiriendole a tus clientes dar clic en el enlace de "Regresar al sitio de la tienda" presentado en nuestro WebCheckout.</div></td>
      <td><img src="/images/illustrations/shopify6-es.png" width="500"></td>
    </tr>
    <tr>
      <td><strong>4.</strong> Si tu comprador regresa al sitio de la tienda, verá tu página de respuesta con la información sobre su pedido y el respectivo número de orden que tu verás en tu Backend en la pestaña Orders.</td>
      <td><img src="/images/illustrations/shopify7-es.png" width="500"></td>
    </tr>
  </tbody>
</table>
