//Exercise 6 - Part 3

class Logger {
    constructor(id) {
        this.id = Math.floor(Math.random() * 9000) + 1000;
    }

    log(message) {
        console.log(`[ID: ${this.id}]: ${message}`);
    }
}

module.exports = Logger;
