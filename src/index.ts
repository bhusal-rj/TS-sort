import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharacterCollection";

const numbersCollection=new NumbersCollection([10,3,-5,0]);

const characterCollection=new CharactersCollection("Rajesh");
characterCollection.sort();
console.log(characterCollection.data);
numbersCollection.sort()
console.log(numbersCollection.data)