document.head.innerHTML=`<link rel="stylesheet" href="main.css"> 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital@1&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&display=swap" rel="stylesheet">`

let container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);


let bigDiv = document.createElement("div");
bigDiv.classList.add("bigDiv","d-flex", "justify-content-center","align-items-center","text-white","fs-1");
bigDiv.innerText="960 x 360px"

let cards = document.createElement("div");
cards.classList.add("cards","d-flex","mt-5","justify-content-between");

container.append(bigDiv, cards)

for (let i = 0; i < 3; i++) {

    var card = document.createElement("div");
    card.classList.add("card","border-0");
    cards.appendChild(card)

    var img = document.createElement("div");
    img.classList.add("img","border","p-1");
    var inImg = document.createElement("div");
    inImg.classList.add("inImg","d-flex", "justify-content-center","align-items-center","text-white","fs-4");
    inImg.innerText="290 x 180px"
    img.appendChild(inImg)

var h5 = document.createElement("h5");
    h5.classList.add("h5","mt-3");
    h5.innerText="Indonectetus facilis"

    var p = document.createElement("p");
    p.classList.add("p");
    p.innerText="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, quam necessitatibus."

    var a = document.createElement("a");
    a.classList.add("a" ,"w-100","d-flex","justify-content-end");
    a.setAttribute("href", "#");
    a.innerText="Read More >>"

    card.append(img,h5,p,a)
}

document.head.innerHTML