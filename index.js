function makeObject(url, left, bottom){
    let object = document.createElement('img')
    object.src = url
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function makeItem(url, left, bottom){
    let object = makeObject(url, left, bottom)

    object.addEventListener('dblclick', () => {
        object.remove()
    })
}

makeObject('assets/green-character.gif', 100, 100)
makeObject('assets/tree.png', 200, 300)
makeObject('assets/pillar.png', 350, 100)
makeObject('assets/pine-tree.png', 450, 200)
makeObject('assets/crate.png', 150, 200)
makeObject('assets/well.png', 500, 425)

makeItem('assets/sword.png', 500, 405)
makeItem('assets/shield.png', 165, 185)
makeItem('assets/staff.png', 600, 100)