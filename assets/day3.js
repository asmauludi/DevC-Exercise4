// function tampilkan() {
//   console.log("halo!");
// }

// tampilkan();

// function munculkanAngkaDua() {
//     return 2
// }

// var tampung = munculkanAngkaDua();
// console.log(tampung)


// function TambahDua(angka) {
//     return angka + 2
// }

// var tampung = TambahDua(2);
// console.log(tampung)

// function tampilkanAngka(angkaPertama, angkaKedua) {
//     return angkaPertama + angkaKedua
// }

// console.log(tampilkanAngka(5, 3))

// function tampilkanAngka(angka = 1) {
//     return angka
// }

// console.log(tampilkanAngka(5)) // 5, sesuai dengan nilai parameter yang dikirim
// console.log(tampilkanAngka()) // 1, karena default dari parameter adalah 1


// var fungsiPenambahan = function (angkaPertama, angkaKedua) {
//     return angkaPertama + angkaKedua
// }

// console.log(fungsiPenambahan(2, 4))

// var animals = ["Lion", "Tiger", "Puma"]
//     > animals
//     > animals[0]

//     > animals[3] = "Jaguar"
//         > animals[8] = "Leopard"
//             > animals[1] = undefined

//                 > animals

//                 > animals[5]

//                 > animals[0] = 100
//                     > animals[1] = true

//                         > animals

//                         > animals[3] =["Zero", 1, "Two"]
//                             > animals[3][3] = "Three"

// var arrChar = ['Tono', 'Budi', 'Charlie', 'Ahmad'];
// arrChar.sort();
// console.log(arrChar); //

// var arr = [0, 1, 2, 3, 4];
// var irisan1 = arr.slice(-2); // mengambil irisan array mulai dari index 1 hingga index 2 (sebelum index 3). Index 3 tidak ikut diambil.
// console.log(irisan1); 

// var kalimat = "saya adalah full-stack javascript programmer!";
// var kata = kalimat.split(" "); // kalimat dipecah dengan separator berupa spasi.
// console.log(kata);


// var supermanObj = {
//     id: "3175012308950005",
//     name: "asmauludi",
//     age: 23,
//     favorites: ["jogging", "swimming", "photography", { sports: ["parkour", "hill climbing"] }],
//     address: { street: "Jakarta", zipCode: 13110 }
// };

// console.log(supermanObj.name); // "Superman"
// console.log(supermanObj.age); // 200
// console.log(supermanObj.favorites[0]); // "coding"
// console.log(supermanObj.favorites[3].sports); // ["parkour", "hill climbing"]
// console.log(supermanObj.favorites[3].sports[0]); // "parkour"
// console.log(supermanObj.address); // {street: "Planet Krypton", zipCode: 54213}
// console.log(supermanObj.address.zipCode); //54213



var swapiTable = {
    results: [
        {
            "name": "Alderaan",
            "rotation_period": "24",
            "orbital_period": "364",
            "diameter": "12500",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grasslands, mountains",
            "surface_water": "40",
            "population": "2000000000",
            "residents": [
                "https://swapi.co/api/people/5/",
                "https://swapi.co/api/people/68/",
                "https://swapi.co/api/people/81/"
            ],
            "films": [
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T11:35:48.479000Z",
            "edited": "2014-12-20T20:58:18.420000Z",
            "url": "https://swapi.co/api/planets/2/"
        },
        {
            "name": "Yavin IV",
            "rotation_period": "24",
            "orbital_period": "4818",
            "diameter": "10200",
            "climate": "temperate, tropical",
            "gravity": "1 standard",
            "terrain": "jungle, rainforests",
            "surface_water": "8",
            "population": "1000",
            "residents": [],
            "films": [
                "https://swapi.co/api/films/1/"
            ],
            "created": "2014-12-10T11:37:19.144000Z",
            "edited": "2014-12-20T20:58:18.421000Z",
            "url": "https://swapi.co/api/planets/3/"
        },
        {
            "name": "Hoth",
            "rotation_period": "23",
            "orbital_period": "549",
            "diameter": "7200",
            "climate": "frozen",
            "gravity": "1.1 standard",
            "terrain": "tundra, ice caves, mountain ranges",
            "surface_water": "100",
            "population": "unknown",
            "residents": [],
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "created": "2014-12-10T11:39:13.934000Z",
            "edited": "2014-12-20T20:58:18.423000Z",
            "url": "https://swapi.co/api/planets/4/"
        },
        {
            "name": "Dagobah",
            "rotation_period": "23",
            "orbital_period": "341",
            "diameter": "8900",
            "climate": "murky",
            "gravity": "N/A",
            "terrain": "swamp, jungles",
            "surface_water": "8",
            "population": "unknown",
            "residents": [],
            "films": [
                "https://swapi.co/api/films/2/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:42:22.590000Z",
            "edited": "2014-12-20T20:58:18.425000Z",
            "url": "https://swapi.co/api/planets/5/"
        },
        {
            "name": "Bespin",
            "rotation_period": "12",
            "orbital_period": "5110",
            "diameter": "118000",
            "climate": "temperate",
            "gravity": "1.5 (surface), 1 standard (Cloud City)",
            "terrain": "gas giant",
            "surface_water": "0",
            "population": "6000000",
            "residents": [
                "https://swapi.co/api/people/26/"
            ],
            "films": [
                "https://swapi.co/api/films/2/"
            ],
            "created": "2014-12-10T11:43:55.240000Z",
            "edited": "2014-12-20T20:58:18.427000Z",
            "url": "https://swapi.co/api/planets/6/"
        },
        {
            "name": "Endor",
            "rotation_period": "18",
            "orbital_period": "402",
            "diameter": "4900",
            "climate": "temperate",
            "gravity": "0.85 standard",
            "terrain": "forests, mountains, lakes",
            "surface_water": "8",
            "population": "30000000",
            "residents": [
                "https://swapi.co/api/people/30/"
            ],
            "films": [
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:50:29.349000Z",
            "edited": "2014-12-20T20:58:18.429000Z",
            "url": "https://swapi.co/api/planets/7/"
        },
        {
            "name": "Naboo",
            "rotation_period": "26",
            "orbital_period": "312",
            "diameter": "12120",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "grassy hills, swamps, forests, mountains",
            "surface_water": "12",
            "population": "4500000000",
            "residents": [
                "https://swapi.co/api/people/3/",
                "https://swapi.co/api/people/21/",
                "https://swapi.co/api/people/36/",
                "https://swapi.co/api/people/37/",
                "https://swapi.co/api/people/38/",
                "https://swapi.co/api/people/39/",
                "https://swapi.co/api/people/42/",
                "https://swapi.co/api/people/60/",
                "https://swapi.co/api/people/61/",
                "https://swapi.co/api/people/66/",
                "https://swapi.co/api/people/35/"
            ],
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:52:31.066000Z",
            "edited": "2014-12-20T20:58:18.430000Z",
            "url": "https://swapi.co/api/planets/8/"
        },
        {
            "name": "Coruscant",
            "rotation_period": "24",
            "orbital_period": "368",
            "diameter": "12240",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "cityscape, mountains",
            "surface_water": "unknown",
            "population": "1000000000000",
            "residents": [
                "https://swapi.co/api/people/34/",
                "https://swapi.co/api/people/55/",
                "https://swapi.co/api/people/74/"
            ],
            "films": [
                "https://swapi.co/api/films/5/",
                "https://swapi.co/api/films/4/",
                "https://swapi.co/api/films/6/",
                "https://swapi.co/api/films/3/"
            ],
            "created": "2014-12-10T11:54:13.921000Z",
            "edited": "2014-12-20T20:58:18.432000Z",
            "url": "https://swapi.co/api/planets/9/"
        },
        {
            "name": "Kamino",
            "rotation_period": "27",
            "orbital_period": "463",
            "diameter": "19720",
            "climate": "temperate",
            "gravity": "1 standard",
            "terrain": "ocean",
            "surface_water": "100",
            "population": "1000000000",
            "residents": [
                "https://swapi.co/api/people/22/",
                "https://swapi.co/api/people/72/",
                "https://swapi.co/api/people/73/"
            ],
            "films": [
                "https://swapi.co/api/films/5/"
            ],
            "created": "2014-12-10T12:45:06.577000Z",
            "edited": "2014-12-20T20:58:18.434000Z",
            "url": "https://swapi.co/api/planets/10/"
        },
        {
            "name": "Geonosis",
            "rotation_period": "30",
            "orbital_period": "256",
            "diameter": "11370",
            "climate": "temperate, arid",
            "gravity": "0.9 standard",
            "terrain": "rock, desert, mountain, barren",
            "surface_water": "5",
            "population": "100000000000",
            "residents": [
                "https://swapi.co/api/people/63/"
            ],
            "films": [
                "https://swapi.co/api/films/5/"
            ],
            "created": "2014-12-10T12:47:22.350000Z",
            "edited": "2014-12-20T20:58:18.437000Z",
            "url": "https://swapi.co/api/planets/11/"
        }
    ]
}