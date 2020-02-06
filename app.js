let myGamePiece;
function startGame() {
    myGameArea.start();
    myGamePiece = new Component(30, 30, 20, 0, 2 * Math.PI, 'red')
}
let myGameArea = {
    canvas: document.createElement('canvas'),
    start: function () {
        this.canvas.width = 480;
        this.canvas.height = 270;
        this.context = this.canvas.getContext('2d');
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
    },
    clear: function () {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
};ю

//Круг
function Component(x, y, radius, startAng, endAng, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.startAng = startAng;
    this.endAng = endAng;
    this.update = function () {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, this.startAng, this.endAng);
        ctx.fill();
    };

};
function updateGameArea() {
    myGameArea.clear();
    myGamePiece.x += 1;
    myGamePiece.update()
}