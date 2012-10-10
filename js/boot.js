// Load jQuery
LazyLoad.js("http://code.jquery.com/jquery-latest.js");

LazyLoad.js("vendor/marked.js", function () {
    // Setup Marked
    marked.setOptions({
        gfm: true,
        pedantic: false,
        sanitize: true,
    });
});

// Load rainbow + languages
LazyLoad.js("vendor/rainbow/rainbow.js");

var base = "vendor/rainbow/language/"
var languages = [base + "c.js",
                base + "coffeescript.js",
                base + "css.js",
                base + "generic.js",
                base + "go.js",
                base + "html.js",
                base + "java.js",
                base + "javascript.js",
                base + "lua.js",
                base + "php.js",
                base + "python.js",
                base + "r.js",
                base + "ruby.js",
                base + "scheme.js",
                base + "shell.js",
                base + "smalltalk.js"];

LazyLoad.js(languages);

// Load codemirror + modes
LazyLoad.js("vendor/codemirror/lib/codemirror.js");
LazyLoad.js("vendor/codemirror/lib/util/overlay.js");

var base = "vendor/codemirror/mode/"
var modes = [base + "clike/clike.js",
            base + "coffeescript/coffeescript.js",
            base + "css/css.js",
            base + "diff/diff.js",
            base + "gfm/gfm.js",
            base + "go/go.js",
            base + "htmlembedded/htmlembedded.js",				
            base + "htmlmixed/htmlmixed.js",
            base + "javascript/javascript.js",
            base + "lua/lua.js",
            base + "markdown/markdown.js",
            base + "php/php.js",
            base + "python/python.js",
            base + "r/r.js",
            base + "ruby/ruby.js",
            base + "scheme/scheme.js",
            base + "shell/shell.js",
            base + "smalltalk/smalltalk.js",
            base + "xml/xml.js"];

LazyLoad.js(modes);

// Load application
LazyLoad.js("js/application.js");



/**************************************
*
*          CSS being loaded
*
**************************************/

LazyLoad.css("vendor/bootstrap/css/bootstrap.min.css");
LazyLoad.css("vendor/bootstrap/css/bootstrap-responsive.min.css");

LazyLoad.css("vendor/rainbow/themes/github.css");

LazyLoad.css("vendor/codemirror/lib/codemirror.css");

LazyLoad.css("css/codemirror/theme/bubblestorm.css");

LazyLoad.css("css/application.css");
