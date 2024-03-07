import Character from '../js/Сharacter';

export default class Magician extends Character {
  constructor(name) {
      super(name, 'Magician');
      this.attack = 10;
      this.defence = 40;
  }
}