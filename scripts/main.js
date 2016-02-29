// <div id="container">
// 		<div class="keycode"></div>
// 		<div class="charcode"></div>
// 	</div>

var $container = $('#container'),
		cursive_setting = {
			on: false,
			toggle: function(){
				if (this.on) {
					this.on = false;
				} else if(!this.on) {
					this.on = true;
				}
			}
		};

//display keycode - keypress codes
// a = 97
// A = 65

var translator = {
	13: "return",
	8: "delete",
	32: "space",
	97: "a",
	65: "a-cap",
	98: "b",
	66: "b-cap",
	99: "c",
	67: "c-cap",
	100:"d",
	68: "d-cap",
	101:"e",
	69: "e-cap",
	102:"f",
	70: "f-cap",
	103:"g",
	71: "g-cap",
	104:"h",
	72: "h-cap",
	105:"i",
	73: "i-cap",
	106:"j",
	74: "j-cap",
	107: "k",
	75: "k-cap",
	108: "l",
	76: "l-cap",
	109: "m",
	77: "m-cap",
	110: "n",
	78: "n-cap",
	111:"o",
	79: "o-cap",
	112: "p",
	80: "p-cap",
	113:"q",
	81: "q-cap",
	114:"r",
	82: "r-cap",
	115:"s",
	83: "s-cap",
	116:"t",
	84: "t-cap",
	117:"u",
	85: "u-cap",
	118:"v",
	86: "v-cap",
	119:"w",
	87: "w-cap",
	120:"x",
	88: "x-cap",
	121:"y",
	89: "y-cap",
	122:"z",
	90: "z-cap",
	44: "comma",
	60: "less_than",
	62: "greater_than",
	47: "forward_slash",
	92: "back_slash",
	124: "pipe",
	45: "dash",
	46: "period",
	63: "question_mark",
	33: "exclamation_point",
	64: "at",
	35: "number_hash",
	36: "dollar",
	37: "percentage",
	38: "ampersand",
	42: "asterisk",
	40: "parenthesis_left",
	41: "parenthesis_right",
	95: "underscore",
	61: "equals",
	43: "plus",
	48: "zero",
	49: "one",
	50: "two",
	51: "three",
	52: "four",
	53: "five",
	54: "six",
	55: "seven",
	56: "eight",
	57: "nine",
	91: "bracket_left",
	93: "bracket_right",
	123:"curly_bracket_left",
	125:"curly_bracket_right",
	39: "single_quote",
	34: "double_quote",
	58: "colon",
	59: "semi-colon"
};

var cursive_translator = {
	13: "return",
	8: "delete",
	32: "space",
	97: "a-cursive",
	65: "a-cap-cursive",
	98: "b-cursive",
	66: "b-cap-cursive",
	99: "c-cursive",
	67: "c-cap-cursive",
	100:"d-cursive",
	68: "d-cap-cursive",
	101:"e-cursive",
	69: "e-cap-cursive",
	102:"f-cursive",
	70: "f-cap-cursive",
	103:"g-cursive",
	71: "g-cap-cursive",
	104:"h-cursive",
	72: "h-cap-cursive",
	105:"i-cursive",
	73: "i-cap-cursive",
	106:"j-cursive",
	74: "j-cap-cursive",
	107: "k-cursive",
	75: "k-cap-cursive",
	108: "l-cursive",
	76: "l-cap-cursive",
	109: "m-cursive",
	77: "m-cap-cursive",
	110: "n-cursive",
	78: "n-cap-cursive",
	111:"o-cursive",
	79: "o-cap-cursive",
	112: "p-cursive",
	80: "p-cap-cursive",
	113:"q-cursive",
	81: "q-cap-cursive",
	114:"r-cursive",
	82: "r-cap-cursive",
	115:"s-cursive",
	83: "s-cap-cursive",
	116:"t-cursive",
	84: "t-cap-cursive",
	117:"u-cursive",
	85: "u-cap-cursive",
	118:"v-cursive",
	86: "v-cap-cursive",
	119:"w-cursive",
	87: "w-cap-cursive",
	120:"x-cursive",
	88: "x-cap-cursive",
	121:"y-cursive",
	89: "y-cap-cursive",
	122:"z-cursive",
	90: "z-cap-cursive",
	44: "comma",
	60: "less_than",
	62: "greater_than",
	47: "forward_slash",
	92: "back_slash",
	124: "pipe",
	45: "dash",
	46: "period",
	63: "question_mark",
	33: "exclamation_point",
	64: "at",
	35: "number_hash",
	36: "dollar",
	37: "percentage",
	38: "ampersand",
	42: "asterisk",
	40: "parenthesis_left",
	41: "parenthesis_right",
	95: "underscore",
	61: "equals",
	43: "plus",
	48: "zero",
	49: "one",
	50: "two",
	51: "three",
	52: "four",
	53: "five",
	54: "six",
	55: "seven",
	56: "eight",
	57: "nine",
	91: "bracket_left",
	93: "bracket_right",
	123:"curly_bracket_left",
	125:"curly_bracket_right",
	39: "single_quote",
	34: "double_quote",
	58: "colon",
	59: "semi-colon"
};

// radio button toggle cursive_setting on an off
$('input:radio[name="font-style"]').change(
    function(){
        if ($(this).is(':checked') && $(this).val() == 'cursive') {
            cursive_setting.on = true;
        } else if($(this).is(':checked') && $(this).val() === 'block' ) {
        	cursive_setting.on = false;
        }
    });

//Keypress keyboard function
$(document).keypress(function(e){

	var $row = $('.row').last();
	var code = e.keyCode || e.which;


		$('.keycode').html("<p>Keycode: " + code + "</p>");
		$('.charcode').html("<p>Charcode: " + code + "</p>");
	//use code to check for and grab class value
	if(cursive_setting.on === false){
		var letterClass = translator[code];
		// add appropriate class to new node
		if(code){
			if (code !== 8 && code !== 13) {
			var node = $('<div></div>').addClass("letter");
			$(node).addClass(letterClass);
			// append new node on
			$($row).append(node);
			rowWidthCheck();
			insertBlinker();
			// $('.keycode').html("<p>Keycode: " + code + "</p>");
			// $('.charcode').html("<p>Charcode: " + code + "</p>");
			}
		}
	} else {
		var letterClass = cursive_translator[code];
		// add appropriate class to new node
		if(code){
			if (code !== 8 && code !== 13) {
			var node = $('<div></div>').addClass("letter");
			$(node).addClass(letterClass + " cursive");
			// append new node on
			$($row).append(node);
			rowWidthCheck();
			insertBlinker();

			// $('.keycode').html("<p>Keycode: " + code + "</p>");
			// $('.charcode').html("<p>Charcode: " + code + "</p>");
			}
		}
	}
});

// keydown events for keys that don't spit out a keypress value
// specifically for backspace, return and space keys
$(document).keydown(function(e){
	var $row = $('.row:last-child');
	var code = e.keyCode || e.which;
	// delete is 8
	// space is 32
	// enter / return is 13
	if(code === 32) {

	} else if (code === 8 ) {
		
	//use code to check for and grab class value
	var letterClass = translator[code];
	var lastLetterNode;
	// add appropriate class to new node
	var nodes = $('.row:last-child .letter');
	for (var i = 0; i < nodes.length; i++) {
		lastLetterNode = nodes[i];
	};
			if(lastLetterNode) {
				$(lastLetterNode).remove();
			} else {
				var rows = $('.row');
				var lastRow = $('.row:last-child');
				if(rows.length > 1){
					$(lastRow).remove();
				}
			}
		
	} else if (code === 13 ) {
	//use code to check for and grab class value
	var letterClass = translator[code];
	var node = $('<div></div>').addClass("letter");
			$(node).addClass(letterClass);
			// append new node on
			$($row).append(node);
	// add appropriate class to new node
	var newRow = $('<div></div>').addClass('row');
	if(cursive_setting.on) {
		$(newRow).addClass("cursive-row");
	}
	// append new node on
	$($container).append(newRow);
	
		
	}
insertBlinker();
centerText();
});



var rowWidthCheck = function() {
	var windowWidth = $(window).width();
	var nodeWidth = 0;
	var row = $('.row:last-child');
	var rowWidth = $(row).width();

	var nodes = $('.row:last-child .letter');
	for (var i = 0; i < nodes.length; i++) {
		if( $(nodes[i]).hasClass("cursive") ) {
		nodeWidth += $(nodes[i]).width() - 9;
		} else {
			nodeWidth += $(nodes[i]).width();
		}
	}

if (nodeWidth > (windowWidth - 40) ) {
	var newRow = $('<div></div>').addClass('row');
	if(cursive_setting.on) {
		$(newRow).addClass("cursive-row");
	}
	// append new node on
	$($container).append(newRow);

}

}

var insertBlinker = function blink(){
	var letterNode;
	var rows = $('.row');
	$(rows).removeClass('active');
	var activeRow = $('.row:last-child');
	$(activeRow).addClass('active');
	var blinker = $('.blinking-cursor');
	var activeRowNode = $('.row:last-child .letter');
	//grab last item
	for (var i = 0; i < activeRowNode.length; i++) {
		letterNode = activeRowNode[i];
	};
	
	//remove any other blinkers first
	
		$(blinker).remove();
		blinker = $('<span class="blinking-cursor">=</span>');
	
	// add blinker at the end of the last row
	if(letterNode) {
		$(letterNode).after(blinker);
	} else {
		$(activeRow).append(blinker);
	} 
}

var centerText = function(){
	var container = $('#container')[0];
	var containerHeight = container.clientHeight;
	var contentHeight = container.scrollHeight;

	container.scrollTop = contentHeight - containerHeight;
}

var printContent = function(){
	var display = $('textarea');
	$(display).val('');
	var page = [];
	var string = "";
	var rows = $('.row');
	for (var i = 0; i < rows.length; i++) {
		for(var j = 0; j < rows[i].children.length; j++) {
			var classList = $(rows[i].children[j]).attr('class').split(/\s+/);
			$.each(classList, function(index, item){
				if(letters[item]) {
					page.push(letters[item]);
				}
			});
		}
	}
	for (var i = 0; i < page.length; i++) {
		string += page[i];
	};
	$(display).val(string);
}

$('.button').on('click', function(e){
	printContent();
});

var letters = {
		"a": "a",
		"a-cap": "A",
		"a-cursive": "a",
		"a-cap-cursive": "A",
		"b": "b",
		"b-cap": "B",
		"b-cursive": "b",
		"b-cap-cursive": "B",
		"c": "c",
		"c-cap": "C",
		"c-cursive": "c",
		"c-cap-cursive": "C",
		"d": "d",
		"d-cap": "D",
		"d-cursive": "d",
		"d-cap-cursive": "D",
		"e": "e",
		"e-cap": "E",
		"e-cursive": "e",
		"e-cap-cursive": "E",
		"f": "f",
		"f-cap": "F",
		"f-cursive": "f",
		"f-cap-cursive": "F",
		"g": "g",
		"g-cap": "G",
		"g-cursive": "g",
		"g-cap-cursive": "G",
		"h": "h",
		"h-cap": "H",
		"h-cursive": "h",
		"h-cap-cursive": "H",
		"i": "i",
		"i-cap": "I",
		"i-cursive": "i",
		"i-cap-cursive": "I",
		"j": "j",
		"j-cap": "J",
		"j-cursive": "j",
		"j-cap-cursive": "J",
		"k": "k",
		"k-cap": "K",
		"k-cursive": "k",
		"k-cap-cursive": "K",
		"l": "l",
		"l-cap": "L",
		"l-cursive": "l",
		"l-cap-cursive": "L",
		"m": "m",
		"m-cap": "M",
		"m-cursive": "m",
		"m-cap-cursive": "M",
		"n": "n",
		"n-cap": "N",
		"n-cursive": "n",
		"n-cap-cursive": "N",
		"o": "o",
		"o-cap": "O",
		"o-cursive": "o",
		"o-cap-cursive": "O",
		"p": "p",
		"p-cap": "P",
		"p-cursive": "p",
		"p-cap-cursive": "P",
		"q": "q",
		"q-cap": "Q",
		"q-cursive": "q",
		"q-cap-cursive": "Q",
		"r": "r",
		"r-cap": "R",
		"r-cursive": "r",
		"r-cap-cursive": "R",
		"s": "s",
		"s-cap": "S",
		"s-cursive": "s",
		"s-cap-cursive": "S",
		"t": "t",
		"t-cap": "T",
		"t-cursive": "t",
		"t-cap-cursive": "T",
		"u": "u",
		"u-cap": "U",
		"u-cursive": "u",
		"u-cap-cursive": "U",
		"v": "v",
		"v-cap": "V",
		"v-cursive": "v",
		"v-cap-cursive": "V",
		"w": "w",
		"w-cap": "W",
		"w-cursive": "w",
		"w-cap-cursive": "W",
		"x": "x",
		"x-cap": "X",
		"x-cursive": "x",
		"x-cap-cursive": "X",
		"y": "y",
		"y-cap": "Y",
		"y-cursive": "y",
		"y-cap-cursive": "Y",
		"z": "z",
		"z-cap": "Z",
		"z-cursive": "z",
		"z-cap-cursive": "Z",
		"comma": ",",
		"less_than":"<",
		"greater_than":">",
		"forward_slash":"/",
		"back_slash":"\\",
		"pipe":"|",
		"dash":"-",
		"period":".",
		"question_mark":"?",
		"exclamation_point":"!",
		"at":"@",
		"number_hash":"#",
		"dollar":"$",
		"percentage":"%",
		"ampersand":"&",
		"asterisk":"*",
		"parenthesis_left":"(",
		"parenthesis_right":")",
		"underscore":"_",
		"equals":"=",
		"plus":"+",
		"zero":"0",
		"one":"1",
		"two":"2",
		"three":"3",
		"four":"4",
		"five":"5",
		"six":"6",
		"seven":"7",
		"eight":"8",
		"nine":"9",
		"bracket_left":"[",
		"bracket_right":"]",
		"curly_bracket_left":"{",
		"curly_bracket_right":"}",
		"single_quote":"'",
		"double_quote":"\"",
		"colon":":",
		"semi-colon":";",
		"space":" ",
		"return":"\n"
	};







