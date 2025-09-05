    //variables
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 600;

    let image = new Image ()
    image.src = 'kirbo.png'

    let background = new Image ()
    background.src = "grass.jpg"

    let Player = {
        x: canvas.width / 2 - image.width / 2, 
        y: canvas.height / 2 - image.height / 2,
        width: 50,
        height: 50,
        sprite: image
    }

    keys = {}

    window.addEventListener("keydown", (event) =>{
        keys[event.key] = true;
    })
    window.addEventListener("keyup", (event) =>{
        keys[event.key] = false;
    })

    function gameLoop() {
        // Update
        if(keys['ArrowUp']) {Player.y -= 2}
        if(keys['ArrowDown']) {Player.y += 2}
        if(keys['ArrowLeft']) {Player.x -= 2}
        if(keys['ArrowRight']) {Player.x += 2}
        if (Player.x < 0) {Player.x = 0}
        if (Player.y < 0) {Player.y = 0}
        if (Player.x + Player.width > canvas.width) {Player.x = canvas.width - Player.width}
        if (Player.y + Player.height > canvas.height) {Player.y = canvas.height - Player.height}
      
        // Draw
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height)
        ctx.drawImage(Player.sprite, Player.x, Player.y, Player.width, Player.height)

        // Draw coordinates
        ctx.fillStyle = 'white'
        ctx.font = '20px Arial'
        ctx.fillText(`X: ${Player.x} Y: ${Player.y}`, 20, 20)


        // Loop
        requestAnimationFrame(gameLoop)
    }

    requestAnimationFrame(gameLoop)
