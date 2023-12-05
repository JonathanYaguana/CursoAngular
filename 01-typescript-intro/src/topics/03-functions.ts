function addNumbers(a:any, b:any) {
    return a + b;
}

const addNumberArrow = (a:number, b:number) => {
    return a + b;
}

function multiply (firstNumber: number, secondNumber?: number, base: number = 2){
    return firstNumber * base;
}

//const result: number = addNumbers(1, 2);
//const result2: number = addNumberArrow(1, 2);
//const multiplyResult: number = multiply(1);

//console.log({result, result2, multiplyResult})

interface Character {
    name: string;
    hp: number;
    showHp:()=> void;
}

const healcharacter = (character:Character, amount:number) => {
    character.hp += amount;
}

const strider: Character = {
    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp}`);
    }
}

healcharacter(strider, 15);
healcharacter(strider, 15);

strider.showHp();

export{};