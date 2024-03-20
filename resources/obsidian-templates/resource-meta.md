---
title: <% tp.system.prompt("Title?", tp.file.title) %>
url: <% tp.system.prompt("URL?", "unknown") %>
ai-source: <% tp.system.prompt("AI Source?", "unknown") %>
ai-model: <% tp.system.prompt("AI Model?", "unknown") %>

creation date: <% tp.file.creation_date("YYYY-MM-dd") %>
modification date: <% tp.file.last_modified_date("YYYY-MM-dd_HHmmss") %>
tags:
	- resource/web
---
