'use strict';

(function () {

  // Go fetch our data and do soemthing with it

  var url = 'http://json-data.herokuapp.com/forms';
  var promise = $.getJSON(url);

  promise.then(function (response) {
    console.log(response);
  });

  // Templates
  var textData = function textData(obj) {
    var template = '\n  <div class="text-input">\n  <input type="' + type + '" placeholder="' + obj.label + '" id="' + id + '">\n  <i class="fa ' + obj.icon + '" ></i>\n  </div>\n  ';
    return template;
  };

  // Our "Do Something" Function
  var dosomething = function dosomething(arr) {

    _.each(arr, function (item) {

      var htmlBlock;

      if (item.type === 'text') {
        htmlBlock = textInput(item);
      }

      $('form').append(htmlBlock);
    });
  };
})();