---
title: /books/:id
position: 1.4
type: put
description: Update Book
---

title
: The title for the book

score
: The book's score between 0 and 5

Update an existing book in your collection.

~~~ javascript
$.ajax({
  "url": "http://api.myapp.com/books/3",
  "type": "PUT",
  "data": {
    "token": "YOUR_APP_KEY",
    "score": 5.0,
    "title": "The Book Stealer"
  },
  "success": function(data) {
    alert(data);
  }
});
~~~
{: title="jQuery" }
