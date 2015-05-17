// ******************
// * Servo control  *
// * Steve Groves   *
// * Feb 2015       *
// ******************

// system variables
var UI = require('ui');
var ajax = require('ajax');
var Vector2 = require('vector2');
var Vibe = require('ui/vibe');
var about_window = new UI.Window();

// Web facing IP address for home BT system
var url = 'https://db.tt/qpiRqAfI';

// Main screen
var main = new UI.Card({
  title: 'Location App',
  textAlign:'right',
  body:'\n     Location -->' + '\n\n        About -->'
});

main.show();

main.on('click', 'select', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        // index = 0
        title: 'DMH'
      }, {
        // index = 1
        title: 'BRS'
      }, {
        // index = 2
        title: 'CAR'
      }]
    }]
  });

  menu.on('select', function(e) {
    if (e.itemIndex == '2') {
       ajax(
    {
      url: url + '/?S=1',
      type:'get'
    },
    function(data) 
    { 
      Vibe.vibrate('single');
      console.log("Servo moved to Car");
    },
    function(error) 
    {
      // Failure!
      Vibe.vibrate('double');
      console.log('Did not work - Car');
      Vibe.vibrate('double');
    });
    }
    else if (e.itemIndex == '1'){
      ajax(
    {
      url: url + '/?S=-1',
      type:'get'
    },
    function(data) 
    { 
      // success
      Vibe.vibrate('single');
      console.log("Servo moved to Bromley South");
    },
    function(error) 
    {
      // Failure!
      Vibe.vibrate('double');
      console.log('Did not work - Bromley South');
      Vibe.vibrate('double');
    });
    }
    else if (e.itemIndex == '0'){
      ajax(
    {
      url: url + '/?S=0',
      type:'get'
    },
    function(data) 
    { 
      // success
      Vibe.vibrate('single');
      console.log("Servo moved to DMK");
    },
    function(error) 
    {
      // Failure!
      Vibe.vibrate('double');
      console.log('Did not work - DMK');
      Vibe.vibrate('double');
    });
    }
  });
  menu.show();
});

// About screen
main.on('click', 'down', function(e) {
  var text = new UI.Text({
    position: new Vector2(0, 0),
    size: new Vector2(144, 168),
    text:'Steve Groves \nFeb 2015 \n\nJavaScript app for Pebble',
    font: 'gothic_28_bold',
    color:'white',
    textOverflow:'wrap',
    textAlign:'right',
    backgroundColor:'black'
  });
  about_window.add(text);
  about_window.show();
});