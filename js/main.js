window.onload = function() {
	
	CBUITextStrip.Initialize({
                            charCountLimit: 220,                        // required
                            textToAppend: '....',                       // required
                            elementToTrim: $('.dlItem .content')        // required
                        });
	
}
