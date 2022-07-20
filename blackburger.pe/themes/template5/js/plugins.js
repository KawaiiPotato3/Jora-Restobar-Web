// Start lazy loading effect
const lazyLoad = function() {
  var elems = document.getElementsByClassName('img-lazy');

  for(var i=0;i< elems.length;i++) {
    imgsrc = elems[i].getAttribute("data-src");
    imgurl = elems[i].getAttribute("data-style");
    objectUrl = elems[i].getAttribute("data-embed");

    if(elems[i].getAttribute("data-style") == null && elems[i].getAttribute('data-embed') == null) {
      elems[i].setAttribute("src",imgsrc);elems[i].classList.remove('img-lazy');
    } else if(elems[i].getAttribute("data-style") != null) {

      if(elems[i].getAttribute("style") != null){
        imgurl = elems[i].getAttribute("style") + ";"+ imgurl;
      }

      imgurl = elems[i].getAttribute("style") + ";"+ imgurl;
      elems[i].setAttribute("style",imgurl);elems[i].classList.remove('img-lazy');
    } else if (elems[i].getAttribute('data-embed') != null) {
      elems[i].setAttribute("data", objectUrl);
      elems[i].classList.remove('img-lazy');
    }
  }
};

document.addEventListener("scroll", lazyLoad);

setTimeout(function(){
  var elems = document.getElementsByClassName('img-lazy');

  for(var i=0;i< elems.length;i++){
    imgsrc = elems[i].getAttribute("data-src");
    imgurl = elems[i].getAttribute("data-style");
    objectUrl = elems[i].getAttribute("data-embed");

    if(elems[i].getAttribute("data-style") == null && elems[i].getAttribute('data-embed') == null) {
      elems[i].setAttribute("src",imgsrc);elems[i].classList.remove('img-lazy');
    } else if(elems[i].getAttribute("data-style")!=null) {

      if(elems[i].getAttribute("style") != null){
        imgurl = elems[i].getAttribute("style") + ";"+ imgurl;
      }

      elems[i].setAttribute("style",imgurl);elems[i].classList.remove('img-lazy');
    } else if (elems[i].getAttribute('data-embed') != null) {
      elems[i].setAttribute("data", objectUrl);
      elems[i].classList.remove('img-lazy');
    }
  }
}, 1500);

// End lazy loading effect

// Avoid `console` errors in browsers that lack a console.
(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
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

/**
 * Functions
 */

$('.claim-tooltip').tooltip({
  html: true
});

AOS.init();
