function newImage(left, bottom, location){
let greenCharacter = document.createElement('img');
greenCharacter.src = location;
greenCharacter.style.position = 'fixed';
greenCharacter.style.left = left;
greenCharacter.style.bottom = bottom;
document.body.append(greenCharacter);
}

let greenCharacter = newImage("100px","100px",'assets/green-character.gif');
//let greenCharacter = document.createElement('img')
//greenCharacter.src = 'assets/green-character.gif'
//greenCharacter.style.position = 'fixed'
//greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)

let pineTree = newImage("450px","200px","assets/pine-tree.png");
// let pineTree = document.createElement('img')
// greenCharacter.src = 'assets/pine-tree.png'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '450px'
// greenCharacter.style.bottom = '200px'
// document.body.append(pineTree)

let tree = newImage("200px","300px","assets/tree.png");

let pillar = newImage("350px","100px","assets/pillar.png");

let crate = newImage("150px","200px","assets/crate.png");

let well = newImage("500px","425px","assets/well.png");

let sword = document.createElement("img")
sword.src = "assets/sword.png"
sword.position = "fixed"
sword.left = "500px"
sword.bottom = "405px"
document.body.append(sword)

sword.addEventListener("dblclick", function(){
    sword.remove();
})

function newItem(item,left,bottom){
let nitem = document.createElement("img");
nitem.src = "assets/" + item + ".png" ;
nitem.position = "fixed";
nitem.left = left + "px";
nitem.bottom = bottom + "px";
document.body.append(nitem);
nitem.addEventListener("dblclick", function(){
    nitem.remove();
})
}

let shield = newItem("sheild",165,185);

let staff = newItem("staff",600,100);

