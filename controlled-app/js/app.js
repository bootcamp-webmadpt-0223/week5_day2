const app = {
  name: 'Controlled elements in Canvas',
  description: '',
  version: '1.0.0',
  license: undefined,
  author: 'Diego',
  canvas: undefined,
  ctx: undefined,
  playerInstance: undefined,
  canvasSize: { w: undefined, h: undefined },
  playerPosition: { x: 300, y: 300 },
  playerSize: { w: 200, h: 120 },
  init() {
    this.setContext();
    this.setDimensions();
    this.setEventListeners();
    this.createPlayer();
    this.start()
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
  setEventListeners() {
    document.onkeydown = evt => {
      console.log(evt);
      if (evt.key === 'ArrowLeft'){
        if(this.playerPosition.x >= 20){
          this.playerPosition.x -= 20;
        }
      }
      if (evt.key === 'ArrowUp'){
        if(this.playerPosition.y >= 20){
          this.playerPosition.y -= 20;
        }
      }
      if (evt.key === 'ArrowRight'){
        if(this.playerPosition.x + this.playerSize.w <= this.canvasSize.w - 20){
          this.playerPosition.x += 20;
        }
      }
    }
  },
  start() {
    setInterval(() => {
      this.clearAll();
      this.drawAll();
    }, 10)
  },
  createPlayer() {
    this.playerInstance = new Image()
    this.playerInstance.src = './img/player.png'
  },
  drawAll() {
    this.drawPlayer();
  },
  clearAll() {
    // .clearRect(x, y, w, h)
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h);
  },
  drawPlayer() {
    // .drawImage(img, posX, posY, w, h)
    this.ctx.drawImage(this.playerInstance, this.playerPosition.x, this.playerPosition.y, this.playerSize.w, this.playerSize.h);
    //this.ctx.fillRect(this.playerPosition.x, this.playerPosition.y, this.playerSize.w, this.playerSize.h);
  }
}