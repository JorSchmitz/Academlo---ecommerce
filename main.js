const toggleMenu = document.querySelector('.menu');
const toggleCart = document.querySelector('.cart');
const hoodies = {
    units: 0,
    stock: 10,
    name: "Hoodies",
    price: 14,
    subtotal: this.units * this.price,
}
const shirts = {
    units: 0,
    stock: 14,
    name: "Shirts",
    price: 24,
    subtotal: this.units * this.price,
}
const sweatshirts = {
    units: 0,
    stock: 19,
    name: "Sweatshirts",
    price: 24,
    subtotal: this.units * this.price,
}
let totalItems = 0;
let totalPrice = 0;
const addHoodie = document.querySelector('.addHoodie');
const addShirt = document.querySelector('.addShirt');
const addSweatshirt = document.querySelector('.addSweatshirt');

document.querySelector('.toggle').addEventListener('click', () => toggleMenu.classList.add("show__menu"));
document.querySelector('.menu__close').addEventListener('click', () => toggleMenu.classList.remove("show__menu"));
document.querySelector('.shop').addEventListener('click', () => toggleCart.classList.add("show__cart"));
document.querySelector('.cart__close').addEventListener('click', () => toggleCart.classList.remove("show__cart"));

if (document.getElementById('header')) {
    window.addEventListener('scroll', function () {
        if (window.scrollY >= 50) {
            header.classList.add('scroll__header');
        } else {
            header.classList.remove('scroll__header');
        }
    })
}

function addItem(item) {
    if (item.stock <= item.units) {
        alert("Out of stock!");
    } else {
        item.units += 1;
        totalItems = hoodies.units + shirts.units + sweatshirts.units;
        totalPrice = hoodies.subtotal + shirts.subtotal + sweatshirts.subtotal;
    }
}

function removeItem(item) {
    if (item.units != 0) {
        item.units -= 1;
        totalItems = hoodies.units + shirts.units + sweatshirts.units;
        totalPrice = hoodies.subtotal + shirts.subtotal + sweatshirts.subtotal;
    }
}

addHoodie.addEventListener('click', addItem(hoodies));
addHoodie.addEventListener('click', () => alert(hoodies.units));
addHoodie.addEventListener('click', () => alert(totalItems));
addShirt.addEventListener('click', addItem(shirts));
addSweatshirt.addEventListener('click', addItem(sweatshirts));

console.log(totalItems);
if (!totalItems > 0) {
    document.querySelector('.cart__empty').classList.add('cart__hide');
}