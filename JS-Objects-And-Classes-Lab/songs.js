function printSongs(songsInfoArray) {

    class Song {
        constructor(typeList, name, time){
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }

        printName() {
            console.log(this.name);
        }
    }

    let typeToPrint = songsInfoArray[songsInfoArray.length - 1];
    let songs = [];

    for (let i = 1; i < songsInfoArray.length - 1; i++) {
        let[typeList, name, time] = songsInfoArray[i].split("_");
        let song = new Song(typeList, name, time)
        songs.push(song);
    }

    for (const song of songs) {
        if (typeToPrint === "all") {
            song.printName();
        } else {

            if (typeToPrint === song.typeList) {
                song.printName();
            }
        }
    }
}