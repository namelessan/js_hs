// class solutions
class GuessSecret {
  constructor(value, times = 3) {
    let timeLeft = times;
    this.try = function (guess) {
      if (timeLeft === 0) {
        console.log(
          'Sorry, no guesses left. The secret can never be revealed.'
        );
        return;
      }

      if (timeLeft > 0 && value !== guess) {
        timeLeft--;
        console.log(
          `You guess wrong.${timeLeft} left${timeLeft > 1 ? 's' : ''}`
        );
        return;
      }

      console.log('The secret has been revealed!');
      this.secret = value;
      delete this.try;
    };
  }
}

// function solution
const GuessSecret = function guessSecret(value, times = 3) {
  let timeLeft = times;
  this.try = function (guess) {
    if (timeLeft === 0) {
      console.log('Sorry, no guesses left. The secret can never be revealed.');
      return;
    }

    if (timeLeft > 0 && value !== guess) {
      timeLeft--;
      console.log(`You guess wrong.${timeLeft} left${timeLeft > 1 ? 's' : ''}`);
      return;
    }

    console.log('The secret has been revealed!');
    this.secret = value;

    if (this.secret) {
      delete this.try;
    }
  };
};

// const home = new GuessSecret('home');

// console.log(Object.getOwnPropertyNames(home)); // $> [ 'try' ]

// home.try('cat'); // $> You guessed wrong. 2 tries left.

// home.try('spaceship'); // $> You guessed wrong. 1 try left.

// home.try('potato'); // $> You guessed wrong. 0 tries left.

// home.try('home'); // $> Sorry, no guesses left. The secret can never be revealed.

// console.log(Object.getOwnPropertyNames(home)); // $> [ 'try' ]

// const nb = new GuessSecret(25, 10);

// console.log(Object.getOwnPropertyNames(nb)); // $> [ 'try' ]

// nb.try('25'); // $> You guessed wrong. 9 tries left.

// nb.try(25); // $> The secret has been revealed!

// console.log(Object.getOwnPropertyNames(nb)); // $> [ 'secret' ]
