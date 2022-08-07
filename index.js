function newImage(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(url, left, bottom){
    let object = newImage(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

newImage('assets/green-character.gif',100,100)
newImage('assets/crate.png',150, 200)
newItem('assets/boulder.png',160,128)
newImage('assets/log.png',800,171)
newImage('assets/pine-tree.png',450,200)
newImage('assets/tree.png',200,300)
newImage('assets/pillar.png',350,100)
newImage('assets/red-character.gif',55,66)
newImage('assets/well.png',500, 425)
newItem('assets/rock.png',25,25)
newItem('assets/sword.png',500,405)
newItem('assets/shield.png',165,185)
newItem('assets/staff.png',600,100)

/*let sword = document.createElement('img')
sword.src = 'assets/sword.png'
sword.position = 'fixed'
sword.left = '500px'
sword.bottom = '405px'
document.body.append(sword)

sword.addEventListener('click', function(){
    sword.remove()
})*/

/*let greenCharacter = document.createElement('img')
greenCharacter.src = 'assets/green-character.gif'
greenCharacter.style.position = 'fixed'
greenCharacter.style.left = '100px'
greenCharacter.style.bottom = '100px'
document.body.append(greenCharacter)*/

/*let pineTree = document.createElement('img')
pineTree.src = 'assets/pine-tree.png'
pineTree.style.position = 'fixed'
pineTree.style.left = '450px'
pineTree.style.bottom = '200px'
document.body.append(pineTree)*/

