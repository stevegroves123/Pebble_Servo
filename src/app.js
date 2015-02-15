var UI = require('ui');
var ajax = require('ajax');
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
      url: 'http://192.168.1.87/?S=1',
      type:'post'
    },
    function(data) 
    { 
      return_page.title('Up ');
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
      url: 'http://192.168.1.87/?S=0',
      type:'post'
    },
    function(data) 
    { 
      return_page.title('Down ');
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
      url: 'http://192.168.1.87/?S=-1',
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