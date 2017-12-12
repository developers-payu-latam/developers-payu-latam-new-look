---
title: /books
position: 1.0
type: get
description: List all books
---
offset
: Offset the results by this amount

limit
: Limit the number of books returned

This call will return a maximum of 100 books
{: .info }

Lists all the photos you have access to. You can paginate by using the parameters listed above.

~~~ javascript
$.get("http://api.myapp.com/books/", { "token": "YOUR_APP_KEY"}, function(data) {
  alert(data);
});
~~~
{: title="jq" }

~~~ python
r = requests.get("http://api.myapp.com/books/", token="YOUR_APP_KEY")
print r.text
~~~
{: title="Fock this shit" }

~~~ javascript
var request = require("request");
request("http://api.myapp.com/books?token=YOUR_APP_KEY", function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
  }
});
~~~
{: title="Node.js" }

~~~ bash
curl http://sampleapi.readme.com/orders?key=YOUR_APP_KEY
~~~
{: title="Curl" }
