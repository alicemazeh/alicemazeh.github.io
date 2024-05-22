// let openShopping = document.querySelector('.shopping');
// let closeShopping=document.querySelector('.closeShopping');
// let list=document.querySelector('.list');
// let listCard= document.querySelector('listCard');
// let body =document.querySelector('body');
// let total=document.querySelector('.total');
// let quantity=document.querySelector('.quantity');

// openShopping.addEventListener('click' , ()=>{
//     body.classList.add('active');

// }
// )
// closeShopping.addEventListener('click', ()=>{
//     body.classList.remove('active');
// }
// )
// let product = [
//     {
//       id: 1,
//       name: 'Basic Burger',
//       image: 'bas.jpg',
//       price: '14.99$',
//     },
//     {
//       id: 2,
//       name: 'Machroom Burger',
//       image: 'mushr.jpg',
//       price: '25.05$',
//     },
//     {
//       id: 3,
//       name: 'Big Tacty ',
//       image: 'tasty.jpg',
//       price: '22.05$',
//     },
//     {
//       id: 4,
//       name: 'Onion Burger',
//       image: 'onion.jpg',
//       price: '17.99$',
//     },
//     {
//       id: 5,
//       name: 'Chiken delux',
//       image: 'delux.jpg',
//       price: '28.00$',
//     },
//     {
//       id: 6,
//       name: 'BBQ Chiken ',
//       image: 'bbqq.jpg',
//       price: '14.05$',
//     },
//     {
//       id: 7,
//       name: 'Spicy Tandoori',
//       image: 'tan.jpg',
//       price: '12.99$',
//     },
//     {
//       id: 8,
//       name: 'product Hawaiin',
//       image: 'hawaiin.jpg',
//       price: '25.05$',
//     },
//     {
//       id: 9,
//       name: 'Dynamic Burger',
//       image: 'dy.jpg',
//       price: '16.05$',
//     },
//     {
//       id: 10,
//       name: '7UP',
//       image: '7up.jpg',
//       price: '6.99$',
//     },
//     {
//       id: 11,
//       name: 'PEPSI',
//       image: 'pep.jpg',
//       price: '5.05$',
//     },
//     {
//       id: 12,
//       name: 'PEPSI DIET',
//       image: 'diet.jpg',
//       price: '7.05$',
//     },
//     {
//       id: 13,
//       name: 'MIRINDA',
//       image: 'mirinda.jpg',
//       price: '5.95$',
//     },
//     {
//       id: 14,
//       name: 'PEPSI MAX',
//       image: 'pepsimax.jpg',
//       price: '8.05$',
//     },
//     {
//       id: 15,
//       name: 'WATER',
//       image: 'water.jpg',
//       price: '7.05$',
//     },
//   ];
// function initApp(){
//     product.forEach((value, key)=>{

//         let newDiv=document.createElement('div');
//         newDiv.innerHTML= ` 
//         <img src="WEB/${value.shopping}"/>
//         <div class="tittle">${value.name}</div>
//         <div class="price">${value.price.toLocaleString()}</div>
//         <button onclick="addToCard(${key})">Add To Card</button>

//         `;
        
        
//         list.appendChild(newDiv);
//     })
// }
// initApp();
let openShopping = document.querySelector('.shopping'); //select the element with the class shopping assigns to the variable
let closeShopping = document.querySelector('.closeShopping');//asign to close shopping 
let list = document.querySelector('.list');//select the element with value list and assign itto the variable
let listCard = document.querySelector('.listCard');//divs
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');//nb of divs

openShopping.addEventListener('click', () => {
    body.classList.add('active');
});

closeShopping.addEventListener('click', () => {
    body.classList.remove('active');
});


let product = [
  {
    id: 1,
    name: 'Basic Burger',
    image: 'basic.jpg',
    price: '14.99$',
  },
  {
    id: 2,
    name: 'Machroom Burger',
    image: 'mushr.jpg',
    price: '25.05$',
  },
  {
    id: 3,
    name: 'Big Tacty ',
    image: 'tasty.jpg',
    price: '22.05$',
  },
  {
    id: 4,
    name: 'Onion Burger',
    image: 'onion.jpg',
    price: '17.99$',
  },
  {
    id: 5,
    name: 'Chiken delux',
    image: 'delux.jpg',
    price: '28.00$',
  },
  {
    id: 6,
    name: 'BBQ Chiken ',
    image: 'bbq.jpg',
    price: '14.05$',
  },
  {
    id: 7,
    name: 'Spicy Tandoori',
    image: 'tan.jpg',
    price: '12.99$',
  },
  {
    id: 8,
    name: 'product Hawaiin',
    image: 'hawaiin.jpg',
    price: '25.05$',
  },
  {
    id: 9,
    name: 'Dynamic Burger',
    image: 'dy.jpg',
    price: '16.05$',
  },
  {
    id: 10,
    name: '7UP',
    image: '7up.jpg',
    price: '6.99$',
  },
  {
    id: 11,
    name: 'PEPSI',
    image: 'pep.jpg',
    price: '5.05$',
  },
  {
    id: 12,
    name: 'PEPSI DIET',
    image: 'diet.jpg',
    price: '7.05$',
  },
  {
    id: 13,
    name: 'MIRINDA',
    image: 'mirinda.jpg',
    price: '5.95$',
  },
  {
    id: 14,
    name: 'PEPSI MAX',
    image: 'pepsimax.jpg',
    price: '8.05$',
  },
  {
    id: 15,
    name: 'WATER',
    image: 'water.jpg',
    price: '7.05$',
  },
];


let listCards = [];

function initApp() {
    product.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src=${value.image}></img>
            <div class="tittle">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>
        `;
        list.appendChild(newDiv);
    });
}

initApp();

function addToCard(key) {
    if (listCards[key] === undefined) {
        listCards[key] = { ...product[key], quantity: 1 };
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
}

function reloadCard() {
    listCard.innerHTML = '';
    let count = 0;
    let totalprice = 0;
    Object.values(listCards).forEach((value, key) => {//get an array of the values in the listCards object, and then uses the forEach method to iterate over each value.
        totalprice += parseFloat(value.price) * value.quantity;
        count += value.quantity;
        let newDiv = document.createElement('li');
        newDiv.innerHTML = `
            <div><img src=${value.image}></div>
            <div>${value.name}</div>
            <div>${(parseFloat(value.price) * value.quantity).toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changequantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changequantity(${key}, ${value.quantity + 1})">+</button>
            </div>
        `;
        listCard.appendChild(newDiv);
    });
    total.innerText = totalprice.toLocaleString();
    quantity.innerText = count;
}

function changequantity(key, quantity) {//increase or decrease it by one 
    if (quantity == 0) {
        delete listCards[key];
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * product[key].price;
    }
    reloadCard();
}
