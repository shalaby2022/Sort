import { Sorter } from "./Sorter"

export class CharactersCollections extends Sorter {
  constructor(public data: string) {
    super()
  }

  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return (
      this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase()
    )
  }

  swap(leftIndex: number, rightIndex: number): void {
    const character = this.data.split("")

    const leftHand = character[leftIndex]
    character[leftIndex] = character[rightIndex]
    character[rightIndex] = leftHand

    this.data = character.join("")
  }
}