
//const skills: string[] = ['Bash', 'Counter', 'Healing'];

interface constantes {
    name: string;
    hp: number;
    skills: string[];
    mounthaus?: string;
}

const strider: constantes = {
    name: 'Strinder',
    hp: 100,
    skills: ['Bash', 'Conunter']
}

strider.mounthaus = 'Revendell';

console.table(strider)

export{};