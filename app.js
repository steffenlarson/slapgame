let health = 100
let victim = "Jar Jar"
let hits = 0

function slap() {
    health = health - 1
    console.log(health)
    update()
    update2()
}


function punch() {
    health = health - 5
    console.log(health)
    update()
    update2()
}

function kick() {
    health = health - 10
    console.log(health)
    update()
    update2()
}

function update() {
    let healthUpdate = document.getElementById("health")
    healthUpdate.innerText = `${health} Hit Him Again!`
}

function update2() {
    let hitsUpdate = document.getElementById("tag")
    hitsUpdate.innerText = `${hits} OWCH!`
}

function hitCounter() {
    hits = hits + 1
}


// function die{
//     if (health == 0) {

//     }
// }