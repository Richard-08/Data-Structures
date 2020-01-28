/* In this exercise we are going to perform a subset test on 2 sets of data. We will create a method on our Set data 
structure called subset. This will compare the first set, against the second and if the first set is fully contained 
within the Second then it will return true.
For example, if setA = ['a','b'] and setB = ['a','b','c','d'], then the subset of setA and setB is: setA.subset(setB) 
should be true. */

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
    // this method will return the size of the collection
    this.size = function () {
        return collection.length;
    };
    // this method will return the union of two sets
    this.union = function (otherSet) {
        var unionSet = new Set();
        var firstSet = this.values();
        var secondSet = otherSet.values();
        firstSet.forEach(function (e) {
            unionSet.add(e);
        });
        secondSet.forEach(function (e) {
            unionSet.add(e);
        });
        return unionSet;
    };
    // this method will return the intersection of two sets as a new set
    this.intersection = function (otherSet) {
        var intersectionSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (otherSet.has(e)) {
                intersectionSet.add(e);
            }
        });
        return intersectionSet;
    };
    // this method will return the difference of two sets as a new set
    this.difference = function (otherSet) {
        var differenceSet = new Set();
        var firstSet = this.values();
        firstSet.forEach(function (e) {
            if (!otherSet.has(e)) {
                differenceSet.add(e);
            }
        });
        return differenceSet;
    };
    // change code below this line
    this.subset = function (otherSet) {
        let firstSet = this.values();
        for (let i = 0; i < firstSet.length; i += 1) {
            if (!otherSet.has(firstSet[i])) {
                return false;
            }
        }
        return true;
    }
    // change code above this line
}