class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return this.assumption = Math.round((this.min + this.max) / 2);
    }

    lower() {
        if (this.min < this.max) {
            this.max = this.assumption;
        }
    }

    greater() {
        if (this.min < this.max) {
            this.min = this.assumption;
        }
    }
}

module.exports = GuessingGame;
