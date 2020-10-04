setInterval(function() {

  var w = window,
  d = document,
  e = d.documentElement,
  g = d.getElementsByTagName('body')[0],
  x = w.innerWidth || e.clientWidth || g.clientWidth,
  y = w.innerHeight|| e.clientHeight|| g.clientHeight;

  var iframeHeight = (x*3.5)/100;
  var iframe = document.getElementsByTagName("iframe")[0];
  iframe.style.height = (iframeHeight) + "px";
  
}, 100);