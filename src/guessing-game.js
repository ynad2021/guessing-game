class GuessingGame {
    constructor() {}

    setRange(min, max) {
    this.min = min;
    this.max = max;
    }

    guess() {
    return Math.round((this.max + this.min) / 2);
    }

    lower() {
    this.max = Math.round((this.max + this.min) / 2);
    return this.max;
    }

    greater() {
    this.min = Math.round((this.max + this.min) / 2);
    return this.min;
    }
}

module.exports = GuessingGame;
