import { CharactersCollections } from "./CharactersCollection"
import { LinkedList } from "./Linked_list"
import { NumbersCollection } from "./NumbersCollection"

// number collection
const numberCollection = new NumbersCollection([10, -3, -6, 3, 5])
numberCollection.sort()
console.log(numberCollection.data)
console.log("#########################")

// character collection
const charactersCollections = new CharactersCollections("XorWvAb")
charactersCollections.sort()
console.log(charactersCollections.data)
console.log("#########################")

//linked list collection
const linkedKist = new LinkedList()
linkedKist.add(10)
linkedKist.add(-20)
linkedKist.add(40)
linkedKist.add(-30)
linkedKist.add(34)
linkedKist.sort()
linkedKist.print()
console.log("#########################")

/* -------------------------------------------------------------------------- */
/*                         Before using Abstract class                        */
/* -------------------------------------------------------------------------- */
//linked list collection
// const linkedKist = new LinkedList()
// linkedKist.add(10)
// linkedKist.add(-20)
// linkedKist.add(40)
// linkedKist.add(-30)
// linkedKist.add(34)
// const sorter = new Sorter(linkedKist)
// sorter.sort()
// linkedKist.print()

// number collection
// const numberCollection = new NumbersCollection([10, -3, -6, 3, 5])
// const sorter = new Sorter(numberCollection)
// sorter.sort()
// console.log(sorter.collection)

// character collection
// const charactersCollections = new CharactersCollections("ahmed")
// const sorter = new Sorter(charactersCollections)
// sorter.sort()
// console.log(sorter.collection)
