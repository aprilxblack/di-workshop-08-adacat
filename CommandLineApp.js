var readlineSync = require('readline-sync')
var AdaCat = require('./AdaCat')

class CommandLineApp {
  constructor() {
    this.cat = null
  }

  start() {
    this.setup()

    var shouldContinue = true
    while (shouldContinue) {
      this.showCatStatus()
      shouldContinue = this.runCommand()
    }
  }

  setup() {
    //process.stdin.isTTY = process.stdout.isTTY = true;
    var owner = readlineSync.question('What is your name? ')
    var name = readlineSync.question('What would you like to name your cat? ')

    this.cat = new AdaCat(name, owner)
  }

  runCommand() {
    var commandIndex = readlineSync.keyInSelect(
      ['Feed cat', 'Play with cat', 'Tell cat to nap', 'Wake up cat', 'Take to vet'],
      'What would you like to do?'
    )

    if (commandIndex === -1) {
      console.log('byeeeee')
      return false
    } else if (commandIndex === 0) {
      console.log('You feed your cat.')
      this.cat.feed()
    } else if (commandIndex === 1) {
      console.log('You play with your cat.')
      this.cat.play()
    } else if (commandIndex === 2) {
      console.log('Your cat curls up to sleep.')
      this.cat.nap()
    } else if (commandIndex === 3) {
      console.log('Your cat wakes up, yawns, and stretches.')
      this.cat.wakeUp()
    }
    else if (commandIndex === 4) {
    console.log('You took your cat to the vet.')
    this.cat.getToVet()
    } else {
      console.log("I don't understand :(")
    }

    return true
  }

  showCatStatus() {
    var ears = ' /\\___/\\'
    var eyes = '( o   o )'
    if(this.cat.isSleeping){
      eyes = '( _   _ )';
    }

    var mouth = '(  =^=  )'
    var body1 = '(        )'
    var body2 = '(         )'
    var body3 = '(          ))))))))))) '

    if (this.cat.size >=20 && this.cat.size <= 40){
      ears = ' /\\___/\\'
      eyes = '( o   o )'
      if(this.cat.isSleeping){
        eyes = '( _   _ )';
      }
      mouth = '(  =^=  )'
      body1 = '(        )'
      body2 = '(         )'
      body3 = '(          ))))))))))) '
    }
    else if (this.cat.size > 40 && this.cat.size <= 60){
      ears = ' /\\_______/\\'
      eyes = '(   o   o   )'
      if(this.cat.isSleeping){
        eyes = '(   _   _   )';
      }
      mouth = '(    =^=    )'
      body1 = '(            )'
      body2 = '(             )'
      body3 = '(              ))))))))))) '
    }
    else if(this.cat.size > 60){
      ears = ' /\\___________/\\'
      eyes = '(     o   o     )'
      if(this.cat.isSleeping){
        eyes = '(     _   _     )';
      }
      mouth = '(      =^=      )'
      body1 = '(                )'
      body2 = '(                 )'
      body3 = '(                  ))))))))))) '
    }
    else if (this.cat.size < 20){
      ears = ' /\\_/\\'
      eyes = '(o   o)'
      if(this.cat.isSleeping){
        eyes = '(_   _)';
      }
      mouth = '( =^= )'
      body1 = '(      )'
      body2 = '(       )'
      body3 = '(        ))))))))))) '
    }

    console.log('')
    console.log(ears)
    console.log(eyes);
    console.log(mouth);
    console.log(body1);
    console.log(body2);
    console.log(body3);
    console.log('')
    var catDescription = this.cat.getDescription()
    console.log(catDescription)
  }
}

module.exports = CommandLineApp
