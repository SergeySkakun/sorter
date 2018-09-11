class Sorter {
  constructor() {
    this.array = [];
    this.comparator = 0;
  }

  add(element) {
    this.array.push(element);
  }

  at(index) {
    return this.array[index];
  }

  get length() {
    return this.array.length;
  }

  toArray() {
    return this.array;
  }

  sort(indices) {
    let sortArray = [];

    indices.forEach(element => {
      sortArray.push(this.array[element]);
    });

    indices.sort( (a, b) => a - b);

    if (this.comparator == false) {
      sortArray.sort( (a, b) => a - b);
    }
    else {
      sortArray.sort(this.comparator);
    }
    

    sortArray.forEach( (element, index) => {
      let i = indices[index];
      this.array[i] = element;
    });
  }

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;