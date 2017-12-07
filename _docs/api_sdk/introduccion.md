---
title: Introducción
category: Integración API y SDK
order: 1
---

<main id="section-content" class="section section-content">
<div class="payu-page-header superhero-sticky">
<h1 class="payu-title1 bgreen bgreen">Integración API</h1>
<ul class="hidden-xs">
	<li class="first leaf"><a class="active" href="#que-debes-saber">¿Qué debes saber?</a></li>
	<li class="leaf"><a href="#operaciones">Operaciones disponibles</a></li>
	<li class="leaf"><a href="#configuraciones-iniciales">Configuraciones iniciales</a></li>
</ul>
</div>
<div id="que-debes-saber" class="payu-fragment container">
<div class="row-img">
&nbsp;<br>
&nbsp;<br>
<p class="col s12 m6 l6">&nbsp;<br>&nbsp;<br>&nbsp;<br>
<span class="blue-text-16">PayU ofrece una API que le permite a tu comercio procesar transacciones desde diferentes tipos de aplicaciones (web, móvil, IVR, entre otras).</span><br>
<br>
<span class="grey-text-13">Dependiendo del país donde registres tu comercio, tendrás acceso a diferentes medios de pago, incluyendo tarjetas de crédito, transferencias bancarias y pagos en efectivo.<br><br>
Podrás personalizar el checkout de acuerdo a las necesidades de tu negocio y lo mejor de todo, tu cliente permanecerá en tu sitio web durante la compra.</span></p>
<img class="col s12 m6 l6" src="/images/api/api1-es.png" alt="API checkout" border="0" />
</div>
&nbsp;<br>
&nbsp;<br>
</div>
<div id="operaciones" class="payu-fragment grey-bg">
<div class="container">
<div class="row">
<div class="payu-section">
<div class="main-text col s12 m12 l12"><h3>Funcionalidades disponibles para la integración con la API PayU</h3></div>
<div class="card col s6 m3 l3"><div class="icon-circle"><a href="{{ site.baseurl }}/es/api/payments.html"><img src="/images/icon/payment-icon.png" alt="Integración API" border="0"></a></div><h4>Pagos</h4></div>
<div class="card col s6 m3 l3"><div class="icon-circle"><a href="{{ site.baseurl }}/es/api/queries.html"><img src="/images/icon/query-icon.png" alt="Integración API" border="0"></a></div><h4>Consultas</h4></div>
<div class="card col s6 m3 l3"><div class="icon-circle"><a href="{{ site.baseurl }}/es/api/recurring_payments.html"><img src="/images/icon/recurring-icon.png" alt="Integración API" border="0"></a></div><h4>Pagos recurrentes</h4></div>
<div class="card col s6 m3 l3"><div class="icon-circle"><a href="{{ site.baseurl }}/es/api/tokenization.html"><img src="/images/icon/token-icon.png" alt="Integración Webcheckout" border="0"></a></div><h4>Tokenización</h4></div>
</div>
</div>
</div>
</div>
<div id="configuraciones-iniciales" class="payu-fragment">
<div class="white-bg">
<div class="container">
<div class="row">
<h3>Configuraciones iniciales</h3>
<p>Con PayU puedes realizar integraciones usando nuestra pasarela transaccional, la cual te da acceso a herramientas de pago y consultas, desarrollando un cliente HTTPS para transferir la información de las transacciones a través de SSL. Es importante que no se almacenen los datos sensibles de la transacciones como el número de tarjeta de crédito, fecha de expiración, etc. Se recomienda seguir las práctias de PCI DSS (Payment Card Industry Data Security Standard).
&nbsp;<br>
La transmisión de las transacciones es asegurada a través de una conexión TLS (Transport Layer Security) de 256 bits desde el servidor del comercio hasta nuestro Gateway de pagos. El intercambio de mensajes se realiza a través de cadenas XML o JSON, las operaciones se distinguen a través de un comando que se envía en la petición. Un ejemplo de una petición en XML y una en JSON se pueden ver en los siguientes listados:</p>


<div class="squelch-taas-tab-group squelch-taas-override" data-title="" data-disabled="false" data-collapsible="false" data-active="0" data-event="click">
<ul>
<li class="squelch-taas-tab"><a href="#squelch-taas-tab-content-0-0">XML</a></li>
<li class="squelch-taas-tab"><a href="#squelch-taas-tab-content-0-1">JSON</a></li>
</ul>

<div id="squelch-taas-tab-content-0-0">
<pre>
POST /payments-api/4.0/service.cgi HTTP/1.1
Host: sandbox.api.payulatam.com
Content-Type: application/xml; charset=utf-8
Accept: application/xml
Content-Length: length
<span class="tag">&lt;request&gt;</span><span class="pln">
   </span><span class="tag">&lt;language&gt;</span><span class="pln">en</span><span class="tag">&lt;/language&gt;</span><span class="pln">
   </span><span class="tag">&lt;command&gt;</span><span class="pln">GET_PAYMENT_METHODS</span><span class="tag">&lt;/command&gt;</span><span class="pln">
   </span><span class="tag">&lt;merchant&gt;</span><span class="pln">
      </span><span class="tag">&lt;apiLogin&gt;</span><span class="pln">xxxxxxxxxxxxx</span><span class="tag">&lt;/apiLogin&gt;</span><span class="pln">
      </span><span class="tag">&lt;apiKey&gt;</span><span class="pln">xxxxxxxxxxxxx</span><span class="tag">&lt;/apiKey&gt;</span><span class="pln">
   </span><span class="tag">&lt;/merchant&gt;</span><span class="pln">
   </span><span class="tag">&lt;isTest&gt;</span><span class="pln">false</span><span class="tag">&lt;/isTest&gt;</span><span class="pln">
</span><span class="tag">&lt;/request&gt;</span>
</pre>
</div>
<div id="squelch-taas-tab-content-0-1">
<pre>
POST /payments-api/4.0/service.cgi HTTP/1.1
Host: sandbox.api.payulatam.com
Content-Type: application/json; charset=utf-8
Accept: application/json
Content-Length: length
<span class="json-open-bracket">{</span><span class="json-collapse-1">
<span class="json-indent">&nbsp;&nbsp;&nbsp;</span><span class="json-property">"test"</span><span class="json-semi-colon">: </span><span class="json-value">false</span><span class="json-comma">,</span>
<span class="json-indent">&nbsp;&nbsp;&nbsp;</span><span class="json-property">"language"</span><span class="json-semi-colon">: </span><span class="json-value">"en"</span><span class="json-comma">,</span>
<span class="json-indent">&nbsp;&nbsp;&nbsp;</span><span class="json-property">"command"</span><span class="json-semi-colon">: </span><span class="json-value">"GET_PAYMENT_METHODS"</span><span class="json-comma">,</span>
<span class="json-indent">&nbsp;&nbsp;&nbsp;</span><span class="json-property">"merchant"</span><span class="json-semi-colon">: </span><span class="json-open-bracket">{</span><span class="json-collapse-2">
<span class="json-indent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="json-property">"apiLogin"</span><span class="json-semi-colon">: </span><span class="json-value">"xxxxxxxxxxxxx"</span><span class="json-comma">,</span>
<span class="json-indent">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span class="json-property">"apiKey"</span><span class="json-semi-colon">: </span><span class="json-value">"xxxxxxxxxxxxx"</span>
<span class="json-indent">&nbsp;&nbsp;&nbsp;</span></span><span class="json-close-bracket">}</span>
<span class="json-indent"></span></span><span class="json-close-bracket">}</span>
</pre>
</div></div>
&nbsp;<br>
&nbsp;<br>
<p>Puedes definir en la petición qué lenguajes deseas usar a través de las cabeceras HTTP
<span class="highlight-txt">Content-type</span> y <span class="highlight-txt">Accept</span>. Se pueden usar todas las combinaciones posibles:</p>
&nbsp;<br>
<table class="table-d" >
<tr bgcolor="#00AEBA">
<td><span style="color: #fff; font-weight: bold;">CONTENT-TYPE</span></td>
<td><span style="color: #fff; font-weight: bold;">ACCEPT</span></td>
</tr>
<tr>
<td>application/xml</td>
<td>application/xml</td>
</tr>
<tr bgcolor="#f5f5f5">
<td>application/json</td>
<td>application/json</td>
</tr>
<tr>
<td>application/xml</td>
<td>application/json</td>
</tr>
<tr bgcolor="#f5f5f5">
<td>application/json</td>
<td>application/xml</td>
</tr>
</table>
&nbsp;<br>
&nbsp;<br>
&nbsp;<br>
<div id="blue-box">
<div id="info-box">Tener en cuenta:</div>
<ol>
<li> Debes tener una cuenta activa en PayU.</li>
<li> Debes instalar el certificado <b>SSL</b> válido en tu servidor y tu sitio debe estar en capacidad de realizar conexiones <b>SSL</b> por lo cual la máquina virtual debe contar con las extensiones de seguridad apropiadas.</li>
<li> Temporalmente NO utilices certificados de seguridad de curva elíptica o aquellos que cuenten con la suite de cifrado TLS_ECDHE_ECDSA_WITH_RC4_128_SHA en tus peticiones de pago.</li>
<li> Debes contar con lenguajes de servidor o CGI tales como <b>Java</b>, <b>C#</b>, <b>VB</b>, <b>PHP</b>, etc.</li>
<li> Debes estar en capacidad de almacenar de forma segura tus credenciales de autenticación (<b>API Key</b> y <b>API Login</b>).</li>
<li> La codificación para los mensajes debe ser <b>UTF-8</b>.</li>
<li> Las fechas con hora deben seguir el formato <b>yyyy-MM-ddTHH:mm:ss</b>, el formato de la hora es 24 horas. Ej. <b>2015-08-22T21:35:12</b>.</li>
<li> En condiciones normales la conexión garantiza tiempos de respuesta de 3 segundos en promedio, si hay una situación anormal, el tiempo máximo de respuesta será de 1 minuto. Es altamente recomendable que configures los “<b>timeouts</b>” cuando te conectes con PayU.</li>
<li> Es importante <b>validar</b> la longitud y los números de tarjetas de crédito por franquicia junto con los códigos de seguridad.</li>
</ol>
</div>
</div>
</div>
</div>
</div>
<section id="section-strapline" class="section section-strapline">
<div class="container">
	<div class="row">
		<div class="region region-strapline-first">
			<div id="block-block-18" class="block block-block"></div>
		</div>
	</div>
</div>
</main>
