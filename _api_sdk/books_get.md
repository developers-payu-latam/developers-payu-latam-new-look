---
title: /books/:id
position: 1.3
type: get
description: Get Book
---

Returns a specific book from your collection

<details>
  <summary>code hidden</summary>
  <p markdown="1">
```javascript
$.get("http://api.myapp.com/books/3", {
  token: "YOUR_APP_KEY",
}, function(data) {
  alert(data);
});
```
</p></details>
