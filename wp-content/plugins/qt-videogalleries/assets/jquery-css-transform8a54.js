(function($){function getTransformProperty(element)
{var properties=['transform','WebkitTransform','msTransform','MozTransform','OTransform'];var p;while(p=properties.shift())
{if(typeof element.style[p]!='undefined')
{return p;}}
return 'transform';}
var _propsObj=null;var proxied=$.fn.css;$.fn.css=function(arg,val)
{if(_propsObj===null)
{if(typeof $.cssProps!='undefined')
{_propsObj=$.cssProps;}
else if(typeof $.props!='undefined')
{_propsObj=$.props;}
else
{_propsObj={}}}
if
(typeof _propsObj['transform']=='undefined'&&(arg=='transform'||(typeof arg=='object'&&typeof arg['transform']!='undefined')))
{_propsObj['transform']=getTransformProperty(this.get(0));}
if(_propsObj['transform']!='transform')
{if(arg=='transform')
{arg=_propsObj['transform'];if(typeof val=='undefined'&&jQuery.style)
{return jQuery.style(this.get(0),arg);}}
else if
(typeof arg=='object'&&typeof arg['transform']!='undefined')
{arg[_propsObj['transform']]=arg['transform'];delete arg['transform'];}}
return proxied.apply(this,arguments);};})(jQuery);