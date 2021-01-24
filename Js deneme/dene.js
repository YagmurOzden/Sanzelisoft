(function(e){function t(){var e=document.createElement("input"),t="onpaste";e.setAttribute(t,"");return typeof e[t]==="function"?"paste":"input"}var n=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),s=/chrome/i.test(r),o=/android/i.test(r),u;e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:true,dataName:"rawMaskFn",placeholder:"_"};e.fn.extend({caret:function(e,t){var n;if(this.length===0||this.is(":hidden")){return}if(typeof e=="number"){t=typeof t==="number"?t:e;return this.each(function(){if(this.setSelectionRange){this.setSelectionRange(e,t)}else if(this.createTextRange){n=this.createTextRange();n.collapse(true);n.moveEnd("character",t);n.moveStart("character",e);n.select()}})}else{if(this[0].setSelectionRange){e=this[0].selectionStart;t=this[0].selectionEnd}else if(document.selection&&document.selection.createRange){n=document.selection.createRange();e=0-n.duplicate().moveStart("character",-1e5);t=e+n.text.length}return{begin:e,end:t}}},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var a,f,l,c,h,p;if(!t&&this.length>0){a=e(this[0]);return a.data(e.mask.dataName)()}r=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},r);f=e.mask.definitions;l=[];c=p=t.length;h=null;e.each(t.split(""),function(e,t){if(t=="?"){p--;c=e}else if(f[t]){l.push(new RegExp(f[t]));if(h===null){h=l.length-1}}else{l.push(null)}});return this.trigger("unmask").each(function(){function g(e){while(++e<p&&!l[e]);return e}function y(e){while(--e>=0&&!l[e]);return e}function b(e,t){var n,i;if(e<0){return}for(n=e,i=g(t);n<p;n++){if(l[n]){if(i<p&&l[n].test(d[i])){d[n]=d[i];d[i]=r.placeholder}else{break}i=g(i)}}N();a.caret(Math.max(h,e))}function w(e){var t,n,i,s;for(t=e,n=r.placeholder;t<p;t++){if(l[t]){i=g(t);s=d[t];d[t]=n;if(i<p&&l[i].test(s)){n=s}else{break}}}}function E(e){C();if(a.val()!=m)a.change()}function S(e){var t=e.which,n,r,s;if(t===8||t===46||i&&t===127){n=a.caret();r=n.begin;s=n.end;if(s-r===0){r=t!==46?y(r):s=g(r-1);s=t===46?g(s):s}T(r,s);b(r,s-1);e.preventDefault()}else if(t===13){E.call(this,e)}else if(t===27){a.val(m);a.caret(0,C());e.preventDefault()}}function x(t){var n=t.which,i=a.caret(),s,u,f;if(n==0){if(i.begin>=p){a.val(a.val().substr(0,p));t.preventDefault();return false}if(i.begin==i.end){n=a.val().charCodeAt(i.begin-1);i.begin--;i.end--}}if(t.ctrlKey||t.altKey||t.metaKey||n<32){return}else if(n&&n!==13){if(i.end-i.begin!==0){T(i.begin,i.end);b(i.begin,i.end-1)}s=g(i.begin-1);if(s<p){u=String.fromCharCode(n);if(l[s].test(u)){w(s);d[s]=u;N();f=g(s);if(o){var c=function(){e.proxy(e.fn.caret,a,f)()};setTimeout(c,0)}else{a.caret(f)}if(r.completed&&f>=p){r.completed.call(a)}}}t.preventDefault()}}function T(e,t){var n;for(n=e;n<t&&n<p;n++){if(l[n]){d[n]=r.placeholder}}}function N(){a.val(d.join(""))}function C(e){var t=a.val(),n=-1,i,s,o;for(i=0,o=0;i<p;i++){if(l[i]){d[i]=r.placeholder;while(o++<t.length){s=t.charAt(o-1);if(l[i].test(s)){d[i]=s;n=i;break}}if(o>t.length){break}}else if(d[i]===t.charAt(o)&&i!==c){o++;n=i}}if(e){N()}else if(n+1<c){if(r.autoclear||d.join("")===v){if(a.val())a.val("");T(0,p)}else{N()}}else{N();a.val(a.val().substring(0,n+1))}return c?i:h}var a=e(this),d=e.map(t.split(""),function(e,t){if(e!="?"){return f[e]?r.placeholder:e}}),v=d.join(""),m=a.val();a.data(e.mask.dataName,function(){return e.map(d,function(e,t){return l[t]&&e!=r.placeholder?e:null}).join("")});if(!a.attr("readonly"))a.one("unmask",function(){a.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){clearTimeout(u);var e;m=a.val();e=C();u=setTimeout(function(){N();if(e==t.replace("?","").length){a.caret(0,e)}else{a.caret(e)}},10)}).on("blur.mask",E).on("keydown.mask",S).on("keypress.mask",x).on(n,function(){setTimeout(function(){var e=C(true);a.caret(e);if(r.completed&&e==a.val().length)r.completed.call(a)},0)});if(s&&o){a.on("keyup.mask",x)}C()})}})})(jQuery);




var names = [] ;
//var surname;

var radios = document.getElementsByName('genderS');

$.mask.definitions['~'] = "[+-]";
$("#date").mask("99/99/9999");
$("#phone").mask("(999) 999-9999");

function myfunc(){
    //names.push(document.getElementById("name").value);
    if(document.getElementById("name").value.length >= 1){
    names[0] = document.getElementById("name").value;
    }
    if(document.getElementById("surname").value.length >= 1){
    names[1] = document.getElementById("surname").value;
    }
    if(document.getElementById("age").value.length >= 1){
    names[2] = document.getElementById("age").value;
    }
    
       for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {
            names[5] = radios[i].value;
            break;  
        }
      }
    
    if(document.getElementById("date").value.length >= 1){
    names[3] = document.getElementById("date").value;
    }
    if(document.getElementById("phone").value.length >= 1){
    names[4] = document.getElementById("phone").value;
    }

    if(document.getElementById("email").value.length >= 1){
    names[6] = document.getElementById("email").value;
    }

    if(document.getElementById("hometown").value.length >= 1){
    names[7] = document.getElementById("hometown").value;
    }

    if(document.getElementById("specifications").value.length >= 1){
    names[8] = document.getElementById("specifications").value;
    }

    localStorage.setItem("names", JSON.stringify(names));
    //localStorage.setItem("surname", JSON.stringify(surname));

}





