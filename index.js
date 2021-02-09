function tile(url, left, bottom, width, height){
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            makeObject(url, left + w*100, bottom+h*100)
        }
    }
}

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

    object.addEventListener('click', () => {
        object.remove()
    })
}

let horizon = window.innerHeight / 1.75
let heightOfSky = window.innerHeight-horizon
let heightOfGrass = horizon

tile('assets/sky.png', 0, horizon, window.innerWidth/100, heightOfSky/100)
tile('assets/grass.png', 0, 0, window.innerWidth/100, heightOfGrass/100)


makeObject('assets/green-character.gif', 100, 100)
makeObject('assets/tree.png', 200, 300)
makeObject('assets/pillar.png', 350, 100)
makeObject('assets/pine-tree.png', 450, 200)
makeObject('assets/crate.png', 150, 200)
makeObject('assets/well.png', 500, 400)

makeItem('assets/sword.png', 500, 405)
makeItem('assets/shield.png', 165, 185)
makeItem('assets/staff.png', 600, 100)