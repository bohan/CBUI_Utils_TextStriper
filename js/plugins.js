// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.
var CBUITextStrip = {

                            stripOpts: {
                                charCountLimit: 0,        // default character limit. can be changed at runtime 
                                textToAppend: '',         // default text to append to the striped text. can be changed at runtime
                                elementToTrim: $('')      // default element to trim/strip
                            },

                            cacheListContents: new Array(),

                            numberBaseListContents: function () {
                                this.stripOpts.elementToTrim.each(function (i, ele) {
                                    $(ele).attr('id', i);
                                });
                            },

                            storeListFullContents: function () {
                                this.stripOpts.elementToTrim.each(function (i, ele) {
                                    CBUITextStrip.cacheListContents.push($(ele).clone());
                                });
                                if (this.cacheListContents.length !== 0) {
                                    return true;
                                } else { return false; }
                            },

                            stripListText: function (limit) {
                                limit = this.stripOpts.charCountLimit;
                                if (this.storeListFullContents) {
                                    this.stripOpts.elementToTrim.each(function (i, ele) {
                                        $(ele).text($(ele).text().trim().toString().substring(0, limit) + CBUITextStrip.stripOpts.textToAppend);
                                    });
                                }
                            },

                            getFullListContent: function (i) {
                                return $(this.cacheListContents[i]).text();
                            },

                            Initialize: function (opts) {
                                this.stripOpts = opts;
                                this.numberBaseListContents();
                                this.storeListFullContents();
                                this.stripListText();
                            }
                        };

                        