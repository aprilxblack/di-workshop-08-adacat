class AdaCat {
  constructor(name, owner) {
    this.name = name
    this.owner = owner
    this.hunger = 5
    this.isSleeping = false
    this.size = 30
    this.tiredness = 0;
    this.message = '';
    this.warningMessage = '';
    this.didGoToVet = false;
  }

  setHunger(newHunger) {
    if (newHunger < 0) {
      newHunger = 0
    }
    if (newHunger > 10) {
      newHunger = 10
    }
    this.hunger = newHunger
  }

  getDescription() {
    var sleepLine
    var healthScore = this.getHealth();
    if(healthScore == 0){
      this.warningMessage = 'take your cat to the vet'
    }
    else{
      this.warningMessage = ''
    }
    if (this.isSleeping) {
      sleepLine = 'Shh! ' + this.name + ' is sleeping.'
    } else {
      sleepLine = this.name + ' is awake.'
    }
    var lines = [
      this.name + ' is a cat. they belong to ' + this.owner + '.',
      'their hunger level is ' + this.hunger + '/10.',

      'they weigh ' + this.size + ' tonnes.',
      'their health is ' + healthScore + '/30.',
      sleepLine,
      'their tiredness level is ' + this.tiredness + '/15',
      this.message,
      this.warningMessage
    ]

    return lines.join('\n')
  }

  feed() {
   
      
    var hunger;
    if(!this.isSleeping){
      hunger = this.hunger - 1
      if (this.tiredness < 15){
        this.tiredness++;
      }
  
      this.message = 'the cat is eating';
      
      if (hunger < 3) {
        this.size = this.size + 1
      }
    }
    else{
      hunger = this.hunger;
      this.message = 'you cannot feed a cat while it`s sleeping';
    }


    this.setHunger(hunger)
    
  }

  nap() {
    this.isSleeping = true
    this.tiredness = 0;
    this.message = 'the cat is napping';
  }

  wakeUp() {
    this.isSleeping = false
    this.message = 'the cat just woken up';
  }

  play() {
    var hunger = this.hunger + 3
    if (hunger > 7) {
      this.size = this.size - 1
    }
    this.setHunger(hunger)

    if(this.tiredness <= 12){
      this.tiredness += 3;
    }
    else if(this.tiredness == 13){
      this.tiredness += 2;
    }
    else if(this.tiredness == 14){
      this.tiredness++;
    }
    this.message = 'the cat is playing';
  }

  getToVet(){
    this.didGoToVet = true;
    this.message = 'the cat is healing <3'
  }

  getHealth() {
    // the ideal weight for cats is 30
    // this futher they are from this, the less
    // healthy they are
    var sizeDifferenceFromIdeal = Math.abs(this.size - 30)

    // sizeScore starts at thirty, and gets
    // smaller as the cat's size gets further
    // from the ideal weight
    var sizeScore = 30 - sizeDifferenceFromIdeal

    // health score gets lower as the cat gets
    // more hungry
    var healthScore = sizeScore - this.hunger

    // max returns the biggest value, so health
    // will never go below 0
    if (healthScore < 0) {
      healthScore = 0
    }

    if(this.didGoToVet){
      healthScore = 30;
      this.didGoToVet = false;
    }
    return healthScore
  }
}

module.exports = AdaCat
