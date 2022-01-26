let state = [
        {
        mass1: 1,
        mass2: 2,
        mass3: 3,
        mass4: 4,
        mass5: 5,
        mass6: 6,
        mass7: 7,
        mass8: 8,
        mass9: 9,
        mass10: 10
    }
]

let allMass = (state) => {
    return [...state];
}

console.log(allMass(state));
console.log(...state);