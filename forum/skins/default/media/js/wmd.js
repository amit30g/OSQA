jQuery.extend({createUploadIframe:function(b,f){var g="jUploadFrame"+b;if(window.ActiveXObject){var l=document.createElement('<iframe id="'+g+'" name="'+g+'" />');"boolean"==typeof f?l.src="javascript:false":"string"==typeof f&&(l.src=f)}else l=document.createElement("iframe"),l.id=g,l.name=g;l.style.position="absolute";l.style.top="-1000px";l.style.left="-1000px";document.body.appendChild(l);return l},createUploadForm:function(b,f){var g="jUploadForm"+b,l="jUploadFile"+b,g=$('<form  action="" method="POST" name="'+
g+'" id="'+g+'" enctype="multipart/form-data"></form>'),j=$("#"+f),h=$(j).clone();$(j).attr("id",l);$(j).before(h);$(j).appendTo(g);$(g).css("position","absolute");$(g).css("top","-1200px");$(g).css("left","-1200px");$(g).appendTo("body");return g},ajaxFileUpload:function(b){var b=jQuery.extend({},jQuery.ajaxSettings,b),f=(new Date).getTime(),g=jQuery.createUploadForm(f,b.fileElementId);jQuery.createUploadIframe(f,b.secureuri);var l="jUploadFrame"+f,f="jUploadForm"+f;b.global&&!jQuery.active++&&jQuery.event.trigger("ajaxStart");
var j=!1,h={};b.global&&jQuery.event.trigger("ajaxSend",[h,b]);var d=function(f){var d=document.getElementById(l);try{d.contentWindow?(h.responseText=d.contentWindow.document.body?d.contentWindow.document.body.innerText:null,h.responseXML=d.contentWindow.document.XMLDocument?d.contentWindow.document.XMLDocument:d.contentWindow.document):d.contentDocument&&(h.responseText=d.contentDocument.document.body?d.contentDocument.document.body.textContent||document.body.innerText:null,h.responseXML=d.contentDocument.document.XMLDocument?
d.contentDocument.document.XMLDocument:d.contentDocument.document)}catch(n){jQuery.handleError(b,h,null,n)}if(h||"timeout"==f){j=!0;var a;try{if(a="timeout"!=f?"success":"error","error"!=a){var i=jQuery.uploadHttpData(h,b.dataType);b.success&&b.success(i,a);b.global&&jQuery.event.trigger("ajaxSuccess",[h,b])}else jQuery.handleError(b,h,a)}catch(e){a="error",jQuery.handleError(b,h,a,e)}b.global&&jQuery.event.trigger("ajaxComplete",[h,b]);b.global&&!--jQuery.active&&jQuery.event.trigger("ajaxStop");
b.complete&&b.complete(h,a);jQuery(d).unbind();setTimeout(function(){try{$(d).remove(),$(g).remove()}catch(a){jQuery.handleError(b,h,null,a)}},100);h=null}};0<b.timeout&&setTimeout(function(){j||d("timeout")},b.timeout);try{g=$("#"+f),$(g).attr("action",b.url),$(g).attr("method","POST"),$(g).attr("target",l),g.encoding?g.encoding="multipart/form-data":g.enctype="multipart/form-data",$(g).submit()}catch(n){jQuery.handleError(b,h,null,n)}window.attachEvent?document.getElementById(l).attachEvent("onload",
d):document.getElementById(l).addEventListener("load",d,!1);return{abort:function(){}}},uploadHttpData:function(b,f){var g;g="xml"==f||!f?b.responseXML:b.responseText;"script"==f&&jQuery.globalEval(g);"json"==f&&eval("data = "+g);"html"==f&&jQuery("<div>").html(g).evalScripts();return g}});
function ajaxFileUpload(b){$("#loading").ajaxStart(function(){$(this).show()}).ajaxComplete(function(){$(this).hide()});$("#upload").ajaxStart(function(){$(this).hide()}).ajaxComplete(function(){$(this).show()});$.ajaxFileUpload({url:scriptUrl+"upload/",secureuri:!1,fileElementId:"file-upload",dataType:"xml",success:function(f){var g=$(f).find("file_url").text(),f=$(f).find("error").text();""!=f?alert(f):b.attr("value",appUrl+g)},error:function(b,g,l){alert(l)}});return!1}
var Attacklab=Attacklab||{};
Attacklab.wmdBase=function(){var b=top.Attacklab,f=top.document,g=top.RegExp,l=top.navigator;b.Util={};b.Position={};b.Command={};b.Global={};var j=b.Util,h=b.Position,d=b.Command,n=b.Global;n.isIE=/msie/.test(l.userAgent.toLowerCase());n.isIE_5or6=/msie 6/.test(l.userAgent.toLowerCase())||/msie 5/.test(l.userAgent.toLowerCase());n.isIE_7plus=n.isIE&&!n.isIE_5or6;n.isOpera=/opera/.test(l.userAgent.toLowerCase());n.isKonqueror=/konqueror/.test(l.userAgent.toLowerCase());var s="<p style='margin-top: 0px'>"+
$.i18n._("enter image url")+"</p>",u="<p style='margin-top: 0px'>"+$.i18n._("enter url")+"</p>",v="<div>"+$.i18n._("upload image")+'</div><input type="file" name="file-upload" id="file-upload" size="26" onchange="return ajaxFileUpload($(\'#image-url\'));"/><br><img id="loading" src="'+mediaUrl("media/images/indicator.gif")+'" style="display:none;"/>';b.PanelCollection=function(){this.buttonBar=f.getElementById("wmd-button-bar");this.preview=f.getElementById("previewer");this.output=f.getElementById("wmd-output");
this.input=f.getElementById("editor")};b.panels=void 0;b.ieCachedRange=null;b.ieRetardedClick=!1;j.isVisible=function(a){if(window.getComputedStyle)return"none"!==window.getComputedStyle(a,null).getPropertyValue("display");if(a.currentStyle)return"none"!==a.currentStyle.display};j.addEvent=function(a,i,b){a.attachEvent?a.attachEvent("on"+i,b):a.addEventListener(i,b,!1)};j.removeEvent=function(a,i,b){a.detachEvent?a.detachEvent("on"+i,b):a.removeEventListener(i,b,!1)};j.fixEolChars=function(a){a=a.replace(/\r\n/g,
"\n");return a=a.replace(/\r/g,"\n")};j.extendRegExp=function(a,i,b){if(null===i||void 0===i)i="";if(null===b||void 0===b)b="";var a=a.toString(),c="",c=a.match(/\/([gim]*)$/),c=null===c?c[0]:"",a=a.replace(/(^\/|\/[gim]*$)/g,"");return RegExp(i+a+b,c)};j.createImage=function(a){var a="images/"+a,b=f.createElement("img");b.className="wmd-button";b.src=a;return b};j.prompt=function(a,b,e){var c,k,d;void 0===b&&(b="");var g=function(a){27===(a.charCode||a.keyCode)&&p(!0)},p=function(a){j.removeEvent(f.body,
"keydown",g);var b=d.value;a?b=null:(b=b.replace("http://http://","http://"),b=b.replace("http://https://","https://"),b=b.replace("http://ftp://","ftp://"),-1===b.indexOf("http://")&&-1===b.indexOf("ftp://")&&-1===b.indexOf("https://")&&(b="http://"+b));c.parentNode.removeChild(c);k.parentNode.removeChild(k);e(b);return!1},q=function(){c=f.createElement("div");c.className="wmd-prompt-dialog";c.style.padding="10px;";c.style.position="fixed";c.style.width="400px";c.style.zIndex="1001";var m=f.createElement("div");
m.innerHTML=a;m.style.padding="5px";c.appendChild(m);m=f.createElement("form");m.onsubmit=function(){return p(!1)};style=m.style;style.padding="0";style.margin="0";style.cssFloat="left";style.width="100%";style.textAlign="center";style.position="relative";c.appendChild(m);d=f.createElement("input");d.id="image-url";d.type="text";d.value=b;style=d.style;style.display="block";style.width="80%";style.marginLeft=style.marginRight="auto";m.appendChild(d);var e=f.createElement("div");e.innerHTML=v;e.style.padding=
"5px";m.appendChild(e);e=f.createElement("input");e.type="button";e.onclick=function(){return p(!1)};e.value="OK";style=e.style;style.margin="10px";style.display="inline";style.width="7em";var k=f.createElement("input");k.type="button";k.onclick=function(){return p(!0)};k.value="Cancel";style=k.style;style.margin="10px";style.display="inline";style.width="7em";/mac/.test(l.platform.toLowerCase())?(m.appendChild(k),m.appendChild(e)):(m.appendChild(e),m.appendChild(k));j.addEvent(f.body,"keydown",g);
c.style.top="50%";c.style.left="50%";c.style.display="block";n.isIE_5or6&&(c.style.position="absolute",c.style.top=f.documentElement.scrollTop+200+"px",c.style.left="50%");f.body.appendChild(c);c.style.marginTop=-(h.getHeight(c)/2)+"px";c.style.marginLeft=-(h.getWidth(c)/2)+"px"};(function(){k=f.createElement("div");k.className="wmd-prompt-background";style=k.style;style.position="absolute";style.top="0";style.zIndex="1000";n.isKonqueror?style.backgroundColor="transparent":n.isIE?style.filter="alpha(opacity=50)":
style.opacity="0.5";var a=h.getPageSize();style.height=a[1]+"px";n.isIE?(style.left=f.documentElement.scrollLeft,style.width=f.documentElement.clientWidth):(style.left="0",style.width="100%");f.body.appendChild(k)})();top.setTimeout(function(){q();var a=b.length;if(void 0!==d.selectionStart)d.selectionStart=0,d.selectionEnd=a;else if(d.createTextRange){var e=d.createTextRange();e.collapse(!1);e.moveStart("character",-a);e.moveEnd("character",a);e.select()}d.focus()},0)};h.getTop=function(a,b){var e=
a.offsetTop;if(!b)for(;a=a.offsetParent;)e+=a.offsetTop;return e};h.getHeight=function(a){return a.offsetHeight||a.scrollHeight};h.getWidth=function(a){return a.offsetWidth||a.scrollWidth};h.getPageSize=function(){var a,b,e,c;self.innerHeight&&self.scrollMaxY?(a=f.body.scrollWidth,b=self.innerHeight+self.scrollMaxY):f.body.scrollHeight>f.body.offsetHeight?(a=f.body.scrollWidth,b=f.body.scrollHeight):(a=f.body.offsetWidth,b=f.body.offsetHeight);self.innerHeight?(e=self.innerWidth,c=self.innerHeight):
f.documentElement&&f.documentElement.clientHeight?(e=f.documentElement.clientWidth,c=f.documentElement.clientHeight):f.body&&(e=f.body.clientWidth,c=f.body.clientHeight);a=Math.max(a,e);b=Math.max(b,c);return[a,b,e,c]};b.inputPoller=function(a,i){var e=this,c=b.panels.input,k,d,f,g;this.tick=function(){if(j.isVisible(c)){if(c.selectionStart||0===c.selectionStart){var a=c.selectionStart,b=c.selectionEnd;if(a!=k||b!=d)if(k=a,d=b,f!=c.value)return f=c.value,!0}return!1}};this.destroy=function(){top.clearInterval(g)};
g=top.setInterval(function(){j.isVisible(c)&&e.tick()&&a()},i)};b.undoManager=function(a){var i=this,e=[],c=0,k="none",d,f,g,h,m=function(a,b){k!=a&&(k=a,b||r());!n.isIE||"moving"!=k?g=top.setTimeout(o,1):h=null},o=function(){h=new b.TextareaState;f.tick();g=void 0};this.setCommandMode=function(){k="command";r();g=top.setTimeout(o,0)};this.canUndo=function(){return 1<c};this.canRedo=function(){return e[c+1]?!0:!1};this.undo=function(){i.canUndo()&&(d?(d.restore(),d=null):(e[c]=new b.TextareaState,
e[--c].restore(),a&&a()));k="none";b.panels.input.focus();o()};this.redo=function(){i.canRedo()&&(e[++c].restore(),a&&a());k="none";b.panels.input.focus();o()};var r=function(){var m=h||new b.TextareaState;if(!m)return!1;"moving"==k?d||(d=m):(d&&(e[c-1].text!=d.text&&(e[c++]=d),d=null),e[c++]=m,e[c+1]=null,a&&a())},l=function(a){var b=!1;if(a.ctrlKey||a.metaKey)switch(String.fromCharCode(a.charCode||a.keyCode)){case "y":i.redo();b=!0;break;case "z":a.shiftKey?i.redo():i.undo(),b=!0}b&&(a.preventDefault&&
a.preventDefault(),top.event&&(top.event.returnValue=!1))},w=function(a){!a.ctrlKey&&!a.metaKey&&(a=a.keyCode,33<=a&&40>=a||63232<=a&&63235>=a?m("moving"):8==a||46==a||127==a?m("deleting"):13==a?m("newlines"):27==a?m("escape"):(16>a||20<a)&&91!=a&&m("typing"))};this.destroy=function(){f&&f.destroy()};(function(){j.addEvent(b.panels.input,"keypress",function(a){(a.ctrlKey||a.metaKey)&&(89==a.keyCode||90==a.keyCode)&&a.preventDefault()});var a=function(){if((n.isIE||h&&h.text!=b.panels.input.value)&&
void 0==g)k="paste",r(),o()};f=new b.inputPoller(a,100);j.addEvent(b.panels.input,"keydown",l);j.addEvent(b.panels.input,"keydown",w);j.addEvent(b.panels.input,"mousedown",function(){m("moving")});b.panels.input.onpaste=a;b.panels.input.ondrop=a})();o();r()};b.editor=function(a){a||(a=function(){});var i=b.panels.input,e=this,c,k=function(m){i.focus();if(m.textOp){c&&c.setCommandMode();var d=new b.TextareaState;if(!d)return;var k=d.getChunks(),f=function(){i.focus();k&&d.setChunks(k);d.restore();
a()};m.textOp(k,f,!0)||f()}m.execute&&m.execute(e)},g=function(){c&&(h(document.getElementById("wmd-undo-button"),c.canUndo()),h(document.getElementById("wmd-redo-button"),c.canRedo()))},h=function(a,e){e?(a.style.backgroundPosition=a.XShift+" 0px",a.onmouseover=function(){this.style.backgroundPosition=this.XShift+" -40px"},a.onmouseout=function(){this.style.backgroundPosition=this.XShift+" 0px"},n.isIE&&(a.onmousedown=function(){b.ieRetardedClick=!0;b.ieCachedRange=document.selection.createRange()}),
a.isHelp||(a.onclick=function(){if(this.onmouseout)this.onmouseout();k(this);return!1})):(a.style.backgroundPosition=a.XShift+" -20px",a.onmouseover=a.onmouseout=a.onclick=function(){})},p=function(){var a=document.getElementById("wmd-button-bar"),b=document.createElement("ul");b.id="wmd-button-row";b=a.appendChild(b);a=document.createElement("li");a.className="wmd-button";a.id="wmd-bold-button";a.title="Strong <strong> Ctrl+B";a.XShift="0px";a.textOp=d.doBold;h(a,!0);b.appendChild(a);a=document.createElement("li");
a.className="wmd-button";a.id="wmd-italic-button";a.title="Emphasis <em> Ctrl+I";a.XShift="-20px";a.textOp=d.doItalic;h(a,!0);b.appendChild(a);a=document.createElement("li");a.className="wmd-spacer";a.id="wmd-spacer1";b.appendChild(a);a=document.createElement("li");a.className="wmd-button";a.id="wmd-link-button";a.title="Hyperlink <a> Ctrl+L";a.XShift="-40px";a.textOp=function(a,b){return d.doLinkOrImage(a,b,!1)};h(a,!0);b.appendChild(a);a=document.createElement("li");a.className="wmd-button";a.id=
"wmd-quote-button";a.title="Blockquote <blockquote> Ctrl+Q";a.XShift="-60px";a.textOp=d.doBlockquote;h(a,!0);b.appendChild(a);a=document.createElement("li");a.className="wmd-button";a.id="wmd-code-button";a.title="Code Sample <pre><code> Ctrl+K";a.XShift="-80px";a.textOp=d.doCode;h(a,!0);b.appendChild(a);a=document.createElement("li");a.className="wmd-button";a.id="wmd-image-button";a.title="Image <img> Ctrl+G";a.XShift="-100px";a.textOp=function(a,b){return d.doLinkOrImage(a,b,!0)};h(a,!0);b.appendChild(a);
a=document.createElement("li");a.className="wmd-spacer";a.id="wmd-spacer2";b.appendChild(a);a=document.createElement("li");a.className="wmd-button";a.id="wmd-olist-button";a.title="Numbered List <ol> Ctrl+O";a.XShift="-120px";a.textOp=function(a,b,e){d.doList(a,b,!0,e)};h(a,!0);b.appendChild(a);a=document.createElement("li");a.className="wmd-button";a.id="wmd-ulist-button";a.title="Bulleted List <ul> Ctrl+U";a.XShift="-140px";a.textOp=function(a,b,e){d.doList(a,b,!1,e)};h(a,!0);b.appendChild(a);a=
document.createElement("li");a.className="wmd-button";a.id="wmd-heading-button";a.title="Heading <h1>/<h2> Ctrl+H";a.XShift="-160px";a.textOp=d.doHeading;h(a,!0);b.appendChild(a);a=document.createElement("li");a.className="wmd-button";a.id="wmd-hr-button";a.title="Horizontal Rule <hr> Ctrl+R";a.XShift="-180px";a.textOp=d.doHorizontalRule;h(a,!0);b.appendChild(a);a=document.createElement("li");a.className="wmd-spacer";a.id="wmd-spacer3";b.appendChild(a);a=document.createElement("li");a.className="wmd-button";
a.id="wmd-undo-button";a.title="Undo - Ctrl+Z";a.XShift="-200px";a.execute=function(a){a.undo()};h(a,!0);b.appendChild(a);a=document.createElement("li");a.className="wmd-button";a.id="wmd-redo-button";a.title="Redo - Ctrl+Y";a.title=/win/.test(l.platform.toLowerCase())?"Redo - Ctrl+Y":"Redo - Ctrl+Shift+Z";a.XShift="-220px";a.execute=function(a){a.redo()};h(a,!0);b.appendChild(a);b=document.createElement("li");b.className="wmd-button";b.id="wmd-help-button";b.XShift="-240px";b.isHelp=!0;b=document.createElement("a");
b.href="http://wmd-editor.com/";b.target="_blank";b.title="WMD website";g()},q=function(){if(b.showdown)var a=new b.showdown.converter;var e=i.value,c=function(){i.value=e};!/markdown/.test(b.wmd_env.output.toLowerCase())&&a&&(i.value=a.makeHtml(e),top.setTimeout(c,0));return!0};this.undo=function(){c&&c.undo()};this.redo=function(){c&&c.redo()};this.destroy=function(){c&&c.destroy();(void 0).parentNode&&(void 0).parentNode.removeChild(void 0);i&&(i.style.marginTop="");top.clearInterval(void 0)};
(function(){/\?noundo/.test(f.location.href)&&(b.nativeUndo=!0);b.nativeUndo||(c=new b.undoManager(function(){a();g()}));p();var e="keydown";n.isOpera&&(e="keypress");j.addEvent(i,e,function(a){if(a.ctrlKey||a.metaKey){switch(String.fromCharCode(a.charCode||a.keyCode).toLowerCase()){case "b":k(document.getElementById("wmd-bold-button"));break;case "i":k(document.getElementById("wmd-italic-button"));break;case "l":k(document.getElementById("wmd-link-button"));break;case "q":k(document.getElementById("wmd-quote-button"));
break;case "k":k(document.getElementById("wmd-code-button"));break;case "g":k(document.getElementById("wmd-image-button"));break;case "o":k(document.getElementById("wmd-olist-button"));break;case "u":k(document.getElementById("wmd-ulist-button"));break;case "h":k(document.getElementById("wmd-heading-button"));break;case "r":k(document.getElementById("wmd-hr-button"));break;case "y":k(document.getElementById("wmd-redo-button"));break;case "z":a.shiftKey?k(document.getElementById("wmd-redo-button")):
k(document.getElementById("wmd-undo-button"));break;default:return}a.preventDefault&&a.preventDefault();top.event&&(top.event.returnValue=!1)}});j.addEvent(i,"keyup",function(a){if(!a.shiftKey&&!a.ctrlKey&&!a.metaKey&&13===(a.charCode||a.keyCode))fakeButton={},fakeButton.textOp=d.doAutoindent,k(fakeButton)});n.isIE&&j.addEvent(i,"keydown",function(a){if(27===a.keyCode)return!1});if(i.form){var h=i.form.onsubmit;i.form.onsubmit=function(){q();if(h)return h.apply(this,arguments)}}})()};b.TextareaState=
function(){var a=this,i=b.panels.input;this.init=function(){if(j.isVisible(i)&&(this.setInputAreaSelectionStartEnd(),this.scrollTop=i.scrollTop,!this.text&&i.selectionStart||0===i.selectionStart))this.text=i.value};this.setInputAreaSelection=function(){if(j.isVisible(i))if(void 0!==i.selectionStart&&!n.isOpera)i.focus(),i.selectionStart=a.start,i.selectionEnd=a.end,i.scrollTop=a.scrollTop;else if(f.selection&&!(f.activeElement&&f.activeElement!==i)){i.focus();var b=i.createTextRange();b.moveStart("character",
-i.value.length);b.moveEnd("character",-i.value.length);b.moveEnd("character",a.end);b.moveStart("character",a.start);b.select()}};this.setInputAreaSelectionStartEnd=function(){if(i.selectionStart||0===i.selectionStart)a.start=i.selectionStart,a.end=i.selectionEnd;else if(f.selection){a.text=j.fixEolChars(i.value);var e;b.ieRetardedClick&&b.ieCachedRange?(e=b.ieCachedRange,b.ieRetardedClick=!1):e=f.selection.createRange();var c=j.fixEolChars(e.text),d="\u0007"+c+"\u0007";e.text=d;var g=j.fixEolChars(i.value);
e.moveStart("character",-d.length);e.text=c;a.start=g.indexOf("\u0007");a.end=g.lastIndexOf("\u0007")-1;if(d=a.text.length-j.fixEolChars(i.value).length){for(e.moveStart("character",-c.length);d--;)c+="\n",a.end+=1;e.text=c}this.setInputAreaSelection()}};this.restore=function(){void 0!=a.text&&a.text!=i.value&&(i.value=a.text);this.setInputAreaSelection();i.scrollTop=a.scrollTop};this.getChunks=function(){var e=new b.Chunks;e.before=j.fixEolChars(a.text.substring(0,a.start));e.startTag="";e.selection=
j.fixEolChars(a.text.substring(a.start,a.end));e.endTag="";e.after=j.fixEolChars(a.text.substring(a.end));e.scrollTop=a.scrollTop;return e};this.setChunks=function(a){a.before+=a.startTag;a.after=a.endTag+a.after;n.isOpera&&(a.before=a.before.replace(/\n/g,"\r\n"),a.selection=a.selection.replace(/\n/g,"\r\n"),a.after=a.after.replace(/\n/g,"\r\n"));this.start=a.before.length;this.end=a.before.length+a.selection.length;this.text=a.before+a.selection+a.after;this.scrollTop=a.scrollTop};this.init()};
b.Chunks=function(){};b.Chunks.prototype.findTags=function(a,b){var e=this,c;a&&(c=j.extendRegExp(a,"","$"),this.before=this.before.replace(c,function(a){e.startTag+=a;return""}),c=j.extendRegExp(a,"^",""),this.selection=this.selection.replace(c,function(a){e.startTag+=a;return""}));b&&(c=j.extendRegExp(b,"","$"),this.selection=this.selection.replace(c,function(a){e.endTag=a+e.endTag;return""}),c=j.extendRegExp(b,"^",""),this.after=this.after.replace(c,function(a){e.endTag=a+e.endTag;return""}))};
b.Chunks.prototype.trimWhitespace=function(a){this.selection=this.selection.replace(/^(\s*)/,"");a||(this.before+=g.$1);this.selection=this.selection.replace(/(\s*)$/,"");a||(this.after=g.$1+this.after)};b.Chunks.prototype.addBlankLines=function(a,b,e){void 0===a&&(a=1);void 0===b&&(b=1);a++;b++;var c,d;navigator.userAgent.match(/Chrome/)&&"X".match(/()./);this.selection=this.selection.replace(/(^\n*)/,"");this.startTag+=g.$1;this.selection=this.selection.replace(/(\n*$)/,"");this.endTag+=g.$1;this.startTag=
this.startTag.replace(/(^\n*)/,"");this.before+=g.$1;this.endTag=this.endTag.replace(/(\n*$)/,"");this.after+=g.$1;if(this.before){for(c=d="";a--;)c+="\\n?",d+="\n";e&&(c="\\n*");this.before=this.before.replace(new g(c+"$",""),d)}if(this.after){for(c=d="";b--;)c+="\\n?",d+="\n";e&&(c="\\n*");this.after=this.after.replace(new g(c,""),d)}};d.prefixes="(?:\\s{4,}|\\s*>|\\s*-\\s+|\\s*\\d+\\.|=|\\+|-|_|\\*|#|\\s*\\[[^\n]]+\\]:)";d.unwrap=function(a){var b=new g("([^\\n])\\n(?!(\\n|"+d.prefixes+"))","g");
a.selection=a.selection.replace(b,"$1 $2")};d.wrap=function(a,b){d.unwrap(a);var e=new g("(.{1,"+b+"})( +|$\\n?)","gm");a.selection=a.selection.replace(e,function(a,b){return(new g("^"+d.prefixes,"")).test(a)?a:b+"\n"});a.selection=a.selection.replace(/\s+$/,"")};d.doBold=function(a){return d.doBorI(a,2,"strong text")};d.doItalic=function(a){return d.doBorI(a,1,"emphasized text")};d.doBorI=function(a,b,e){a.trimWhitespace();a.selection=a.selection.replace(/\n{2,}/g,"\n");a.before.search(/(\**$)/);
var c=g.$1;a.after.search(/(^\**)/);var d=g.$1,c=Math.min(c.length,d.length);c>=b&&(2!=c||1!=b)?(a.before=a.before.replace(g("[*]{"+b+"}$",""),""),a.after=a.after.replace(g("^[*]{"+b+"}",""),"")):!a.selection&&d?(a.after=a.after.replace(/^([*_]*)/,""),a.before=a.before.replace(/(\s?)$/,""),a.before=a.before+d+g.$1):(!a.selection&&!d&&(a.selection=e),b=1>=b?"*":"**",a.before+=b,a.after=b+a.after)};d.stripLinkDefs=function(a,b){return a=a.replace(/^[ ]{0,3}\[(\d+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|$)/gm,
function(a,c,d,f,g){b[c]=a.replace(/\s*$/,"");return f?(b[c]=a.replace(/["(](.+?)[")]$/,""),f+g):""})};d.addLinkDef=function(a,b){var e=0,c={};a.before=d.stripLinkDefs(a.before,c);a.selection=d.stripLinkDefs(a.selection,c);a.after=d.stripLinkDefs(a.after,c);var f="",g=/(\[)((?:\[[^\]]*\]|[^\[\]])*)(\][ ]?(?:\n[ ]*)?\[)(\d+)(\])/g,h=function(a){e++;a=a.replace(/^[ ]{0,3}\[(\d+)\]:/,"  ["+e+"]:");f+="\n"+a},j=function(a,b,d,i,f,k){d=d.replace(g,j);return c[f]?(h(c[f]),b+d+i+e+k):a};a.before=a.before.replace(g,
j);b?h(b):a.selection=a.selection.replace(g,j);var l=e;a.after=a.after.replace(g,j);a.after&&(a.after=a.after.replace(/\n*$/,""));a.after||(a.selection=a.selection.replace(/\n*$/,""));a.after+="\n\n"+f;return l};d.doLinkOrImage=function(a,b,e){a.trimWhitespace();a.findTags(/\s*!?\[/,/\][ ]?(?:\n[ ]*)?(\[.*?\])?/);if(1<a.endTag.length)a.startTag=a.startTag.replace(/!?\[/,""),a.endTag="",d.addLinkDef(a,null);else if(/\n\n/.test(a.selection))d.addLinkDef(a,null);else{var c=function(c){null!==c&&(a.startTag=
a.endTag="",c=d.addLinkDef(a," [999]: "+c),a.startTag=e?"![":"[",a.endTag="]["+c+"]",a.selection||(a.selection=e?"alt text":"link text"));b()};e?j.prompt(s,"http://",c):j.prompt(u,"http://",c);return!0}};j.makeAPI=function(){b.wmd={};b.wmd.editor=b.editor;b.wmd.previewManager=b.previewManager};j.startEditor=function(){if(!1===b.wmd_env.autostart)j.makeAPI();else{var a;j.addEvent(top,"load",function(){b.panels=new b.PanelCollection;a=new b.previewManager;new b.editor(a.refresh);a.refresh(!0)})}};b.previewManager=
function(){var a=this,d,e,c,g,l,t,p="delayed",q=function(){var a=0;top.innerHeight?a=top.pageYOffset:f.documentElement&&f.documentElement.scrollTop?a=f.documentElement.scrollTop:f.body&&(a=f.body.scrollTop);return a},m=function(){if(b.panels.preview||b.panels.output){var a=b.panels.input.value;if(!(a&&a==l)){l=a;var c=(new Date).getTime();!d&&b.showdown&&(d=new b.showdown.converter);d&&(a=d.makeHtml(a));g=(new Date).getTime()-c;s(a);t=a}}},o=function(){c&&(top.clearTimeout(c),c=void 0);if("manual"!==
p){var a=0;"delayed"===p&&(a=g);3E3<a&&(a=3E3);c=top.setTimeout(m,a)}};this.refresh=function(a){a?(l="",m()):o()};this.processingTime=function(){return g};this.output=function(){return t};this.setUpdateMode=function(b){p=b;a.refresh()};var r=!0,s=function(a){var c=h.getTop(b.panels.input)-q();if(b.panels.output)if(void 0!==b.panels.output.value)b.panels.output.value=a,b.panels.output.readOnly=!0;else{var d=a.replace(/&/g,"&amp;"),d=d.replace(/</g,"&lt;");b.panels.output.innerHTML="<pre><code>"+d+
"</code></pre>"}b.panels.preview&&(b.panels.preview.innerHTML=a);b.panels.preview&&(b.panels.preview.scrollTop=(b.panels.preview.scrollHeight-b.panels.preview.clientHeight)*(b.panels.preview.scrollHeight<=b.panels.preview.clientHeight?1:b.panels.preview.scrollTop/(b.panels.preview.scrollHeight-b.panels.preview.clientHeight)));b.panels.output&&(b.panels.output.scrollTop=(b.panels.output.scrollHeight-b.panels.output.clientHeight)*(b.panels.output.scrollHeight<=b.panels.output.clientHeight?1:b.panels.output.scrollTop/
(b.panels.output.scrollHeight-b.panels.output.clientHeight)));if(r)r=!1;else{var e=h.getTop(b.panels.input)-q();n.isIE?top.setTimeout(function(){top.scrollBy(0,e-c)},0):top.scrollBy(0,e-c)}};this.destroy=function(){e&&e.destroy()};(function(a,c){j.addEvent(a,"input",c);a.onpaste=c;a.ondrop=c;j.addEvent(a,"keypress",c);j.addEvent(a,"keydown",c);e=new b.inputPoller(c,500)})(b.panels.input,o);m();b.panels.preview&&(b.panels.preview.scrollTop=0);b.panels.output&&(b.panels.output.scrollTop=0)};d.doAutoindent=
function(a,b,e){a.before=a.before.replace(/(\n|^)[ ]{0,3}([*+-]|\d+[.])[ \t]*\n$/,"\n\n");a.before=a.before.replace(/(\n|^)[ ]{0,3}>[ \t]*\n$/,"\n\n");a.before=a.before.replace(/(\n|^)[ \t]+\n$/,"\n\n");e=!1;/(\n|^)[ ]{0,3}([*+-])[ \t]+.*\n$/.test(a.before)&&d.doList&&d.doList(a,b,!1,!0);/(\n|^)[ ]{0,3}(\d+[.])[ \t]+.*\n$/.test(a.before)&&d.doList&&d.doList(a,b,!0,!0);/(\n|^)[ ]{0,3}>[ \t]+.*\n$/.test(a.before)&&d.doBlockquote&&d.doBlockquote(a,b,e);/(\n|^)(\t|[ ]{4,}).*\n$/.test(a.before)&&d.doCode&&
d.doCode(a,b,e)};d.doBlockquote=function(a,f,e){a.selection=a.selection.replace(/^(\n*)([^\r]+?)(\n*)$/,function(b,c,d,e){a.before+=c;a.after=e+a.after;return d});a.before=a.before.replace(/(>[ \t]*)$/,function(b,c){a.selection=c+a.selection;return""});f=e?"Blockquote":"";a.selection=a.selection.replace(/^(\s|>)+$/,"");a.selection=a.selection||f;e=f="";if(a.before){var c=a.before.replace(/\n$/,"").split("\n"),g=!1,h;for(h in c){var j=!1;line=c[h];g=g&&0<line.length;/^>/.test(line)?(j=!0,!g&&1<line.length&&
(g=!0)):j=/^[ \t]*$/.test(line)?!0:g;j?f+=line+"\n":(e+=f+line,f="\n")}/(^|\n)>/.test(f)||(e+=f,f="")}a.startTag=f;a.before=e;a.after&&(a.after=a.after.replace(/^\n?/,"\n"));a.after=a.after.replace(/^(((\n|^)(\n[ \t]*)*>(.+\n)*.*)+(\n[ \t]*)*)/,function(b){a.endTag=b;return""});h=function(b){var c=b?"> ":"";a.startTag&&(a.startTag=a.startTag.replace(/\n((>|\s)*)\n$/,function(a,b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"}));a.endTag&&(a.endTag=a.endTag.replace(/^\n((>|\s)*)\n/,function(a,
b){return"\n"+b.replace(/^[ ]{0,3}>?[ \t]*$/gm,c)+"\n"}))};/^(?![ ]{0,3}>)/m.test(a.selection)?(d.wrap(a,b.wmd_env.lineLength-2),a.selection=a.selection.replace(/^/gm,"> "),h(!0),a.addBlankLines()):(a.selection=a.selection.replace(/^[ ]{0,3}> ?/gm,""),d.unwrap(a),h(!1),!/^(\n|^)[ ]{0,3}>/.test(a.selection)&&a.startTag&&(a.startTag=a.startTag.replace(/\n{0,2}$/,"\n\n")),!/(\n|^)[ ]{0,3}>.*$/.test(a.selection)&&a.endTag&&(a.endTag=a.endTag.replace(/^\n{0,2}/,"\n\n")));/\n/.test(a.selection)||(a.selection=
a.selection.replace(/^(> *)/,function(b,c){a.startTag+=c;return""}))};d.doCode=function(a,b,d){b=/\S[ ]*$/.test(a.before);if(!/^[ ]*\S/.test(a.after)&&!b||/\n/.test(a.selection)){a.before=a.before.replace(/[ ]{4}$/,function(b){a.selection=b+a.selection;return""});var c=b=1;if(/\n(\t|[ ]{4,}).*\n$/.test(a.before)||""===a.after)b=0;/^\n(\t|[ ]{4,})/.test(a.after)&&(c=0);a.addBlankLines(b,c);a.selection?a.selection=/^[ ]{0,3}\S/m.test(a.selection)?a.selection.replace(/^/gm,"    "):a.selection.replace(/^[ ]{4}/gm,
""):(a.startTag="    ",a.selection=d?"enter code here":"")}else a.trimWhitespace(),a.findTags(/`/,/`/),!a.startTag&&!a.endTag?(a.startTag=a.endTag="`",a.selection||(a.selection=d?"enter code here":"")):a.endTag&&!a.startTag?(a.before+=a.endTag,a.endTag=""):a.startTag=a.endTag=""};d.doList=function(a,f,e,c){var f=/^\n*(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*/,h="-",j=1,l=function(){var a;e?(a=" "+j+". ",j++):a=" "+h+" ";return a},n=function(a){void 0===
e&&(e=/^\s*\d/.test(a));return a=a.replace(/^[ ]{0,3}([*+-]|\d+[.])\s/gm,function(){return l()})};a.findTags(/(\n|^)*[ ]{0,3}([*+-]|\d+[.])\s+/,null);a.before&&!/\n$/.test(a.before)&&!/^\n/.test(a.startTag)&&(a.before+=a.startTag,a.startTag="");if(a.startTag){var q=/\d+[.]/.test(a.startTag);a.startTag="";a.selection=a.selection.replace(/\n[ ]{4}/g,"\n");d.unwrap(a);a.addBlankLines();q&&(a.after=a.after.replace(f,n));if(e==q)return}var m=1;a.before=a.before.replace(/(\n|^)(([ ]{0,3}([*+-]|\d+[.])[ \t]+.*)(\n.+|\n{2,}([*+-].*|\d+[.])[ \t]+.*|\n{2,}[ \t]+\S.*)*)\n*$/,
function(a){/^\s*([*+-])/.test(a)&&(h=g.$1);m=/[^\n]\n\n[^\n]/.test(a)?1:0;return n(a)});a.selection||(a.selection=c?"List item":" ");var c=l(),o=1;a.after=a.after.replace(f,function(a){o=/[^\n]\n\n[^\n]/.test(a)?1:0;return n(a)});a.trimWhitespace(!0);a.addBlankLines(m,o,!0);a.startTag=c;c=c.replace(/./g," ");d.wrap(a,b.wmd_env.lineLength-c.length);a.selection=a.selection.replace(/\n/g,"\n"+c)};d.doHeading=function(a){a.selection=a.selection.replace(/\s+/g," ");a.selection=a.selection.replace(/(^\s+|\s+$)/g,
"");if(a.selection){var d=0;a.findTags(/#+[ ]*/,/[ ]*#+/);/#+/.test(a.startTag)&&(d=g.lastMatch.length);a.startTag=a.endTag="";a.findTags(null,/\s?(-+|=+)/);/=+/.test(a.endTag)&&(d=1);/-+/.test(a.endTag)&&(d=2);a.startTag=a.endTag="";a.addBlankLines(1,1);d=0==d?2:d-1;if(0<d){var d=2<=d?"-":"=",e=a.selection.length;e>b.wmd_env.lineLength&&(e=b.wmd_env.lineLength);for(a.endTag="\n";e--;)a.endTag+=d}}else a.startTag="## ",a.selection="Heading",a.endTag=" ##"};d.doHorizontalRule=function(a){a.startTag=
"----------\n";a.selection="";a.addBlankLines(2,1,!0)}};Attacklab.wmd_env={};Attacklab.account_options={};Attacklab.wmd_defaults={version:1,output:"HTML",lineLength:40,delayLoad:!1};
Attacklab.wmd||(Attacklab.wmd=function(){Attacklab.loadEnv=function(){var b=function(b){if(b)for(var g in b)Attacklab.wmd_env[g]=b[g]};b(Attacklab.wmd_defaults);b(Attacklab.account_options);b(top.wmd_options);Attacklab.full=!0;Attacklab.wmd_env.buttons=Attacklab.wmd_env.buttons||"bold italic link blockquote code image ol ul heading hr"};Attacklab.loadEnv()},Attacklab.wmd(),Attacklab.wmdBase(),Attacklab.Util.startEditor());
//@ sourceMappingURL=wmd.js.map