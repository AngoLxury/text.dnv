function toggleMenu() {
    const MenuItens = document.getElementById("MenuItens");
    if (MenuItens.style.maxHeight === "0px") {
        MenuItens.style.maxHeight = "200px"; // ajuste a altura conforme necessário
    } else {
        MenuItens.style.maxHeight = "0px";
    }
}

var produtoImg = document.getElementById("produtoImg")
var produtoMiniatura = document.getElementsByClassName("produtoMiniatura")

if (produtoMiniatura.length > 0) {
    produtoMiniatura[0].onclick = function() {
        produtoImg.src = produtoMiniatura[0].src;
    };
}

if (produtoMiniatura.length > 1) {
    produtoMiniatura[1].onclick = function() {
        produtoImg.src = produtoMiniatura[1].src;
    };
}    

if (produtoMiniatura.length > 2) {
    produtoMiniatura[2].onclick = function() {
        produtoImg.src = produtoMiniatura[2].src;
    };
}    


if (produtoMiniatura.length > 3) {
    produtoMiniatura[3].onclick = function() {
        
        produtoImg.src = produtoMiniatura[3].src;
    };
}    


