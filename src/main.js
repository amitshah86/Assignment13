(function () {


// Go fetch our data and do soemthing with it

var url = 'http://json-data.herokuapp.com/forms';
var promise = $.getJSON(url);

promise.then( function (response) {
  console.log(response);
});

// Templates
var textData = function (obj) {
  var template = `
  <div class="text-input">
  <input type="${ type }" placeholder="${ obj.label }" id="${ id }">
  <i class="fa ${ obj.icon }" ></i>
  </div>
  `;
  return template;

}

// Our "Do Something" Function
var dosomething = function (arr) {

  _.each(arr, function (item) {

    var htmlBlock;

if (item.type === 'text') {
  htmlBlock = textInput(item);

}

$('form').append(htmlBlock);


});

};

}());
