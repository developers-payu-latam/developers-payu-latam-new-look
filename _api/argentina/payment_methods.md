---
title: Métodos de pago
position: 3.1.1
---

1 Metodos de pago Argentina



~~~ javascript
$.get("http://api.myapp.com/books/", { "token": "YOUR_APP_KEY"}, function(data) {
  alert(data);
});
~~~
{: title="jQuery" }
~~~ python
r = requests.get("http://api.myapp.com/books/", token="YOUR_APP_KEY")
print r.text
~~~
{: title="Python" }
~~~ javascript
var request = require("request");
request("http://api.myapp.com/books?token=YOUR_APP_KEY", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
~~~
{: title="Node.js" }
