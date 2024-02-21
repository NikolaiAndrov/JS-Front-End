function createHero(heroesInfo) {

    class Hero {
        constructor(name, level, items) {
            this.name = name,
            this.level = level,
            this.items = items
        }
    }

    let heroes = [];

    for (const info of heroesInfo) {
        let tokens = info.split(" / ");
        let name = tokens[0];
        let level = Number(tokens[1]);
        let items = tokens[2];

        let hero = new Hero(name, level, items);
        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

createHero([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]);