/* TABS FOR ITEMS */


function afterReload() {
    let starterStorage = localStorage.getItem('starterStorage');
    if (starterStorage == null) {
        starters = [];

    } else {
        starters = JSON.parse(starterStorage);
    }
}


let starters = [];
afterReload();


let tabHeader = document.getElementsByClassName("tab-header")[0];
let tabIndicator = document.getElementsByClassName("tab-indicator")[0];
let tabBody = document.getElementsByClassName("tab-body")[0];

let tabsPane = tabHeader.getElementsByTagName("div");
let tabs = document.querySelector(".tabs");



for (let i = 0; i < tabsPane.length; i++) {
    tabsPane[i].addEventListener("click", function() {
        tabHeader.getElementsByClassName("active")[0].classList.remove("active");
        tabsPane[i].classList.add("active");
        tabBody.getElementsByClassName("active")[0].classList.remove("active");
        tabBody.getElementsByTagName("div")[i].classList.add("active");

        tabIndicator.style.left = `calc(calc(100% / 4) * ${i})`;
    });
}

function checkStorage() {
    localStorage.clear();
    localStorage.setItem('starterStorage', JSON.stringify(starters));

}


function itemDetails(price, name, total) {
    this.price = price;
    this.quantity = 1;
    this.name = name;
    this.total = this.price * this.quantity;
}

// let btn = document.getElementsByClassName('btn');
// console.log(btn[0].parentNode.previousElementSibling.firstElementChild);

// btn[0] == through this we will get to know the element and we will get the id
// btn[0].getAttribute('id') == through this we will get to know about the id no of the GamepadButton
// btn[0].parentNode.previousElementSibling  == we will get to know tr of the h2 element  
//btn[0].parentNode.previousElementSibling.firstElementChild ==  we will get to know h2 element which has the element name

document.addEventListener('click', (e) => {
    // console.log(e.target);
    let flag = 0;
    if (e.target.getAttribute('class') == 'btn decorationBtn') {
        // console.log(e.target.getAttribute('id'));
        let btn = e.target;
        let btnId = btn.getAttribute('id');
        let btnItemName = btn.parentNode.previousElementSibling.firstElementChild.innerText;
        // console.log(btnItemName);
        let itemPrice = btn.nextSibling.nextSibling.innerText;
        itemPrice = parseFloat(itemPrice);

        console.log(btnItemName);


        let item = new itemDetails(itemPrice, btnItemName);

        for (let i = 0; i < starters.length; i++) {
            if (btnItemName == starters[i].name) {
                starters[i].quantity++;
                starters[i].total = starters[i].quantity * starters[i].price;
                flag = 1;
            }
        }

        // localStorage.setItem('starterStorage', JSON.stringify(starters));

        if (flag == 0) {
            starters.push(item);
        }

        checkStorage();

        cartAddition();
    }
});


let totalAmt = document.querySelector('.totalAmt');
console.log(totalAmt);
cartAddition();




function cartAddition() {

    let str = "";


    let cartBill = document.querySelector('.bill');
    cartBill.innerHTML = "";

    let totalPrice = 0;
    starters.forEach((element, index) => {

        str += `<ul>
        <li style="  margin-left: -10px;   width: 100px;">${element.name}</li>
        <li style=" margin-left: 30px; width: 40px; ">${element.quantity}</li>
        <li style=" margin-left: 47.5px; width: 40px; ">${element.price}</li>
        <li style=" margin-left: 30px; width: 40px; "><button id="${index}" onclick="delBtn(this.id)"><i class="far fa-trash-alt cross-img"></i></button></li>
    </ul>
    <hr style="width: 250px; margin-left: 70px;">`;
        totalPrice += element.total;
    });

    cartBill.innerHTML += str;
    totalAmt.innerText = totalPrice;
    console.log(totalPrice);
}
console.log(starters);


function delBtn(id) {
    console.log('Hello');

    for (let i = 0; i < starters.length; i++) {
        if (i == id) {
            starters[i].quantity--;
        }
        if (starters[i].quantity == 0) {
            starters.splice(i, 1);
        }
    }


    cartAddition();
    checkStorage();
    totalSum();


}

function totalSum() {

    let netSum = 0;
    for (let i = 0; i < starters.length; i++) {
        starters[i].total = starters[i].quantity * starters[i].price;
        netSum += starters[i].total
    }

    totalAmt.textContent = netSum;
    console.log(`this is ${netSum}`);

}



// Cart Slider
function openNav() {
    document.getElementById("mySidenav").style.width = "450px";
    tabs.style.marginLeft = "-150px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    tabs.style.marginLeft = "0";
}