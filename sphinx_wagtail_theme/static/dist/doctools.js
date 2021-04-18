$u=_.noConflict(),jQuery.urldecode=function(e){return decodeURIComponent(e).replace(/\+/g," ")},jQuery.urlencode=encodeURIComponent,jQuery.getQueryParameters=function(e){void 0===e&&(e=document.location.search);for(var t=e.substr(e.indexOf("?")+1).split("&"),n={},i=0;i<t.length;i++){var r=t[i].split("=",2),o=jQuery.urldecode(r[0]),a=jQuery.urldecode(r[1]);o in n?n[o].push(a):n[o]=[a]}return n},jQuery.fn.highlightText=function(e,t){function n(i,r){if(3===i.nodeType){var o=i.nodeValue,a=o.toLowerCase().indexOf(e);if(a>=0&&!jQuery(i.parentNode).hasClass(t)&&!jQuery(i.parentNode).hasClass("nohighlight")){var s,c=jQuery(i).closest("body, svg, foreignObject").is("svg");if(c?s=document.createElementNS("http://www.w3.org/2000/svg","tspan"):(s=document.createElement("span")).className=t,s.appendChild(document.createTextNode(o.substr(a,e.length))),i.parentNode.insertBefore(s,i.parentNode.insertBefore(document.createTextNode(o.substr(a+e.length)),i.nextSibling)),i.nodeValue=o.substr(0,a),c){var h=document.createElementNS("http://www.w3.org/2000/svg","rect"),u=i.parentElement.getBBox();h.x.baseVal.value=u.x,h.y.baseVal.value=u.y,h.width.baseVal.value=u.width,h.height.baseVal.value=u.height,h.setAttribute("class",t),r.push({parent:i.parentNode,target:h})}}}else jQuery(i).is("button, select, textarea")||jQuery.each(i.childNodes,(function(){n(this,r)}))}for(var i=[],r=this.each((function(){n(this,i)})),o=0;o<i.length;++o)jQuery(i[o].parent).before(i[o].target);return r},jQuery.browser||(jQuery.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},jQuery.browser={},jQuery.browser[jQuery.uaMatch(navigator.userAgent).browser]=!0);var Documentation={init:function(){this.fixFirefoxAnchorBug(),this.highlightSearchWords(),this.initIndexTable(),DOCUMENTATION_OPTIONS.NAVIGATION_WITH_KEYS&&this.initOnKeyListeners()},TRANSLATIONS:{},PLURAL_EXPR:function(e){return 1===e?0:1},LOCALE:"unknown",gettext:function(e){var t=Documentation.TRANSLATIONS[e];return void 0===t?e:"string"==typeof t?t:t[0]},ngettext:function(e,t,n){var i=Documentation.TRANSLATIONS[e];return void 0===i?1==n?e:t:i[Documentation.PLURALEXPR(n)]},addTranslations:function(e){for(var t in e.messages)this.TRANSLATIONS[t]=e.messages[t];this.PLURAL_EXPR=new Function("n","return +("+e.plural_expr+")"),this.LOCALE=e.locale},addContextElements:function(){$("div[id] > :header:first").each((function(){$('<a class="headerlink">¶</a>').attr("href","#"+this.id).attr("title",_("Permalink to this headline")).appendTo(this)})),$("dt[id]").each((function(){$('<a class="headerlink">¶</a>').attr("href","#"+this.id).attr("title",_("Permalink to this definition")).appendTo(this)}))},fixFirefoxAnchorBug:function(){document.location.hash&&$.browser.mozilla&&window.setTimeout((function(){document.location.href+=""}),10)},highlightSearchWords:function(){var e=$.getQueryParameters(),t=e.highlight?e.highlight[0].split(/\s+/):[];if(t.length){var n=$("div.body");n.length||(n=$("body")),window.setTimeout((function(){$.each(t,(function(){n.highlightText(this.toLowerCase(),"highlighted")}))}),10),$('<p class="highlight-link"><a href="javascript:Documentation.hideSearchWords()">'+_("Hide Search Matches")+"</a></p>").appendTo($("#searchbox"))}},initIndexTable:function(){var e=$("img.toggler").click((function(){var e=$(this).attr("src"),t=$(this).attr("id").substr(7);$("tr.cg-"+t).toggle(),"minus.png"===e.substr(-9)?$(this).attr("src",e.substr(0,e.length-9)+"plus.png"):$(this).attr("src",e.substr(0,e.length-8)+"minus.png")})).css("display","");DOCUMENTATION_OPTIONS.COLLAPSE_INDEX&&e.click()},hideSearchWords:function(){$("#searchbox .highlight-link").fadeOut(300),$("span.highlighted").removeClass("highlighted")},makeURL:function(e){return DOCUMENTATION_OPTIONS.URL_ROOT+"/"+e},getCurrentURL:function(){var e=document.location.pathname,t=e.split(/\//);$.each(DOCUMENTATION_OPTIONS.URL_ROOT.split(/\//),(function(){".."===this&&t.pop()}));var n=t.join("/");return e.substring(n.lastIndexOf("/")+1,e.length-1)},initOnKeyListeners:function(){$(document).keyup((function(e){var t=document.activeElement.tagName;if("TEXTAREA"!==t&&"INPUT"!==t&&"SELECT"!==t)switch(e.keyCode){case 37:var n=$('link[rel="prev"]').prop("href");if(n)return window.location.href=n,!1;case 39:var i=$('link[rel="next"]').prop("href");if(i)return window.location.href=i,!1}}))}};_=Documentation.gettext,$(document).ready((function(){Documentation.init()}));