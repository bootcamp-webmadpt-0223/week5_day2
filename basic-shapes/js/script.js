app.init()
app.drawSquare(30, 30, 100, 50, 'red');
app.drawSquare(50, 50, 200, 200, 'blue');
app.drawSquare(200, 200, 200, 200, 'orange');
app.drawLines();
app.drawDashedLines();

for(let i = 0; i < 100; i++){
  app.drawSquare(30 + i * 200, 30 + i * 200, 100, 50, 'red');
}


app.drawArc();

app.drawText('CANVAS 💆‍♂️')
app.drawTriangle();