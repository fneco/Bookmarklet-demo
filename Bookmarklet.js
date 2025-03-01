javascript: (function () {
  s = document.createElement("script");
  s.src = `http://localhost:3000/hello.iife.js?v=${new Date().getTime()}`;
  document.body.appendChild(s);
})();
