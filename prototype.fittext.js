(function() {
	
	Element.addMethods({
	  fitText: function(element, kompressor) {

			var origFontSize = parseFloat(element.getStyle('font-size'));   // init the font sizes
			var compressor = kompressor || 1;                        // set the compressor

	    // Resizer() resizes items based on the object width divided by the compressor * 10
			var fontSize = Math.min(parseFloat(element.getStyle('width')) / (compressor*10), origFontSize);
      fontSize = fontSize.toString() + 'px';
      element.setStyle({'font-size':fontSize});

			return element;

	  }
	});
	
}());
