export class Person {
    //public name: string;
    //public address: string;

    constructor (
        public firstName:string,
        public lastName: string, 
        private address:string = "No address"
        )  {
        //this.name = 'Jonathan';
        //this.address = 'Ecuador';
        //this.name = name;
        //this.address = address;
    }
}

//export class Hero extends Person {
//    constructor (
//        public aLterEgo: string,
//        public ages: number,
//        public realName: string
//    ){
//        super(realName, "Lunargenta")
//    }
//}

export class Hero {

    //public person: Person;

    constructor (
        public aLterEgo: string,
        public ages: number,
        public realName: string,
        public person: Person,
    ){
        //this.person = new Person(realName);
    }
}

const Laynos = new Person("Esfermon", "Druida", "Cima de trueno");

const iroman = new Hero ("Laynos", 35, "Jonathan", Laynos);

console.log(iroman)