/* In this exercise we are going to perform an intersection on 2 sets of data. We will create a method on our Set data 
structure called intersection. An intersection of sets represents all values that are common to two or more sets. This 
method should take another Set as an argument and return the intersection of the two sets.
For example, if setA = ['a','b','c'] and setB = ['a','b','d','e'], then the intersection of setA and setB is: 
setA.intersection(setB) = ['a', 'b']. */

function Set() {
    // the var collection will hold the set
    var collection = [];
    // this method will check for the presence of an element and return true or false
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    // this method will return all the values in the set
    this.values = function() {
        return collection;
    };
   // this method will add an element to the set
    this.add = function(element) {
        if(!this.has(element)){
            collection.push(element);
            return true;
        }
        return false;
    };
    // this method will remove an element from a set
    this.remove = function(element) {
        if(this.has(element)){
           var index = collection.indexOf(element);
            collection.splice(index,1);
            return true;
        }
        return false;
    };
    // this method will return the size of the collection
    this.size = function() {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function(otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function(e){
            unionSet.add(e);
        });
        secondSet.forEach(function(e){
            unionSet.add(e);
        });
        return unionSet;
    };
    // change code below this line
    this.intersection = function(otherSet) {
        let intersectionSet = new Set();
        const firstSet = this.values();
        firstSet.forEach(value => {
            if (otherSet.has(value)) {
                intersectionSet.add(value);
            }
        });
        return intersectionSet;
    }
    // change code above this line
}