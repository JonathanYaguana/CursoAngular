interface AudioPlayer {
    audioVolumen: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {

    audioVolumen: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Zoe',
        year: 2015
    }
}

const song = "New song";

const {song:anotherSong, songDuration:duration, details} = audioPlayer;

const {author:anotherAuthor} = details;

//console.log('Song', song)
//console.log('NSong: ', anotherSong);
//console.log('Duration: ', duration);
//console.log('Author: ', anotherAuthor);

const [, , trunsk='No Found']: string[] = ['Goku', 'Vegeta'];

//const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
//const trunsk = dbz[3] || 'Personaje no existe';

console.error('Personaje 3:', trunsk);

export {};