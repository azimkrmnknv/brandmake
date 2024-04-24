
// var navbarContent = ["О НАС", "КАТАЛОГ", "НАШИ РАБОТЫ", "КОНТАКТЫ"]

var navbarContent = [
    {
        title: "О НАС",
        link: "about/"
    },
    {
        title: "КАТАЛОГ",
        link: "catalog/"
    },
    {
        title: "НАШИ РАБОТЫ",
        link: "works/"
    },
    {
        title: "КОНТАКТЫ",
        link: "contacts/"
    },
]


var navbar = document.querySelector(".navbar")

navbarContent.forEach(function(item) {
    var linkEl = document.createElement("a")
    linkEl.textContent = item.title
    linkEl.setAttribute("href", `/${item.link}`)
    navbar.append(linkEl)
})



// var tableObj = {
//     Quantity: ['5-10', '5-10','5-10', '5-10', '5-10', '5-10', '5-10', '5-10', '5-10'],
//     Price: ['2000 coм','2000 coм','2000 coм','2000 coм','2000 coм','2000 coм','2000 coм','2000 coм', '2000 coм' ]

// }

// var tableQuantity = document.querySelector(".tableQuantity")
// var tablePrice = document.querySelector(".tablePrice")

// tableObj.Quantity.forEach(function(item){
//     var tCell = document.createElement("td")
//     tCell.textContent = item
//     // console.log(tableQuantity,tCell )
//     tableQuantity.append(tCell)
// })