!function(){
    function t(t,e){
        return function(){
            var i=R[e],o=this;i&&clearTimeout(i),R[e]=setTimeout(function(){t.apply(o,arguments)},300)
        }
    }
        var e=8,i=window.dui||{},o="dui-dialog",n=[],s=null,h=!(!$.browser.msie||"6.0"!==$.browser.version),d=("ontouchstart"in window,{}),a={},c="j_close_dialog",l="dui-dialog",r="dui-dialog-close",u="dui-dialog-shd",f="dui-dialog-content",p="dui-dialog-iframe",m="dui-dialog-msk",g="确定",v="取消",b="提示",w="下载中，请稍候...",y='<div id="{ID}" class="'+l+' {CLS}" style="{CSS_ISHIDE}">                <span class="'+u+'"></span>                <div class="'+f+'">                    {BN_CLOSE}                    {TITLE}                    <div class="bd">{BODY}</div>                </div>            </div>',C='<a href="#" class="'+c+" "+r+'">X</a>',I='<div class="hd"><h3>{TITLE}</h3></div>',k='<iframe class="'+p+'"></iframe>',x='<div class="'+m+'"></div>',T={confirm:{text:g,method:function(t){t.close()}},cancel:{text:v,method:function(t){t.close()}}},S={url:"",nodeId:"",cls:"",content:"",title:b,width:0,height:0,visible:!1,modal:!1,iframe:!1,maxWidth:960,autoupdate:!1,cache:!0,buttons:[],callback:null,dataType:"text",isStick:!1,isHideClose:!1,isHideTitle:!1},H=function(t,e){var i,o={};for(i in e)e.hasOwnProperty(i)&&(o[i]=void 0===t[i]?e[i]:t[i]);return o},D=function(t){for(var e,i=t.elements,o=0,n=[],s={"select-one":function(t){return encodeURIComponent(t.name)+"="+encodeURIComponent(t.options[t.selectedIndex].value)},"select-multiple":function(t){for(var e,i=0,o=[];e=t.options[i++];)e.selected&&o.push(encodeURIComponent(t.name)+"="+encodeURIComponent(e.value));return o.join("&")},radio:function(t){if(t.checked)return encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)},checkbox:function(t){if(t.checked)return encodeURIComponent(t.name)+"="+encodeURIComponent(t.value)}};e=i[o++];)s[e.type]?n.push(s[e.type](e)):n.push(encodeURIComponent(e.name)+"="+encodeURIComponent(e.value));return n.join("&").replace(/\&{2,}/g,"&")},j=function(t){var e=t||{};this.config=H(e,S),this.init()};j.prototype={init:function(){if(this.config)return this.render(),this.bind(),this},render:function(t){var e=this.config,i=e.nodeId||o+n.length;n.push(i);var s=$("body"),h=s.find("."+m),d="object"==typeof e.content?$(e.content).html():e.content;return s.append(y.replace("{ID}",i).replace("{CSS_ISHIDE}",e.visible?"":"visibility:hidden;top:-999em;left:-999em;").replace("{CLS}",e.cls).replace("{TITLE}",I.replace("{TITLE}",e.title)).replace("{BN_CLOSE}",C).replace("{BODY}",d||t||"")),e.modal&&!h.length?(s.append(x),this.msk=$("."+m)):this.msk=h.eq(0),this.nodeId=i,this.node=$("#"+i),this.title=$(".hd",this.node),this.body=$(".bd",this.node),this.btnClose=$("."+r,this.node),this.shadow=$("."+u,this.node),this.iframe=$("."+p,this.node),this.set(e),this},bind:function(){var e=this;return h||$(window).bind({resize:t(function(){e.updatePosition()},"pos"),scroll:t(function(){e.updatePosition()},"pos")}),e.node.delegate("."+c,"click",function(t){e.close(),t.preventDefault()}),e.node.find("."+r).bind("click",function(t){e.close(),t.preventDefault()}),$("body").keypress(function(t){27===t.keyCode&&e.close()}),this},updateSize:function(){var t,i=this.node.width(),o=$(window).width(),n=$(window).height(),s=this.config;$(".bd",this.node).eq(0).css({height:"auto","overflow-x":"visible","overflow-y":"visible"}),t=this.node.height();var h=2*e;return s.maxWidth=Math.min(s.maxWidth,o-h),i>s.maxWidth&&(i=s.maxWidth,this.node.css("width",i+"px")),t>n&&$(".bd",this.node).eq(0).css({height:n-150+"px","overflow-x":"hidden","overflow-y":"auto"}),t=this.node.height(),this.shadow.width(i),this.shadow.height(t),this.iframe.width(i+h).height(t+h),this},updatePosition:function(){if(!this.config.isStick){var t=this.node.width(),i=this.node.height(),o=$(window),n=h?o.scrollTop():0;return this.node.css({left:Math.floor(o.width()/2-t/2)+"px",top:Math.floor(o.height()/2-i/2-e)+n+"px"}),this}},set:function(t){var e,i,o=this.nodeId,n=this.nodeId||n,s=[],h=this,c=function(t){return s.push(0),o+"-"+t+"-"+s.length};if(!t)return this;t.width&&(this.node.css("width",t.width+"px"),this.config.width=t.width),t.height&&(this.node.css("height",t.height+"px"),this.config.height=t.height),$.isArray(t.buttons)&&t.buttons[0]?(i=$(".ft",this.node),e=[],$(t.buttons).each(function(){var t=arguments[1],i=c("bn");"string"==typeof t&&(t=T[t]),t.text&&(t.href?e.push('<a class="'+(t.cls||"")+'" id="'+i+'" href="'+t.href+'">'+t.text+"</a> "):e.push('<span class="bn-flat '+(t.cls||"")+'"><input type="button" id="'+i+'" class="'+n+'-bn" value="'+t.text+'" /></span> '),a[i]=t.method)}),i[0]?i.html(e.join("")):i=this.body.parent().append('<div class="ft">'+e.join("")+"</div>"),this.footer=$(".ft",this.node),$(".ft input, .ft a",this.node).click(function(t){var e=this.id&&a[this.id];if(e)var i=e.call(this,h);i&&(t.preventDefault(),"string"==typeof i&&alert(i))})):(this.footer=$(".ft",this.node),this.footer.html("")),"undefined"!=typeof t.isHideClose&&(t.isHideClose?this.btnClose.hide():this.btnClose.show(),this.config.isHideClose=t.isHideClose),"undefined"!=typeof t.isHideTitle&&(t.isHideTitle?this.title.hide():this.title.show(),this.config.isHideTitle=t.isHideTitle),t.title&&(this.setTitle(t.title),this.config.title=t.title),"undefined"!=typeof t.iframe&&(t.iframe?this.iframe[0]?this.iframe.show():(this.node.prepend(k),this.iframe=$("."+p,this.node)):this.iframe.hide(),this.config.iframe=t.iframe),t.content&&(this.body.html("object"==typeof t.content?$(t.content).html():t.content),this.config.content=t.content),t.url&&(t.cache&&d[t.url]?("text"!==t.dataType&&t.dataType||this.setContent(d[t.url]),t.callback&&t.callback(d[t.url],this)):"json"===t.dataType?(this.setContent(w),this.footer&&this.footer.hide(),$.getJSON(t.url,function(e){h.footer.show(),d[t.url]=e,t.callback&&t.callback(e,h)})):(this.setContent(w),this.footer&&this.footer.hide(),$.ajax({url:t.url,dataType:t.dataType,success:function(e){d[t.url]=e,h.footer&&h.footer.show(),h.setContent(e),t.callback&&t.callback(e,h)}})));var l=t.position;return l&&this.node.css({left:l[0]+"px",top:l[1]+"px"}),"boolean"==typeof t.autoupdate&&(this.config.autoupdate=t.autoupdate),"boolean"==typeof t.isStick&&(t.isStick?this.node.css("position","absolute"):this.node.css("position","fixed"),this.config.isStick=t.isStick),this.update()},update:function(){return this.updateSize(),this.updatePosition(),this},setContent:function(t){return this.body.html(t),this.update()},setTitle:function(t){return $("h3",this.title).html(t),this},submit:function(t){var e=$("form",this.node);e.submit(function(e){e.preventDefault();var i=this.getAttribute("action",2),o=this.getAttribute("method")||"get",n=D(this);$[o.toLowerCase()](i,n,function(e){t&&t(e)},"json")}),e.submit()},open:function(){this.node.appendTo("body").css("visibility","visible").show();var t=this,e=this.config,i=t.body[0];return t.contentHeight=i.offsetHeight,this.watcher=e.autoupdate?setInterval(function(){i.offsetHeight!==t.contentHeight&&(t.update(),t.contentHeight=i.offsetHeight)},100):0,e.modal&&this.msk.show().css({height:$(document).height()}),this},close:function(){return this.node.hide(),this.msk.hide(),this.node.trigger("dialog:close",this),clearInterval(this.watcher),this}},i.Dialog=function(t,e){return!e&&s?t?s.set(t):s:s||e?new j(t):s=new j(t)},window.dui=i;var R={}}();