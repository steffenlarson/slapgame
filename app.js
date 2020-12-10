
let adversary = [
    {
        name: "Jar Jar",
        health: 100
    },
    {
        name: "Anikan",
        health: 140
    },
    {
        name: "General Grevious",
        health: 200
    }
]



function select() {

}

// let health = 100
// let victim = "Jar Jar"
let hits = 0

function slap() {
    adversary.health = adversary.health - 1
    console.log(adversary.health)
    update()
    update2()
}


function punch() {
    adversary.[health] = adversary.health - 5
    console.log(adversary.health)
    update()
    update2()
}

function kick() {
    adversary.health = adversary.health - 10
    console.log(adversary.health)
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


