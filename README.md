# JSON-viewer
I built this JSON viewer specially designed for HS developers.
It have features like: 
- minizing nodes (arrays or lists).
- Generate and auto copy snippet of the clicked element key or value. Jinja/HubL READY.
- visual tweakings to see it confortably.
- If you copy the whole text,  it will be exactly the response without any text/icon injected on the pure text (all managed with pure CSS/JS).

So nice, isn't it?

## Use:
You need jQuery and clipboard.
You can copy/paste the `script.js` file and cleanup the `$(document).ready` function.
Call the `init( ".selector" );` with the selector where you want to format the JSON (not the DOM `$(".element")` element).

## Recomendations:
If your element has the JSON without indent spaces (like when is inserted by Chrome in the `<pre>` element.
Probably you need to read the text in the element convert back to JSON with the tab index you want and then convert back as an string and insert in the element again.
Thats is done in the `$(document).ready` function as example.

