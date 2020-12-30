
function draw() {
    let canvas = document.getElementById('canvas')
    let ctx = canvas.getContext("2d")
    ctx.moveTo(0,0)
    ctx.lineTo(200,ponti)
    ctx.stroke()
}

draw()