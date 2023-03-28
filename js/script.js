//task1
/*const testPosts = [
    {
        postId: 234,
        author: 'robd',
        commentsQty: 5,
    },
    {
        postId: 823,
        author: 'sady',
    },
    {
        postId: 161,
        author: 'merryl',
        commentsQty: 8,
    }
]
let changedPosts = JSON.parse(JSON.stringify(testPosts))//cloning array 

changedPosts.forEach(item => {
    item.postAuthor = item.author
    item.postCommentsQty = item.commentsQty
    item.postId += 1000
    delete item.author 
    delete item.commentsQty
    if(item.postCommentsQty == undefined){
        item.postCommentsQty = 0
    }
    
})
console.log(testPosts);
console.log(changedPosts);
*/

//task2
let hotel = [
    [
        {
            room: 1,
            price: 300,
            brand: "Luxe",
            children: false,
        },
        {
            room: 2,
            price: 4000,
            brand: "Deluxe",
            children: true,
        },
        {
            room: 3,
            price: 1000,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 4,
            price: 900,
            brand: "Luxe",
            children: true,
        }
    ],
    [
        {
            room: 5,
            price: 700,
            brand: "Luxe",
            children: true,
        },
        {
            room: 6,
            price: 79000,
            brand: "President",
            children: true,
        },
        {
            room: 7,
            price: 600,
            brand: "Luxe",
            children: false,
        },
        {
            room: 8,
            price: 950,
            brand: "Luxe",
            children: true,
        }
        ],
        [
        {
            room: 9,
            price: 1900,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 10,
            price: 5000,
            brand: "Deluxe",
            children: true,
        },
        {
            room: 11,
            price: 1000,
            brand: "Deluxe",
            children: false,
        },
        {
            room: 12,
            price: 250,
            brand: "Luxe",
            children: false,
        }
    ],
    [
        {
            room: 13,
            price: 10000,
            brand: "President",
            children: true,
        },
        {
            room: 14,
            price: 8000,
            brand: "President",
            children: false,
        }
    ]
];
//console.log(hotel);
let brands = {
    president: [],
    deluxe: [],
    luxe: [],
};
let rooms = {
    allRooms: [],
    rooms: 0,
};
let roomLevel = {
    perviy: 0,
    vtoroy: 0,
    tretiy: 0,
    chetvertiy: 0,
};
let prices = []
let childrenRoom = []
hotel.forEach(element =>{
    childrenRoom.push(element.filter(item => item.children == true))


    element.forEach(item => {
        
        item.eating = true
        prices.push(item.price)
        prices = prices.sort((a, b) => a - b)


        if(item.price >= prices[prices.length - 1] && item.brand == 'President'){
            theMostPriceyRoom = item
        }


        if(item.brand === "President"){
            brands.president.push(item)
        }else if (item.brand === "Deluxe"){
            brands.deluxe.push(item)
        }else if(item.brand === "Luxe"){
            brands.luxe.push(item)
        }


        for(item of element){
            if (item.eating == true) {
                item.eating = false
            }else{
                item.eating = true
            }//только для разнообразия ничего личного
        }
        
    })

})


rooms.rooms = hotel.flat(Infinity).length 
rooms.allRooms = hotel.flat(Infinity)
let sum = prices.reduce((a,b)=>a+b)


roomLevel.perviy = hotel[0].reduce((zero, item ) => zero + item.price, 0)
roomLevel.vtoroy = hotel[1].reduce((zero, item ) => zero + item.price, 0)
roomLevel.tretiy = hotel[2].reduce((zero, item ) => zero + item.price, 0)
roomLevel.chetvertiy = hotel[3].reduce((zero, item ) => zero + item.price, 0)


console.log(brands);
console.log(`Сумма всех комнат в отлеле: ${sum}`);
console.log(roomLevel);
console.log(`Children in the room ${childrenRoom}`);
