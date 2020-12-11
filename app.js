
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

let playerChoice = 0

function select(tree) {

    playerChoice = tree
    console.log(playerChoice)
}

// let health = 100
// let victim = "Jar Jar"
let hits = 0

function slap() {
    adversary[playerChoice].health = adversary[playerChoice].health - 1
    console.log(adversary[playerChoice].health)
    update()
    update2()
}


// function punch() {
//     adversary.[health] = adversary.health - 5
//     console.log(adversary.health)
//     update()
//     update2()
// }

// function kick() {
//     adversary.health = adversary.health - 10
//     console.log(adversary.health)
//     update()
//     update2()
// }

function update() {
    let healthUpdate = document.getElementById("health")
    healthUpdate.innerText = `${adversary[playerChoice].health} Hit Him Again!`
    let hitsUpdate = document.getElementById("tag")
    hitsUpdate.innerText = `${hits} OWCH!`

}

function update2() {
}

function hitCounter() {
    hits = hits + 1
}


