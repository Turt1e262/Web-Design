// Put images dynamically in wrappers
function insertImages(){
    let imageWraps = document.querySelectorAll('.product-image');
    for(let i = 0; i < imageWraps.length; i++){
        imageWraps[i].src = `images/prod${i}.jpg`;
    }
}
insertImages()

let prodNamesPrices = [
    {
        name: 'Laptop gaming ASUS ROG Zephyrus Duo 16 GX650PZ',
        des: '1234',
        price: 4999,
        id:1,
    },
    {
        name: 'Laptop gaming ASUS ROG Flow X16 GV601VV NL016W',
        des: '1234',
        price: 3199,
        id:2,
    },
    {
        name: 'Laptop Gaming MSI Stealth 16 Mercedes AMG A13VG 289VN',
        des: '1234',
        price: 4199,
        id:3,
    },
    {
        name: 'Laptop gaming ASUS ROG Strix SCAR 18 G834JY N6039W',
        des: '1234',
        price: 4899,
        id:4,
    },
    {
        name: 'PC GVN Intel i5-13400F/ VGA RTX 4060 Ti',
        des: '1234',
        price: 1499,
        id:5,
    },
    {
        name: 'PC GVN x ASUS EVANGELION 2 (by ASUS)',
        des: '1234',
        price: 6199,
        id:6,
    },
    {
        name: 'PC GVN Intel i9-14900K/ VGA RTX 4090',
        des: '1234',
        price: 5999,
        id:7,
    },
    {
        name: 'PC GVN AMD R7-7700X/ VGA RTX 4080',
        des: '1234',
        price: 3299,
        id:8,
    }
]


function showp(index){
let chosenp = prodNamesPrices[index];
localStorage.setItem('gay', JSON.stringify(chosenp));
window.location.href = "products.html";
}




// Put dynamically names and prices
function insertProductNamesPrices(prodNamesPrices){
    let nameWraps = document.querySelectorAll('.p-head');

    let prodNamesLength = prodNamesPrices.length;
    for(let i=0; i < prodNamesLength; i++){
            nameWraps[i].textContent = prodNamesPrices[i].name;
    }

    let priceWraps = document.querySelectorAll('.p-price');
    for(let i=0; i < prodNamesLength; i++){
        priceWraps[i].textContent = `${prodNamesPrices[i].price} $`;
    }
}
insertProductNamesPrices(prodNamesPrices);


function addToCart(){
    let cartBtn = document.querySelectorAll('.add-to-cart');
    let cartWrapper = document.querySelector('.cart-details')
    let emptyCart = document.querySelector('.cart-empty');
    let itemCounter = document.querySelector('.item-counter');
    let itemInCart = 0;
    let totalPrice = document.querySelector('.total');
    let total = 0;
    let items = [];
    
    // Add item, delete ite, price update, counter update
    for(let i = 0; i < cartBtn.length; i++){
        cartBtn[i].addEventListener('click', (e) => {
            // Add item to cart and push to array 'items'
            let newItem = document.createElement('p');
            newItem.setAttribute('class','new-item');
            let itemDetails = document.createTextNode(`${prodNamesPrices[i].name} Price: ${prodNamesPrices[i].price} $`);
            newItem.append(itemDetails);
            cartWrapper.append(newItem);
            items.push(newItem);
            newItem.style.display = 'flex';
            newItem.style.alignItems = 'center';
            // Display total price in cart
            total = total + prodNamesPrices[i].price;
            totalPrice.textContent = `Total: ${total}$`;

            // Toggle off/on btn after add to cart
            cartBtn[i].classList.add('disabled');
            cartBtn[i].disabled = true;
            cartBtn[i].textContent = 'In cart!';

            // Set qty of any item
            let qtySet = document.createElement('ul');
            qtySet.style.marginLeft = '20px'
            let qtyPlus = document.createElement('button');
            let plus = document.createTextNode('+')
            let qtyMinus = document.createElement('button');
            let minus = document.createTextNode('-');
            let qtyAll = document.createElement('p');
            let qtyAllNum = document.createTextNode('1');

            qtyPlus.style.marginRight = '8px';
            qtyMinus.style.marginLeft = '8px';
            qtyAll.style.marginTop = '8px';
            qtyAll.style.fontWeight = '500';

            qtyAll.append(qtyAllNum);
            qtyPlus.append(plus);
            qtyMinus.append(minus);
            qtySet.append(qtyPlus,qtyAll,qtyMinus);
            newItem.append(qtySet);

            let qtyCount = 1;
            qtyPlus.addEventListener('click', () => {
                qtyCount++;
                qtyAllNum.textContent = qtyCount;
                total = total + prodNamesPrices[i].price;
                totalPrice.textContent = `Total: ${total} $`;
                if(qtyCount >= 1){
                    qtyMinus.disabled = false;
                }
            })
            qtyMinus.addEventListener('click', () => {
                qtyCount--;
                qtyAllNum.textContent = qtyCount;
                total = total - prodNamesPrices[i].price;
                totalPrice.textContent = `Total: ${total} $`;
                if(qtyCount == 0){
                    qtyMinus.disabled = true;
                }
            })
            var item = document.getElementById("btnpurch");
            item.style.display = "block";
            // Add small product icon in cart
            let prodImg = document.createElement('img');
            prodImg.src = `images/prod${i}.jpg`;
            newItem.insertBefore(prodImg,itemDetails);
            prodImg.style.width = '10%'

            // Add delete button to every new item in cart
            let deleteBtn = document.createElement('a');
            deleteBtn.setAttribute('class','closer');
            let closeIcon = document.createTextNode('x');
            deleteBtn.append(closeIcon);
            newItem.append(deleteBtn)

            // Items in cart counter
            itemCounter.style.visibility = "visible";
            itemCounter.style.opacity = "1";
            itemInCart++;
            itemCounter.textContent = itemInCart;

            
            emptyCart.textContent = ''

            // Delete item from cart, update price and counter
            deleteBtn.addEventListener('click', () => {
                items.pop(newItem);
                newItem.textContent = '';
                newItem.style.display = 'none'
                itemInCart--;
                itemCounter.textContent = itemInCart;
                total =total - (prodNamesPrices[i].price * qtyCount);
                totalPrice.textContent = `Total: ${total}$`;
                cartBtn[i].classList.remove('disabled');
                cartBtn[i].disabled = false;
                cartBtn[i].textContent = 'Add to cart'
                // Hide counter if 0 items in cart and
                // display text message
                if(itemInCart === 0 && items.length === 0){
                    itemCounter.style.opacity = '0';
                    total = 0;
                    totalPrice.textContent = `Total: ${total}$`;
                    emptyCart.textContent = 'Your cart is empty.';

                    var item = document.getElementById("btnpurch");
                    item.style.display = "none";

                }
            })
        })
    }
}
addToCart()



function showSuccessMessage() {

    alert('Tòm Tòm Tòm Tom');
}
