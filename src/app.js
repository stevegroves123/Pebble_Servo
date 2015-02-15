// ******************
// * Servo control  *
// * Steve Groves   *
// * Feb 2015       *
// ******************

var UI = require('ui');
var ajax = require('ajax');
var url = 'http://192.168.1.87';
var main = new UI.Card({
  title: 'Servo.js',
  body: '\nPress any button'
});

main.show();

// Move servo arm to the right
main.on('click', 'up', function(e) {
  var return_page = new UI.Card();
  ajax(
    {
      url: url + '/?S=1',
      type:'post'
    },
    function(data) 
    { 
      return_page.title('Right ');
      return_page.body('\nit worked');
      return_page.show();
    },
    function(error) 
    {
      // Failure!
      return_page.title('Failed ' + error);
      return_page.show();
    }
    );
});

// Move servo arm to the left
main.on('click', 'down', function(e) {
  var return_page = new UI.Card();
  ajax(
    {
      url: url + '/?S=0',
      type:'post'
    },
    function(data) 
    { 
      return_page.title('Left ');
      return_page.body('\nit worked');
      return_page.show();
    },
    function(error) 
    {
      // Failure!
      return_page.title('Failed ' + error);
      return_page.show();
    }
    );
});

// Centre the servo arm
main.on('click', 'select', function(e) {
  var return_page = new UI.Card();
  ajax(
    {
      url: url + '/?S=-1',
      type:'post'
    },
    function(data) 
    { 
      return_page.title('Centre ');
      return_page.body('\nit worked');
      return_page.show();
    },
    function(error) 
    {
      // Failure!
      return_page.title('Failed ' + error);
      return_page.show();
    }
    );
});