let shop = document.getElementById('shop');

let shopItemsData = [{
    id: "rtyuuio",
    name: "Casual shirt",
    price: 45,
    desc: "Lorem ipsum dolor sit",
    img: "/images/img-1.jpg"
},
{
    id: "asdfghj",
    name: "Office",
    price: 100,
    desc: "Lorem ipsum dolor sit",
    img: "/images/img-2.jpg"
},
{
     id: "ijnbg",
    name: "T shirt",
    price: 25,
    desc: "Lorem ipsum dolor sit",
    img: "/images/img-3.jpg"
},
{
    id: "pkmb",
    name: "Men's suit",
    price: 300,
    desc: "Lorem ipsum dolor sit",
    img: "/images/img-4.jpg" 
}]

let generateShop = () => {
    return (shop.innerHTML = shopItemsData.map((x) => {
        let { id, name, price, desc, img } = x;
        return `
         <div id=product.id-${id} class="item">
            <img width=220 src=${img} alt="">
            <div class="details">
                <h3>${name}</h3>
                <p>${desc}</p>
                <div class="price-quantity">
                    <h2>$ ${price}</h2>
                    <div class="button">
                        <i class="bi bi-dash-lg"></i>
                        <div  id=${id} class="quantity">0</div>
                        <i class="bi bi-plus-lg"></i>
                    </div>
                </div>
            </div>
        </div>
   `
    }).join(""));
}
generateShop();