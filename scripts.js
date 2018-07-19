$(document).ready(function(){
	//default <pre> element added by Chrome if the response header content-type is: application/json;charset=utf-8
	//In this case the <pre> element is hardcoded to emulate.
	
	$("body > pre").addClass("original");
	$("body").append( "<div class='formatted'></div>");
	
	//get the original and re-parse as JSON
	var json = $.parseJSON( $(".original").text() );
	
	//re enconded as string with 4 spaces TAB.
	$(".formatted").text( JSON.stringify( json, undefined, 4) );
	
	//sending the selector only (not the DOM $element)
	init( ".formatted" );
	
});

function init(ele){
	$(ele).html( syntaxHighlight( $(ele).text() ) ).addClass("json-formatted");
	
	$(ele).find(".minimize-me").click(function(){
		$(this).parent("ul").toggleClass("minimized");
	});
	
	copySnippetInit( ele );
}
function copySnippetInit(ele){
	//attach event
	$(ele + " .key").click(function(){
		//reset active nodes
		$(ele + " .active").removeClass("active");
		
		//activate nodes
		$(this).parents("li").addClass("active");
		
		var snippet = generateSnippet( ele );
		
		$(this).attr("data-clipboard-text", snippet);
		copy( snippet );

	});
	
	//copy value
	$(ele + " .number," + ele + " .string").click(function(){
		console.log($(this).text() );
		copy( String( $(this).text() ) );
		
		$(this).attr("data-clipboard-text", $(this).text() );
		
	});
}

function copy(string){
	var clipboard = new ClipboardJS(".key, .number, .string", {
		text: function() {
			return string;
		}
	});
}

function generateSnippet(ele){
	var snippet = "{{ ";
	var separator = "";
	
	var option = "for";
	
	
	$(ele + " .active").each(function(index,value){
		//index == number of iterations
		
		//ul parent
		$parent = $(this).closest("ul");
		
		if( $parent.hasClass("array") ){
			if (index > 0){
				separator = ".";
			}
		
			snippet += separator + $(this).find("> .key").text();
		} else if ( $parent.hasClass("list") ){
			snippet += "[" + $parent.find("> .active").index() + "]";
		}
		
	});
	
	snippet += " }}";
	
	snippet = snippet.replace(/"/g,"").replace(/:/g,"");
	
	//console.log(snippet);
	
	return snippet;
}

function syntaxHighlight(json) {
	//if I get the val from the DOM need to replace spaces and line breaks too

    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    json = json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '" data-clipboard-text="">' + match + '</span>';
    });
	
	//add separator between each 8 spaces
	json = json.replace( /        +/g, '    <span class="separator"></span>    ');
	
	//match new lines
	json = json.replace( /\n+/g, '\n<li>');
	
	//match end lines
	json = json.replace( /\r+/g, '</li>\r');
	
	//open & close container for each array
	/*look for { not followed by } same for [ ] but scapped with \ */
	json = json
			.replace( /{(?!})/g, '<ul class="array"><li class="minimize-me"></li>{')
			.replace( /\[(?!])/g, '<ul class="list"><li class="minimize-me"></li>[');
			/* the two first replaces close elements if they are not prev. by its opener,
			so they ignore {}
			
			the next two look for }, or ], and close the ul after the comma.
			
			the last two, for special cases where there are two commas (end of array at the end of a list etc.)
			
			*/
	json = json
			.replace( /(?<!{)}(?!,)/g, '}</ul>')
			.replace( /(?<!\[)\](?!,)/g, ']</ul>')
			
			.replace( /(?<!{)},/g, '},</ul>')
			.replace( /(?<!\[)\],/g, '],</ul>')

			.replace( /(?<!{)},,/g, '},<br>,</ul>')
			.replace( /(?<!\[)\],,/g, '],<br>,</ul>')
	
	return json;
}