---
title: Buscar
sitemap: false
permalink: /busqueda/
---

<div class="search-page">
	<h2>Resultados de su Búsqueda</h2>

	<p><span id="search-process">Cargando</span> resultados <span id="search-query-container" style="display: none;">para "<strong id="search-query"></strong>"</span></p>
	<ul id="search-results"></ul>
</div>

<script>
	window.data = {
		{% for collection in site.collections %}
			{% for item in collection.docs %}
				{% if item.title %}
					{% unless item.excluded_in_search %}
						{% if added %},{% endif %}
						{% assign added = false %}
						"{{ item.id | slugify }}": {
							"id": "{{ item.id | slugify }}",
							"title": "{{ item.title | xml_escape }}",
							"category": "{{ collection.label | xml_escape }}",
							"description": "{{item.description | xml_escape }}",
		  				"type": "{{item.type | xml_escape}}",
							"url": "/#{{ item.id | replace: '/', '' | replace: '.', '' | xml_escape }}",
							"content": {{ item.content | strip_html | replace_regex: "[\s/\n]+"," " | strip | jsonify }}
						}
						{% assign added = true %}
					{% endunless %}
				{% endif %}
			{% endfor %}
		{% endfor %}
	};
</script>
<script src="/js/lunr.min.js"></script>
<script src="/js/search.js"></script>
