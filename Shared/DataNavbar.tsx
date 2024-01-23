// const CityList=[
//     {
//         "id":1,
//         "nama":"Indonesia",
//         "is_locked": false

//     },
//     {
//         "id": 2,
//         "nama": "Jakarta",
//         "is_locked": false
//     },
//     {
//         "id": 3,
//         "nama": "Purwokerto",
//         "is_locked": false
//     },
//     {
//         "id": 4,
//         "nama": "Solo",
//         "is_locked": false
//     },
//     {
//         "id": 5,
//         "nama": "Jogja",
//         "is_locked": false
//     },
//     {
//         "id": 6,
//         "nama": "Bandung",
//         "is_locked": false
//     },
//     {
//         "id": 7,
//         "nama": "Bali",
//         "is_locked": false
//     },
//     {
//         "id": 8,
//         "nama": "Depok",
//         "is_locked": false
//     },
//     {
//         "id": 9,
//         "nama": "Bogor",
//         "is_locked": false
//     },
//     {
//         "id": 10,
//         "nama": "Semarang",
//         "is_locked": false
//     },
//     {
//         "id": 11,
//         "nama": "Tangerang",
//         "is_locked": false
//     },
//     {
//         "id": 12,
//         "nama": "Bekasi",
//         "is_locked": false
//     },
//     {
//         "id": 13,
//         "nama": "Surabaya",
//         "is_locked": false
//     },
//     {
//         "id": 14,
//         "nama": "Malang",
//         "is_locked": false
//     }
// ]

const IconPropsCategory=[
    {
        "id": 1,
        "nama": "Mall",
        "icon": "faBuilding"
    },
    {
        "id": 2,
        "nama": "Taman Hiburan",
        "icon": "faDungeon"
    },
    {
        "id": 3,
        "nama": "CoffeShop",
        "icon": "faMugHot"
    },
    {
        "id": 4,
        "nama": "Cafe",
        "icon": "faMartiniGlassCitrus"
    },
    {
        "id": 5,
        "nama": "Restoran",
        "icon": "faBurger"
    },
    {
        "id": 6,
        "nama": "Gunung",
        "icon": "faMountainSun"
    },
    {
        "id": 7,
        "nama": "Pantai",
        "icon": "faUmbrellaBeach"
    },
    {
        "id": 8,
        "nama": "Bioskop",
        "icon": "faFilm"
    },
    {
        "id": 9,
        "nama": "Danau",
        "icon": "faWater"
    },
    {
        "id": 10,
        "nama": "Hutan",
        "icon": "faTree"
    },
    {
        "id": 11,
        "nama": "Air Terjun",
        "icon": "faBinoculars"
    },
    {
        "id": 12,
        "nama": "Land Mark",
        "icon": "faLandmark"
    },
    {
        "id": 13,
        "nama": "Taman",
        "icon": "faTreeCity"
    },
    {
        "id": 14,
        "nama": "Vibes Kota",
        "icon": "faCity"
    },
    {
        "id": 15,
        "nama": "Gratis",
        "icon": "faGift"
    },
    {
        "id": 16,
        "nama": "Mendaki",
        "icon": "faPersonHiking"
    },
    {
        "id": 17,
        "nama": "Snorkeling",
        "icon": "faFishFins"
    },
    {
        "id": 18,
        "nama": "Hangout",
        "icon": "faPeopleGroup"
    }
]

const CityList=[
    {
        "id":1,
        "nama":"Jakarta",
        "is_locked": false,
        "ListCategory" : [1,2,3],
    },
    {
        "id": 2,
        "nama": "Jaksel",
        "is_locked": false,
        "ListCategory" : [1,2,3],
    },
    {
        "id": 3,
        "nama": "Jakpus",
        "is_locked": false,
        "ListCategory" : [1,2,3],
    },
    {
        "id": 4,
        "nama": "Jakut",
        "is_locked": false,
        "ListCategory" : [1,2,3],
    },
    {
        "id": 5,
        "nama": "Jakbar",
        "is_locked": false,
        "ListCategory" : [1,2,3],
    },
    {
        "id": 6,
        "nama": "Jaktim",
        "is_locked": false,
        "ListCategory" : [1,2,3],
    },
    {
        "id": 7,
        "nama": "Depok",
        "is_locked": true,
        "ListCategory" : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    },
    {
        "id": 8,
        "nama": "Bandung",
        "is_locked": true,
        "ListCategory" : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    },
    {
        "id": 9,
        "nama": "Bekasi",
        "is_locked": true,
        "ListCategory" : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    },
    {
        "id": 10,
        "nama": "Bogor",
        "is_locked": true,
        "ListCategory" : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    },
    {
        "id": 11,
        "nama": "Tangerang",
        "is_locked": true,
        "ListCategory" : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],
    },
    
]



export default{
    CityList,
    IconPropsCategory,
}