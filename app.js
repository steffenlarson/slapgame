let health = 100

function slap() {
    health = health - 1
    console.log(health)
    update()
}

function update() {
    let healthUpdate = document.getElementById("health")
    healthUpdate.innerText = `${health} You have been slapped!`
}

function punch() {
    health = health - 5
    console.log(health)
    update()
}

function kick() {
    health = health - 10
    console.log(health)
    update()
}
