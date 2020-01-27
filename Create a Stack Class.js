/* Write a push method that pushes an element to the top of the stack, 
a pop method that removes the element on the top of the stack, 
a peek method that looks at the first element in the stack, an isEmpty method that checks if the stack is empty, 
and a clear method that removes all elements from the stack. Normally stacks don't have this, but we've added a print helper method that console logs the collection. */


function Stack() {
    let collection = [];
    this.print = function() {
      console.log(collection);
    };
    // Only change code below this line
    this.push = function(item) {
        return collection.push(item);
      }
      this.pop = function() {
        return collection.pop();
      }
      this.peek = function() {
        return collection[collection.length - 1];
      }
      this.isEmpty = function() {
        return collection.length === 0;
      }
      this.clear = function() {
        collection = [];
      }
    // Only change code above this line
  }