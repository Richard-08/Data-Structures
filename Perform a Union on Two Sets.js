/* In this exercise we are going to perform a union on two sets of data. We will create a method on our Set data structure 
called union. This method should take another Set as an argument and return the union of the two sets, excluding any 
duplicate values.
For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], 
then the union of setA and setB is: setA.union(setB) = ['a', 'b', 'c', 'd', 'e']. */

function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function (element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function () {
        return collection;
    };
    // this method will add an element to the set
    this.add = function (element) {
        if (!this.has(element)) {
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function (element) {
        if (this.has(element)) {
            var index = collection.indexOf(element);
            collection.splice(index, 1);
            return true;
        }
        return false;
    };
    // this method will return the size of the set
    this.size = function () {
        return collection.length;
    };
    // change code below this line
    this.union = function(anotherSet){
        const newSet = new Set();
        const addToSet = el => newSet.add(el);
        this.values().forEach(addToSet);
        anotherSet.values().forEach(addToSet);
        return newSet;
    };
    // change code above this line
}

let fn = new Set();
fn.add('a');
fn.add('b');
fn.add('c');
fn.union(['d', 'e', 'c']);
console.log(fn.values());