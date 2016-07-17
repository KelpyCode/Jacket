/*
MIT License

Copyright (c) 2016 Xaotic / Chloroform Towel

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

if(typeof jQuery === typeof undefined){
  console.warn("jQuery is undefined. Jacket.js cannot run without jQuery!");
}else{

(function($){
  var replaces = [];
  var copy = function(t){
    var ed = document.createElement("textarea");
    ed.value = t;
    ed.height = 1;
    ed.width = 1;
    document.body.appendChild(ed);
    ed.select();
    try {
      var successful = document.execCommand('copy');
    } catch (error) {
    }
    document.body.removeChild(ed);
  };

  $.fn.jacket = function(){
    var args = arguments;
    switch (args.length){
      case 0:{
        $(this).unbind("copy");
        return this;
      }
      case 1:{
        $(this).bind("copy",function(e){
          copy(args[0]);
          e.originalEvent.preventDefault();
        });
        return this;
      }
    }
  };
})(jQuery);

}
