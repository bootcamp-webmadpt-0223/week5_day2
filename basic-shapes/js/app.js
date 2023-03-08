const app = {
  name: 'Basic Canvas shapes app',
  description: '',
  version: '1.0.0',
  license: undefined,
  author: 'Diego',
  canvas: undefined,
  ctx: undefined,
  canvasSize: {
    w: undefined,
    h: undefined
  },
  init() {
    this.setContext();
    this.setDimensions();
  },
  setContext() {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');
  },
  setDimensions() {
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }
    this.canvas.setAttribute('width', this.canvasSize.w);
    this.canvas.setAttribute('height', this.canvasSize.h);
  },
  drawSquare(x, y, w, h, color) {
    // .fillRect(posX, posY, w, h)
    // fillStyle property - To change color.
    this.ctx.fillStyle = color;
    this.ctx.fillRect(x, y, w, h);
  },
  drawLines() {
    this.ctx.save()
    this.ctx.strokeStyle = 'pink';
    this.ctx.lineWidth = 10;
    this.ctx.beginPath();
    // strokeStyle property
    // lineWidth property

    this.ctx.moveTo(2, 0);
    this.ctx.lineTo(650, 800);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(2, 0);
    this.ctx.lineTo(2, 800);
    this.ctx.stroke();
    this.ctx.closePath();

    this.ctx.beginPath();
    this.ctx.moveTo(2, 800);
    this.ctx.lineTo(650, 800);
    this.ctx.stroke();
    this.ctx.closePath();
    this.ctx.restore()
  },
  drawDashedLines() {
    // .setLineDash([wide, gap])
    this.ctx.save()
    this.ctx.strokeStyle = 'yellow';
    this.ctx.lineWidth = 20;
    this.ctx.beginPath()
    this.ctx.setLineDash([10, 20, 20, 60])
    this.ctx.moveTo(this.canvasSize.w / 2, this.canvasSize.h / 2);
    this.ctx.lineTo(this.canvasSize.w, this.canvasSize.h / 2);
    this.ctx.stroke();
    this.ctx.closePath()
    this.ctx.restore()
  },
  drawArc() {
    // .arc(posX, posY, radius, startAngle = 0, endAngle = Math.PI * 2)
    // .stroke || .fill
    this.ctx.arc(600, 600, 60, 0, Math.PI * 2)
    // this.ctx.stroke();
    this.ctx.stroke()
  },
  drawText(text) {
    this.ctx.font = '50px arial'
    // .fillText(text, posX, posY)
    this.ctx.fillText(text, this.canvasSize.w / 2, 50);
  },
  drawTriangle(){
    this.ctx.beginPath();
    this.ctx.moveTo(100, 300);
    this.ctx.lineTo(300, 300);
    this.ctx.lineTo(200, 100);
    this.ctx.closePath();

  // the fill color
    this.ctx.fillStyle = "#FFCC00";
    this.ctx.fill();
  }
}