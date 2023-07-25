"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollections = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollections extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIndex, rightIndex) {
        return (this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase());
    }
    swap(leftIndex, rightIndex) {
        const character = this.data.split("");
        const leftHand = character[leftIndex];
        character[leftIndex] = character[rightIndex];
        character[rightIndex] = leftHand;
        this.data = character.join("");
    }
}
exports.CharactersCollections = CharactersCollections;
