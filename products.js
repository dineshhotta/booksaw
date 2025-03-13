let allprodsdiv=document.querySelector(".all")
let businessprodsdiv=document.querySelector(".busi")
let technologyprodsdiv=document.querySelector(".tech")
let romanticprodsdiv=document.querySelector(".rom")
let adventureprodsdiv=document.querySelector(".adv")
let fictionalprodsdiv=document.querySelector(".fic")
let cartitemsel=document.querySelector(".cartitems")
let subtotalel=document.querySelector(".subtotal")
let itemsincartel=document.querySelector("sup")
let books=[
    {
        id:1,
        image:"images/tab-item1.jpg",
        name:"Portrait photography",
        author:"Adam Silber",
        price:40,
        stock:10,
        qty:0
    },
    {
        id:2,
        image:"images/tab-item2.jpg",
        name:"Once upon a time",
        author:"Klien Marry",
        price:35,
        stock:10,
        qty:0
    },
    {
        id:3,
        image:"images/tab-item3.jpg",
        name:"Tips of simple lifestyle",
        author:"Bratt Smith",
        price:40,
        stock:12,
        qty:0
    },
    {
        id:4,
        image:"images/tab-item4.jpg",
        name:"Just felt from outside",
        author:"Nicole Wilson",
        price:40,
        stock:10,
        qty:0
    },
    {
        id:5,
        image:"images/tab-item5.jpg",
        name:"Peaceful Enlightment",
        author:"Marmik Lama",
        price:40,
        stock:8,
        qty:0
    },
    {
        id:6,
        image:"images/tab-item6.jpg",
        name:"Great travel at desert",
        author:"Sanchit Howdy",
        price:40,
        stock:10,
        qty:0
    },
    {
        id:7,
        image:"images/tab-item7.jpg",
        name:"Life among the pirates",
        author:"Armor Ramsey",
        price:40,
        stock:7,
        qty:0
    },
    {
        id:8,
        image:"images/tab-item8.jpg",
        name:"Simple way of piece life",
        author:"Armor Ramsey",
        price:40,
        stock:8,
        qty:0
    }
]
function displayallprods()
{
    books.map((b)=>{
        allprodsdiv.innerHTML+=`
                    <div class="col">
                        <div class="card h-100">
                          <img src=${b.image} class="img-fluid mx-auto d-block p-3 w-75 h-75 position-relative" alt="...">
                          <button class="btn btn-dark position-absolute top-50 start-0 w-100 fs-4 py-4" onclick="addtocart(${b.id})">Add To Cart</button>
                          <div class="card-body">
                            <h5 class="card-title">${b.name}</h5>
                            <h6 class="text-secondary">${b.author}</h6>
                            <p class="card-text fs-4">$ ${b.price}</p>
                          </div>
                        </div>
                    </div>
        `
    })
}
displayallprods()
function displaybusiprods()
{
    books.map((b,i)=>{
        if(i%2!=0)
        {
            businessprodsdiv.innerHTML+=`
            <div class="col">
                        <div class="card h-100">
                          <img src=${b.image} class="img-fluid mx-auto d-block p-3 w-75 h-75 position-relative" alt="...">
                          <button class="btn btn-dark position-absolute top-50 start-0 w-100 fs-4 py-4" onclick="addtocart(${b.id})">Add To Cart</button>
                          <div class="card-body">
                            <h5 class="card-title">${b.name}</h5>
                            <h6 class="text-secondary">${b.author}</h6>
                            <p class="card-text fs-4">$ ${b.price}</p>
                          </div>
                        </div>
                    </div>
            `
        }
    })
}
displaybusiprods()
function displaytechprods()
{
    books.map((b,i)=>{
        if(i%2==0)
        {
            technologyprodsdiv.innerHTML+=`
            <div class="col">
                        <div class="card h-100">
                          <img src=${b.image} class="img-fluid mx-auto d-block p-3 w-75 h-75 position-relative" alt="...">
                          <button class="btn btn-dark position-absolute top-50 start-0 w-100 fs-4 py-4" onclick="addtocart(${b.id})">Add To Cart</button>
                          <div class="card-body">
                            <h5 class="card-title">${b.name}</h5>
                            <h6 class="text-secondary">${b.author}</h6>
                            <p class="card-text fs-4">$ ${b.price}</p>
                          </div>
                        </div>
                    </div>
            `
        }
    })
}
displaytechprods()
function displayromprods()
{
    books.map((b,i)=>{
        if(i%2==0)
        {
            romanticprodsdiv.innerHTML+=`
            <div class="col">
                        <div class="card h-100">
                          <img src=${b.image} class="img-fluid mx-auto d-block p-3 w-75 h-75 position-relative" alt="...">
                          <button class="btn btn-dark position-absolute top-50 start-0 w-100 fs-4 py-4" onclick="addtocart(${b.id})">Add To Cart</button>
                          <div class="card-body">
                            <h5 class="card-title">${b.name}</h5>
                            <h6 class="text-secondary">${b.author}</h6>
                            <p class="card-text fs-4">$ ${b.price}</p>
                          </div>
                        </div>
                    </div>
            `
        }
    })
}
displayromprods()
function displayadvprods()
{
    books.map((b,i)=>{
        if(i==4 || i==6)
        {
            adventureprodsdiv.innerHTML+=`
            <div class="col">
                        <div class="card h-100">
                          <img src=${b.image} class="img-fluid mx-auto d-block p-3 w-75 h-75 position-relative" alt="...">
                          <button class="btn btn-dark position-absolute top-50 start-0 w-100 fs-4 py-4" onclick="addtocart(${b.id})">Add To Cart</button>
                          <div class="card-body">
                            <h5 class="card-title">${b.name}</h5>
                            <h6 class="text-secondary">${b.author}</h6>
                            <p class="card-text fs-4">$ ${b.price}</p>
                          </div>
                        </div>
                    </div>
            `
        }
    })
}
displayadvprods()
function displayficprods()
{
    books.map((b,i)=>{
        if(i==4 || i==6)
        {
            fictionalprodsdiv.innerHTML+=`
            <div class="col">
                        <div class="card h-100">
                          <img src=${b.image} class="img-fluid mx-auto d-block p-3 w-75 h-75 position-relative" alt="...">
                          <button class="btn btn-dark position-absolute top-50 start-0 w-100 fs-4 py-4" onclick="addtocart(${b.id})">Add To Cart</button>
                          <div class="card-body">
                            <h5 class="card-title">${b.name}</h5>
                            <h6 class="text-secondary">${b.author}</h6>
                            <p class="card-text fs-4">$ ${b.price}</p>
                          </div>
                        </div>
                    </div>
            `
        }
    })
}
displayficprods()

let cart=JSON.parse(localStorage.getItem("CART")) || [];

updatecart();
function addtocart(id)
{
    // check if product already exist
    if(cart.some((item)=>item.id===id))
    {
        changeqty("plus",id);
    }
    else
    {
        const item=books.find((product)=>product.id===id);
        cart.push({
            ...item,
            qty:1
        });
    
    }
   updatecart(); 
}
function updatecart()
{
    rendercartitems();
    rendersubtotal();
    localStorage.setItem("CART",JSON.stringify(cart));
}
function rendercartitems()
{
    cartitemsel.innerHTML="";
    cart.forEach((item)=>{
cartitemsel.innerHTML+=`
                  <table class="table w-100">
                  <tbody>
                    <tr><td><img src=${item.image} height=50 width=50></td>
                    <td><p style="font-size:13px;">${item.name}</p></td>
                    <td>$${item.price}</td>
                    <td><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-circle" viewBox="0 0 16 16" onclick="changeqty('minus',${item.id})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg> ${item.qty} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16" onclick="changeqty('plus',${item.id})">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></td>
                    <td><i class="fa-solid fa-trash text-primary" onclick="removeitem(${item.id})"></i></td>
                  </tr></tbody>
                  </table>`

    })
}
function changeqty(action,id)
{
    cart=cart.map((item)=>{
        let qty=item.qty;
        if(item.id===id)
        {
            if(action==="minus" && qty>1)
            {
                qty--;
            }
            else if(action==="plus" && qty<item.stock)
            {
                qty++;
            }
        }
        return {
            ...item,
            qty,
        };
    })
    updatecart();
}
function rendersubtotal()
{
    let totalprice=0,totalitems=0;
    cart.forEach((item)=>{
        totalprice+=item.price*item.qty;
        totalitems+=item.qty;
    });
    subtotalel.innerHTML=`Subtotal(${totalitems} items):$${totalprice.toFixed(2)}`
    itemsincartel.innerHTML= totalitems;            
}
function removeitem(id)
{
    cart=cart.filter((item)=>item.id!==id);
    updatecart();
}