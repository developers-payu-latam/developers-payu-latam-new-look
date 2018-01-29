---
title: Página de confirmación ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
position: 2.13
description: WebCheckout
---

La página de confirmación te permite actualizar las bases de datos de tu sistema; por esto, no debe incluir código HTML ya que nunca será visible al comprador. Cuando una transacción finaliza, es decir cuando se aprueba, se rechaza o cuando es cancelada, nuestra plataforma envía las variables por medio del método **HTTP POST**.

PayU asumirá que la página de confirmación se reportó correctamente si el sistema recibe el código HTTP 200; de lo contrario, realizará máximo nueve (9) intentos de enviar la página de confirmación a tu sistema. Si después de estos intentos no se recibe el código HTTP 200, el sistema envía un email de alerta.

##### ¿Cómo puedo integrar la página de confirmación?

En la página de confirmación, debes realizar la captura de los datos que se deseen guardar en la base de datos. Esta captura dependerá del lenguaje de programación utilizado.

Si utilizas protocolo https, debes asegurarte de tener un certificado válido.
{: .warning }
La IP asociada a la URL de confirmación debe ser pública; no de acceso desde intranet o localhost.
{: .warning }
Temporalmente NO utilices certificados de seguridad de curva elíptica o aquellos que cuenten con la suite de cifrado TLS_ECDHE_ECDSA_WITH_RC4_128_SHA en tus peticiones de pago.
{: .warning }

Te enviaremos la información de la siguiente forma:

~~~ POST
[HTTP Post Data] = {response_code_pol=9999, phone=7563126, additional_value=0.00, test=0, transaction_date=2017-12-05 08:41:40, cc_number=************6966, cc_holder=Nombre Cliente, error_code_bank=, billing_country=AR, bank_referenced_name=, description=Test CVV2 Arg, administrative_fee_tax=0.00, value=17.00, administrative_fee=0.00, payment_method_type=2, office_phone=7563126, email_buyer=nombre.cliente@test.com, response_message_pol=INACTIVE_PAYMENT_PROVIDER, error_message_bank=, shipping_city=Buenos Aires, transaction_id=62d8c396-7b7c-4d03-a6a6-e2635c8d3af9, sign=39c8806ae7954bbee7f4eb2ec29c0b4d, tax=0.00, payment_method=257, billing_address=Viamonte, payment_method_name=VISA, pse_bank=, state_pol=6, date=2017.12.05 08:41:40, nickname_buyer=, reference_pol=985411811, currency=ARS, risk=0.0, shipping_address=Viamonte, bank_id=257, payment_request_state=R, customer_number=1, administrative_fee_base=0.00, attempts=1, merchant_id=500199, exchange_rate=1.00, shipping_country=AR, installments_number=1, franchise=VISA, payment_method_id=2, extra1=, extra2=, antifraudMerchantId=, extra3=, nickname_seller=, ip=127.0.0.1, airline_code=, billing_city=Buenos Aires, pse_reference1=, reference_sale=PRCVVARG1, pse_reference3=, pse_reference2=}
~~~

##### Signature
