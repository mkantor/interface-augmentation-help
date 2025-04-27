import jQuery from 'jquery';
type JQueryStaticOriginal = JQueryStatic;
import terminal from 'jquery.terminal';


function foo(jQuery: JQueryStaticOriginal) {
    return jQuery;
}

foo(jQuery);