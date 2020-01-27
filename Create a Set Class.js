/* Create an add method that adds a unique value to the set collection and returns true if the value was successfully
added and false otherwise.
Create a remove method that accepts a value and checks if it exists in the set. If it does, then this method should
remove it from the set collection, and return true. Otherwise, it should return false. Create a size method that returns
the size of the set collection.
 */

class Set {
    constructor() {
        // collection will hold our set
        this.collection = [];
    }
    // this method will check for the presence of an element and return true or false
    has(element) {
        return this.collection.indexOf(element) !== -1;
    }
    // this method will return all the values in the set
    values() {
        return this.collection;
    }
    // change code below this line

    // write your add method here
    add(item) {
        if (!this.collection.includes(item)) {
            this.collection.push(item);
            return true;
        } else {
            return false;
        }
    }
    // write your remove method here
    remove(el) {
        if (this.collection.indexOf(el) !== -1) {
            this.collection.splice(this.collection.indexOf(el), 1);
            return true;
        }
        return false;
    }
    // write your size method here
    size() {
        return this.collection.length;
    }
    // change code above this line
}