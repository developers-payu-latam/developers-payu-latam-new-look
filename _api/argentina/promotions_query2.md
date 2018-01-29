---
title: Promociones - Consulta por cuenta, valor de la transacción, moneda y medio de pago ~ Argentina <img src="/images/illustrations/argentina_logo.png" width="50">
position: 3.11.18
description: API y SDK
---

~~~ get
GET https://api.payulatam.com/payments-api/rest/v4.9/pricing?accountId={accountId}&currency={currency}&amount={amount}&paymentMethod={paymentMethod}
~~~

Ejemplo de petición y respuesta

~~~ get
GET https://sandbox.api.payulatam.com/payments-api/rest/v4.9/pricing?accountId=512322&currency=ARS&amount=100&paymentMethod=VISA
~~~

~~~ json
{
   "amount":{
      "value":100.00,
      "tax":0,
      "purchaseValue":100.00,
      "currency":"ARS"
   },
   "convertedAmount":{
      "value":100.00,
      "tax":0.00,
      "purchaseValue":100.00,
      "currency":"ARS"
   },
   "paymentMethodFee":[
      {
         "paymentMethod":"VISA",
         "pricingFees":[
            {
               "installments":"1",
               "pricing":{
                  "payerDetail":{
                     "commission":0.00,
                     "interests":0.00,
                     "total":0.00
                  },
                  "merchantDetail":{
                     "commission":6.96,
                     "interests":0.00,
                     "total":6.96
                  },
                  "totalValue":100.00,
                  "totalIncomeTransaction":93.04,
                  "additionalInfo":{
                     "tea":"0%",
                     "cft":"0%"
                  }
               }
            },
            {
               "installments":"3",
               "pricing":{
                  "payerDetail":{
                     "commission":0.00,
                     "interests":11.90,
                     "total":11.90
                  },
                  "merchantDetail":{
                     "commission":6.96,
                     "interests":0.00,
                     "total":6.96
                  },
                  "totalValue":111.90
                  "totalIncomeTransaction":93.04,
                  "additionalInfo":{
                     "tea":"75.72%",
                     "cft":"97.38%"
                  }                    
               },
               "promos":[
                  {
                     "id":345,
                     "pricing":{
                        "payerDetail":{
                           "commission":0.00,
                           "interests":0.00,
                           "total":0.00
                        },
                        "merchantDetail":{
                           "commission":6.96,
                           "interests":0.00,
                           "total":6.96
                        },
                        "totalValue":100.00
                        "totalIncomeTransaction":93.04,
                        "additionalInfo":{
                           "tea":"0%",
                           "cft":"0%"
                        }                          
                     },
                     "priority":10
                  }
               ]
            }
         ]
      }
   ],
   "promotions":[
      {
         "id":345,
         "title":"Prueba subfranquicia",
         "termsAndConditions":"Prueba para ahorro de subfranquicia",
         "iin":[
            "412345",
            "412346",
            "412347"
         ],             
         "paymentMethodMain":"VISA",
         "subFranchise":"PROVENCRED",
         "startDate":"2017-03-03 08:52:00",
         "endDate":"2017-07-01 00:00:00",
         "days":[
            "SUNDAY",
            "MONDAY",
            "TUESDAY",
            "WEDNESDAY",
            "THURSDAY",
            "FRIDAY",
            "SATURDAY"
         ],
         "priority":10,
         "type":"MSI"
      }
   ]
}
~~~
{: title="Respuesta JSON" }
~~~ xml
<?xml version="1.0" encoding="UTF-8"?>
<consultPriceListResponse xmlns:atom="http://www.w3.org/2005/Atom" xmlns:ns3="http://wadl.dev.java.net/2009/02">
   <amount>
      <value>100.00</value>
      <tax>0</tax>
      <purchaseValue>100.00</purchaseValue>
      <currency>ARS</currency>
   </amount>
   <convertedAmount>
      <value>100.00</value>
      <tax>0.00</tax>
      <purchaseValue>100.00</purchaseValue>
      <currency>ARS</currency>
   </convertedAmount>
   <promotions>
      <promotion id="321" title="Prueba promoción bines">
         <priority>10</priority>
         <type>MSI</type>
         <paymentMethod>VISA</paymentMethod>
         <termsAndConditions>Prueba bines</termsAndConditions>
         <startDate>2017-03-03 08:52:00</startDate>
         <endDate>2017-07-01 00:00:00</endDate>
         <days>
            <day>SUNDAY</day>
            <day>MONDAY</day>
            <day>TUESDAY</day>
            <day>WEDNESDAY</day>
            <day>THURSDAY</day>
            <day>FRIDAY</day>
            <day>SATURDAY</day>
         </days>
         <iins>
            <iin>412345</iin>
            <iin>412346</iin>
            <iin>412347</iin>
         </iins>
      </promotion>
   </promotions>
   <paymentMethodFee>
      <paymentMethodFeeDetail paymentMethod="VISA">
        <pricingFees>
            <fee installments="1">
               <pricing>
                  <payerDetail>
                     <commission>0.00</commission>
                     <interests>0.00</interests>
                     <total>0.00</total>
                  </payerDetail>
                  <merchantDetail>
                     <commission>6.96</commission>
                     <interests>0.00</interests>
                     <total>6.96</total>
                  </merchantDetail>
                  <totalValue>100.00</totalValue>
                  <totalIncomeTransaction>93.04</totalIncomeTransaction>
                  <additionalInfo>
                     <entry>
                        <key>tea</key>
                        <value>0%</value>
                     </entry>
                     <entry>
                        <key>cft</key>
                        <value>0%</value>
                     </entry>
                  </additionalInfo>    
               </pricing>
            </fee>
            <fee installments="3">
               <pricing>
                  <payerDetail>
                     <commission>0.00</commission>
                     <interests>11.90</interests>
                     <total>11.90</total>
                  </payerDetail>
                  <merchantDetail>
                     <commission>6.96</commission>
                     <interests>0.00</interests>
                     <total>6.96</total>
                  </merchantDetail>
                  <totalValue>111.90</totalValue>
                  <totalIncomeTransaction>93.04</totalIncomeTransaction>
                  <additionalInfo>
                     <entry>
                        <key>tea</key>
                        <value>75.72%</value>
                     </entry>
                     <entry>
                        <key>cft</key>
                        <value>97.38%</value>
                     </entry>
                  </additionalInfo>    
               </pricing>
               <promos>
                  <promo id="321">
                     <priority>10</priority>
                     <pricing>
                        <payerDetail>
                           <commission>0.00</commission>
                           <interests>0.00</interests>
                           <total>0.00</total>
                        </payerDetail>
                        <merchantDetail>
                           <commission>6.96</commission>
                           <interests>0.00</interests>
                           <total>6.96</total>
                        </merchantDetail>
                        <totalValue>100.00</totalValue>
                        <totalIncomeTransaction>93.04</totalIncomeTransaction>
                        <additionalInfo>
                           <entry>
                              <key>tea</key>
                              <value>0%</value>
                           </entry>
                           <entry>
                              <key>cft</key>
                              <value>0%</value>
                           </entry>
                        </additionalInfo>    
                     </pricing>
                  </promo>
               </promos>
            </fee>
         </pricingFees>
      </paymentMethodFeeDetail>
   </paymentMethodFee>
</consultPriceListResponse>
~~~
{: title="Respuesta XML" }
