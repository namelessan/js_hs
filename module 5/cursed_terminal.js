// Require the Blessed API.
var Blessed = require('blessed');

// Initialize the screen widget.
var screen = Blessed.screen({
  // Example of optional settings:
  smartCSR: true,
  useBCE: true,
  cursor: {
    artificial: true,
    blink: true,
    shape: 'underline'
  },
  log: `${__dirname}/application.log`,
  debug: true,
  dockBorders: true
});

// Specify the title of the application.
screen.title = 'La pizza de Don Cangrejo.';

// Creating a textarea on the bottom of the screen.
var input = Blessed.textarea({
  bottom: 0,
  height: 3,
  inputOnFocus: true,
  padding: {
    top: 1,
    left: 2
  },
  style: {
    fg: '#787878',
    bg: '#454545',

    focus: {
      fg: '#f6f6f6',
      bg: '#353535'
    }
  }
});

// Append the widget to the screen.
screen.append(input);

// Render the screen.
screen.render();

// Quit on `q`, or `Control-C` when the focus is on the screen.
screen.key(['q', 'C-c'], function(ch, key) {
  process.exit(0);
});

// Focus on `escape` or `i` when focus is on the screen.
screen.key(['escape', 'i'], function() {
  // Set the focus on the input.
  input.focus();
});

// If box is focused, handle `Control+s`.
input.key('C-s', function(ch, key) {
  var message = this.getValue();
  // Send the message somehow.
  this.clearValue();
  screen.render();
});
