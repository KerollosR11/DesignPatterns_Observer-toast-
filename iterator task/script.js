// ---------------task 1-------------

class Iterator {
    constructor(start, end, iteration) {
        this.current = start;
        this.end = end;
        this.iteration = iteration;
    }

    nextStep() {
        if (this.current >= this.end) {
            return { done: true };
        }
        const value = this.current;
        this.current += this.iteration;
        return { value, done: false };
    }

    [Symbol.iterator](){
        return this;
    }
}

function range(start, end, iteration) {
    return new Iterator(start, end, iteration);
}

let iterator1 = range(0, 5,1);
console.log(iterator1.nextStep());
console.log(iterator1.nextStep());
console.log(iterator1.nextStep());
console.log(iterator1.nextStep());
console.log(iterator1.nextStep());
console.log(iterator1.nextStep()); // done


// console.log([...range(1, 10, 1)]);

// for (const value of range(0, 10, 1)) {
// 	console.log(value);
    
// }

