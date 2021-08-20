// Đổi hình ở container-1

var container1_mainImg = document.querySelector("#top-tour-img");

var img1 = document.querySelector("#img-option1")
var img2 = document.querySelector("#img-option2");
var img3 = document.querySelector("#img-option3");

img1.onclick = function () {
    var URL = img1.src;
    container1_mainImg.src = URL;
    img1.style.filter = 'grayscale(100%)'
    img2.style.filter = 'none'
    img3.style.filter = 'none'
}
img2.onclick = function () {
    var URL = img2.src;
    container1_mainImg.src = URL;
    img2.style.filter = 'grayscale(100%)'
    img1.style.filter = 'none'
    img3.style.filter = 'none'
}
img3.onclick = function () {
    var URL = img3.src;
    container1_mainImg.src = URL;
    img3.style.filter = 'grayscale(100%)'
    img2.style.filter = 'none'
    img1.style.filter = 'none'
}

//Load dữ liệu ở container-3
const tourList = [
    {
        tagName: "MOUNTAIN",
        tourName: "ALPS MOUNTAINS",
        tourImg: "img/tour_1.jpg"
    },
    {
        tagName: "SEA TOURS",
        tourName: "MONACO CITY",
        tourImg: "img/tour_2.jpg"
    },
    {
        tagName: "SEA TOURS",
        tourName: "MALDIVIES",
        tourImg: "img/tour_3.jpg"
    },
    {
        tagName: "MOUNTAIN",
        tourName: "BORA BORA",
        tourImg: "img/tour_4.jpg"
    },
    {
        tagName: "SEA TOURS",
        tourName: "CARPATHIAN MOUNTAINS",
        tourImg: "img/tour_5.jpg"
    },
    {
        tagName: "MOUNTAIN",
        tourName: "MIAMI",
        tourImg: "img/tour_5.jpg"
    }
]

var container3 = document.querySelector(".destination-list");
function Loader_container3() {
    var tourList_Copy = tourList.map(function (tourList_item) {
        return `<div class="destination-list-item">
        <div class="img-container">
            <img class = "tour-Img" src= ${tourList_item.tourImg} alt="">
            <div class="tour-tagName">${tourList_item.tagName}</div>
        </div>
        <div class="destination-information">
            <div class="details">
                <h3 class = "tour-Name">${tourList_item.tourName}</h3>
                <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <button>VIEW MORE</button>
        </div>
    </div>`
    })
    container3.innerHTML = tourList_Copy.join("");
}
window.addEventListener("DOMContentLoaded", function () {
    Loader_container3();
})

//Load dữ liệu ở container-5

function DOM_container5() {
    // Rome
    var Rome = [
        {
            id: "places",
            name: "BRISBOL HOTEL",
            price: "273",
            avatar: "img/hotel_1.jpg"
        },
        {
            id: "places",
            name: "MYKONOS HOTEL",
            price: "273",
            avatar: "img/hotel_2.jpg"
        },
        {
            id: "places",
            name: "LUXURY HOTEL",
            price: "273",
            avatar: "img/hotel_3.jpg"
        },
        {
            id: "dishes",
            name: "HAMBURGER",
            price: "273",
            avatar: "img/item-1.jpg"
        },
        {
            id: "dishes",
            name: "STEAK",
            price: "273",
            avatar: "img/item-10.jpg"
        },
        {
            id: "dishes",
            name: "EGGS FRIES",
            price: "273",
            avatar: "img/item-4.jpg"
        }
    ]

    var Rome_container = document.querySelector('#Rome-item');
    var Rome_dishesBtn = document.querySelector('#Rome-dishesBtn');
    var Rome_placesBtn = document.querySelector('#Rome-placesBtn');


    function Rome_Loader() {
        var Rome_Copy = Rome.map(function (Rome_item, index) {
            if (Rome_item.id == 'places') {
                return ` 
                <div class="option-item-content">
                <div class="option-item-informations">
                    <p id = "Rome_itemName">${index + 1}. ${Rome_item.name}</p>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <span>485 reviews</span>
                    <p id = "Rome_itemPrice">FROM $${Rome_item.price}</p>
                </div>
                <div class="option-item-img">
                    <img id = "Rome_itemImg" src=${Rome_item.avatar} alt="">
                </div>
            </div> `
            }
        })
        Rome_container.innerHTML = Rome_Copy.join("");
    }

    function Rome_Loader_optional(id) {
        var Rome_Copy = Rome.map(function (Rome_item, index) {
            if (Rome_item.id == id) {
                if (id == 'dishes') {
                    return ` 
                    <div class="option-item-content">
                    <div class="option-item-informations">
                        <p id = "Rome_itemName">${index + 1 - 3}. ${Rome_item.name}</p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>485 reviews</span>
                        <p id = "Rome_itemPrice">FROM $${Rome_item.price}</p>
                    </div>
                    <div class="option-item-img">
                        <img id = "Rome_itemImg" src=${Rome_item.avatar} alt="">
                    </div>
                </div> `
                }
                else if (id == 'places') {
                    return ` 
                    <div class="option-item-content">
                    <div class="option-item-informations">
                        <p id = "Rome_itemName">${index + 1}. ${Rome_item.name}</p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>485 reviews</span>
                        <p id = "Rome_itemPrice">FROM $${Rome_item.price}</p>
                    </div>
                    <div class="option-item-img">
                        <img id = "Rome_itemImg" src=${Rome_item.avatar} alt="">
                    </div>
                </div> `
                }

            }
        })
        Rome_container.innerHTML = Rome_Copy.join("");
    }

    window.addEventListener("DOMContentLoaded", function () {
        Loader_container3();
        Rome_Loader();
    })

    Rome_dishesBtn.onclick = function () {
        Rome_Loader_optional("dishes");
    }
    Rome_placesBtn.onclick = function () {
        Rome_Loader_optional("places");
    }

    //Paris
    var Paris = [
        {
            id: "places",
            name: "MYKONOS HOTEL",
            price: "273",
            avatar: "img/hotel_3.jpg"
        },
        {
            id: "places",
            name: "LUXURY HOTEL",
            price: "273",
            avatar: "img/hotel_1.jpg"
        },
        {
            id: "places",
            name: "BRISBOL HOTEL",
            price: "273",
            avatar: "img/hotel_2.jpg"
        },
        {
            id: "dishes",
            name: "HAMBURGER",
            price: "273",
            avatar: "img/item-1.jpg"
        },
        {
            id: "dishes",
            name: "STEAK",
            price: "273",
            avatar: "img/item-10.jpg"
        },
        {
            id: "dishes",
            name: "EGGS FRIES",
            price: "273",
            avatar: "img/item-4.jpg"
        }
    ]
    var Paris_container = document.querySelector('#Paris-item');
    var Paris_dishesBtn = document.querySelector('#Paris-dishesBtn');
    var Paris_placesBtn = document.querySelector('#Paris-placesBtn');


    function Paris_Loader() {
        var Paris_Copy = Paris.map(function (Paris_item, index) {
            if (Paris_item.id == 'places') {
                return ` 
                    <div class="option-item-content">
                    <div class="option-item-informations">
                        <p id = "Paris_itemName">${index + 1}. ${Paris_item.name}</p>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <span>485 reviews</span>
                        <p id = "Paris_itemPrice">FROM $${Paris_item.price}</p>
                    </div>
                    <div class="option-item-img">
                        <img id = "Paris_itemImg" src=${Paris_item.avatar} alt="">
                    </div>
                </div> `
            }
        })
        Paris_container.innerHTML = Paris_Copy.join("");
    }

    function Paris_Loader_optional(id) {
        var Paris_Copy = Paris.map(function (Paris_item, index) {
            if (Paris_item.id == id) {
                if (id == 'dishes') {
                    return ` 
                        <div class="option-item-content">
                        <div class="option-item-informations">
                            <p id = "Paris_itemName">${index + 1 - 3}. ${Paris_item.name}</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>485 reviews</span>
                            <p id = "Paris_itemPrice">FROM $${Paris_item.price}</p>
                        </div>
                        <div class="option-item-img">
                            <img id = "Paris_itemImg" src=${Paris_item.avatar} alt="">
                        </div>
                    </div> `
                }
                else if (id == 'places') {
                    return ` 
                        <div class="option-item-content">
                        <div class="option-item-informations">
                            <p id = "Paris_itemName">${index + 1}. ${Paris_item.name}</p>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <span>485 reviews</span>
                            <p id = "Paris_itemPrice">FROM $${Paris_item.price}</p>
                        </div>
                        <div class="option-item-img">
                            <img id = "Paris_itemImg" src=${Paris_item.avatar} alt="">
                        </div>
                    </div> `
                }

            }
        })
        Paris_container.innerHTML = Paris_Copy.join("");
    }

    window.addEventListener("DOMContentLoaded", function () {
        Paris_Loader();
    })

    Paris_dishesBtn.onclick = function () {
        Paris_Loader_optional("dishes");
    }
    Paris_placesBtn.onclick = function () {
        Paris_Loader_optional("places");
    }

    // VENICE

    var Venice = [
        {
            id: "places",
            name: "LUXURY HOTEL",
            price: "273",
            avatar: "img/hotel_3.jpg"
        },
        {
            id: "places",
            name: "MYKONOS HOTEL",
            price: "273",
            avatar: "img/hotel_1.jpg"
        },
        {
            id: "places",
            name: "BRISBOL HOTEL",
            price: "273",
            avatar: "img/hotel_2.jpg"
        },
        {
            id: "dishes",
            name: "HAMBURGER",
            price: "273",
            avatar: "img/item-1.jpg"
        },
        {
            id: "dishes",
            name: "STEAK",
            price: "273",
            avatar: "img/item-10.jpg"
        },
        {
            id: "dishes",
            name: "EGGS FRIES",
            price: "273",
            avatar: "img/item-4.jpg"
        }
    ]

    var Venice_container = document.querySelector('#Venice-item');
    var Venice_dishesBtn = document.querySelector('#Venice-dishesBtn');
    var Venice_placesBtn = document.querySelector('#Venice-placesBtn');


    function Venice_Loader() {
        var Venice_Copy = Venice.map(function (Venice_item, index) {
            if (Venice_item.id == 'places') {
                return ` 
                     <div class="option-item-content">
                     <div class="option-item-informations">
                         <p id = "Venice_itemName">${index + 1}. ${Venice_item.name}</p>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <i class="fas fa-star"></i>
                         <span>485 reviews</span>
                         <p id = "Venice_itemPrice">FROM $${Venice_item.price}</p>
                     </div>
                     <div class="option-item-img">
                         <img id = "Venice_itemImg" src=${Venice_item.avatar} alt="">
                     </div>
                 </div> `
            }
        })
        Venice_container.innerHTML = Venice_Copy.join("");
    }

    function Venice_Loader_optional(id) {
        var Venice_Copy = Venice.map(function (Venice_item, index) {
            if (Venice_item.id == id) {
                if (id == 'dishes') {
                    return ` 
                         <div class="option-item-content">
                         <div class="option-item-informations">
                             <p id = "Venice_itemName">${index + 1 - 3}. ${Venice_item.name}</p>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <span>485 reviews</span>
                             <p id = "Venice_itemPrice">FROM $${Venice_item.price}</p>
                         </div>
                         <div class="option-item-img">
                             <img id = "Venice_itemImg" src=${Venice_item.avatar} alt="">
                         </div>
                     </div> `
                }
                else if (id == 'places') {
                    return ` 
                         <div class="option-item-content">
                         <div class="option-item-informations">
                             <p id = "Venice_itemName">${index + 1}. ${Venice_item.name}</p>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <i class="fas fa-star"></i>
                             <span>485 reviews</span>
                             <p id = "Venice_itemPrice">FROM $${Venice_item.price}</p>
                         </div>
                         <div class="option-item-img">
                             <img id = "Venice_itemImg" src=${Venice_item.avatar} alt="">
                         </div>
                     </div> `
                }

            }
        })
        Venice_container.innerHTML = Venice_Copy.join("");
    }

    window.addEventListener("DOMContentLoaded", function () {
        Venice_Loader();
    })

    Venice_dishesBtn.onclick = function () {
        Venice_Loader_optional("dishes");
    }
    Venice_placesBtn.onclick = function () {
        Venice_Loader_optional("places");
    }


}
DOM_container5();

//Load dữ liệu ở container-6
function DOM_Container6() {

    const clients = [
        {
            place_avatar: "img/testimonal_1.jpg",
            place_tagName: "SEA TOUR",
            client_avatar: "img/people_1.jpg",
            client_name: "INNA LUNOE"
        },
        {
            place_avatar: "img/testimonal_2.jpg",
            place_tagName: "MOUNTAINS",
            client_avatar: "img/people_2.jpg",
            client_name: "ALINA, MARK"
        },
        {
            place_avatar: "img/testimonal_3.jpg",
            place_tagName: "SEA TOUR",
            client_avatar: "img/people_3.jpg",
            client_name: "GEORGE ROSS"
        },
        {
            place_avatar: "img/testimonal_4.jpg",
            place_tagName: "MOUNTAINS",
            client_avatar: "img/people_1.jpg",
            client_name: "MIKEL, KIM"
        }
    ]
    var main_container6 = document.querySelector(".owl-carousel");
    function Client_Loader() {
        var clients_copy = clients.map(function (client_item) {
            return `<div class="main-container-item">
            <div class="img-container">
                <img src=${client_item.place_avatar} alt="">
                <div class="tagName">${client_item.place_tagName}</div>
            </div>
            <div class="details-container">
                <img src=${client_item.client_avatar} alt="" class="customer-avatar">
                <div class="rate">
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                    <i class="fas fa-heart"></i>
                </div>
                <h3 class="client-name">${client_item.client_name}</h3>
                <p class="client-comments">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae reprehenderit vitae quisquam!"</p>
                </div>
            </div> `
        })
        main_container6.innerHTML = clients_copy.join("");
    }
    window.addEventListener("DOMContentLoaded", function () {
        Client_Loader()
    })
}
DOM_Container6();