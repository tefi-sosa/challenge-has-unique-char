const pokemon = Object.freeze([
    { "id": 1, "name": "Bulbasaur", "types": ["poison", "grass"] },
    { "id": 5, "name": "Charmeleon", "types": ["fire"] },
    { "id": 9, "name": "Blastoise", "types": ["water"] },
    { "id": 12, "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16, "name": "Pidgey", "types": ["normal", "flying"] },
    { "id": 23, "name": "Ekans", "types": ["poison"] },
    { "id": 24, "name": "Arbok", "types": ["poison"] },
    { "id": 25, "name": "Pikachu", "types": ["electric"] },
    { "id": 37, "name": "Vulpix", "types": ["fire"] },
    { "id": 52, "name": "Meowth", "types": ["normal"] },
    { "id": 63, "name": "Abra", "types": ["psychic"] },
    { "id": 67, "name": "Machamp", "types": ["fighting"] },
    { "id": 72, "name": "Tentacool", "types": ["water", "poison"] },
    { "id": 74, "name": "Geodude", "types": ["rock", "ground"] },
    { "id": 87, "name": "Dewgong", "types": ["water", "ice"] },
    { "id": 98, "name": "Krabby", "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime", "types": ["psychic"] },
    { "id": 133, "name": "Eevee", "types": ["normal"] },
    { "id": 144, "name": "Articuno", "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos", "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres", "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair", "types": ["dragon"] }
]);

// an array of pokémon objects where the id is evenly divisible by 3


// an array of pokémon objects that are "fire" type
let isFireType = pokemon.filter( ( pokemon_object ) => pokemon_object.types.includes("fire") );
console.log(isFireType)

// an array of pokemon objects that have more than one type
let more_than_one_type = pokemon.filter(( pokemon_object ) => pokemon_object.types.length > 1);
console.log(more_than_one_type)

// an array with just the names of the pokemon
let just_names = pokemon.map( ( pokemon_object ) => pokemon_object.name )
console.log(just_names);

// an array with just the names of pokemon with an id greater than 99
let highIdName = pokemon.filter((pokemon_object) => pokemon_object.id > 99).map((pokemon_object) => pokemon_object.name)
console.log(highIdName)

// an array with just the names of the pokemon whose only type is poison
let poisonType = pokemon.filter((pokemon_object) => pokemon_object.types[0] === "poison" && pokemon_object.types.length === 1).map( ( pokemon_object ) => pokemon_object.name )
console.log(poisonType);

// an array containing just the first type of all the pokemon whose second type is 'flying'
let second_flying = pokemon.filter( ( pokemon_object ) => pokemon_object.types[1] === "flying" ).map( ( pokemon_object ) => pokemon_object.types[0] )
console.log(second_flying);

// a  count of the number of pokemon that are normal type
let onlyNormalType = pokemon.filter( ( pokemon_object ) => pokemon_object.types[0] === "normal" ).length;
console.log(onlyNormalType)
