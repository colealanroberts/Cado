$(function(){function t(t){var l=$(".status__price"),a=d.toUpperCase();$.getJSON("https://api.bitcoinaverage.com/ticker/"+a+"/",function(t){var a=d.toLowerCase();"undefined"==typeof a?console.log("Erroring!"):"aud"===a?l.html(f.aud+t.last):"brl"===a?l.html(f.brl+t.last):"cad"===a?l.html(f.cad+t.last):"cny"===a?l.html(f.cny+t.last):"eur"===a?l.html(f.eur+t.last):"gbp"===a?l.html(f.gbp+t.last):"hkd"===a?l.html(f.hkd+t.last):"idr"===a?l.html(f.idr+t.last):"ils"===a?l.html(f.ils+t.last):"jpy"===a?l.html(f.jpy+t.last):"mxn"===a?l.html(f.mxn+t.last):"nok"===a?l.html(f.nok+t.last):"nzd"===a?l.html(f.nzd+t.last):"pln"===a?l.html(f.pln+t.last):"ron"===a?l.html(f.ron+t.last):"rub"===a?l.html(f.rub+t.last):"sek"===a?l.html(f.sek+t.last):"sgd"===a?l.html(f.sgd+t.last):"usd"===a?l.html(f.usd+t.last):"zar"===a&&l.html(f.zar+t.last)})}function l(){return window.devicePixelRatio>1||2===window.devicePixelRatio?!0:void console.log("Non Retina")}function a(){u=r.val(),d=u,localStorage.setItem("userCurrency",d),t(d)}function e(){null===g||0>g?(d="usd",localStorage.setItem("userCurrency",d),t(d)):(d=g,r.val(d),t(d))}function n(){var t=$(".loader"),a=l(),e;e=a===!0?520:260,t.circleProgress({value:1,size:e,thickness:4,lineCap:"round",emptyFill:"rgba(255, 255, 255, 0.05)",fill:{gradient:["#5BD8E4","#0099FF"]},animation:{duration:h*m},animationStartValue:0}),console.log(e)}function s(){var t=$(".settings");t.toggleClass("active")}function i(){c.hide(),l(),e(),n(),t(),$(".status").addClass("active")}var r=$("#user-currency"),o=$(".settings__btn-open"),c=$(".settings__btn-close"),u,d,g;g=localStorage.getItem("userCurrency");var m=1e3,h=15,f={aud:"$",brl:"R$",cad:"$",cny:"¥",eur:"€",gbp:"£",hkd:"HK$",idr:"Rp",ils:"₪",jpy:"¥",mxn:"$",nok:"kr",nzd:"$",pln:"zł",ron:"L",rub:"₽",sek:"kr",sgd:"S$",usd:"$",zar:"Z"};c.click(function(){$(this).fadeOut(200),o.fadeIn(200).toggleClass("active"),s()}),o.click(function(){$(this).fadeOut(300).toggleClass("active"),c.fadeIn(200),s()}),r.change(function(){c.fadeOut(200),o.fadeIn(200).toggleClass("active"),s(),a()}),i(),setInterval(function(){t(),n()},h*m)});