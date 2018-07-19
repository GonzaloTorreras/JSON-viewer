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

## Donations:
Open source project to improve the usability with APIs, feel free to donate to keep it up date so I can improve it and add new functionalities to the project :)
[Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KX6SJ8UE3Y7UA)
Thanks!

## License:
MIT License
Copyright 2018 Gonzalo Torreras

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
