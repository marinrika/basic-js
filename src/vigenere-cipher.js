const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */

class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const Q = alphabet.length;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let messageF = '';
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        messageF += message[i];
      }
    }
    for (let i = 0; i < messageF.length; i++) {
      key = key + key[i];
    }
    let result = '';
    let indexResult;
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        indexResult =
          (Q + alphabet.indexOf(messageF[j]) + alphabet.indexOf(key[j])) % Q;
        result += alphabet[indexResult];
        j++;
      } else {
        result += message[i];
      }
    }
    if (this.direct) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const alphabet = Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    const Q = alphabet.length;
    message = message.toUpperCase();
    key = key.toUpperCase();
    let messageF = '';
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        messageF += message[i];
      }
    }
    for (let i = 0; i < messageF.length; i++) {
      key = key + key[i];
    }
    let result = '';
    let indexResult;
    let j = 0;
    for (let i = 0; i < message.length; i++) {
      if (alphabet.includes(message[i])) {
        indexResult =
          (Q + alphabet.indexOf(messageF[j]) - alphabet.indexOf(key[j])) % Q;
        result += alphabet[indexResult];
        j++;
      } else {
        result += message[i];
      }
    }
    if (this.direct) {
      return result;
    } else {
      return result.split('').reverse().join('');
    }
  }
}
const directMachine = new VigenereCipheringMachine();
const reverseMachine = new VigenereCipheringMachine(false);
console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(reverseMachine.encrypt('attack at dawn!', 'alphonse'));
console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
console.log(reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));

module.exports = {
  VigenereCipheringMachine,
};
