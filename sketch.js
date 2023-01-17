let heaven = ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"];
let heaveneng = [
  "yang wood",
  "yin wood",
  "yang fire",
  "yin fire",
  "yang earth",
  "yin earth",
  "yang metal",
  "yin metal",
  "yang water",
  "yin water",
];
let heavenpin = [
  "jiǎ",
  "yǐ",
  "bǐng",
  "dīng",
  "wù",
  "jǐ",
  "gēng",
  "xīn",
  "rén",
  "guǐ",
];
let earth = [
  "子",
  "丑",
  "寅",
  "卯",
  "辰",
  "巳",
  "午",
  "未",
  "申",
  "酉",
  "戌",
  "亥",
];
let earthpin = [
  "zǐ",
  "chǒu",
  "yín",
  "maǒ",
  "chén",
  "sì",
  "wǔ",
  "weì",
  "shēn",
  "yǒu",
  "xū",
  "haì",
];
let eartheng = [
  "Rat",
  "Ox",
  "Tiger",
  "Rabbit",
  "Dragon",
  "Snake",
  "Horse",
  "Sheep",
  "Monkey",
  "Rooster",
  "Dog",
  "Pig",
];

let rheaven = 380;
let rearth = 100;
let hxy = [];
let exy = [];
let year = 0;
let cnv

function setup() {
  cnv=createCanvas(800, 800);
  let cx = (windowWidth-cnv.width)/2
  let cy = (windowHeight-cnv.height)/2
  cnv.position(cx,cy)
  background(0);
  angleMode(DEGREES);
  textSize(30);
  stroke(255);

  textAlign(CENTER);
  rectMode(CENTER)
  drawHeaven();
  drawEarth();
  push();
  translate(width / 2, height / 2);
  stroke(127);

  frameRate(3);
}

function draw() {
  background(0, 20);
  // clear number

  fill(0);
  noStroke();
  ellipse(50, 50, 100);
  // draw year

  fill(255, 0, 0);
  noStroke();
  textSize(30);
  text(year + 1984, 50, 50);
  //draw stems
  drawHeaven();
  drawEarth();
  // draw lines
  push();
  translate(width / 2, height / 2);
  strokeWeight(3);
  stroke(127);

  let x1 = hxy[year % hxy.length][0];
  let y1 = hxy[year % hxy.length][1];
  let x2 = exy[year % exy.length][0];
  let y2 = exy[year % exy.length][1];

  if (year == 39) stroke(255, 0, 0);
  // this is year 40
  else stroke(127);
  line(x1, y1, x2, y2);

  pop();
  if (year < 60) year++;
  else year = 0;
}

function drawHeaven() {
  textSize(30);
  push();
  translate(width / 2, height / 2);
  noFill();
  ellipse(0, 0, rheaven * 2, rheaven * 2);
  let hang = 0;
  for (let i = 1; i < heaven.length + 1; i++) {
    let hx = rheaven * cos(hang);
    let hy = rheaven * sin(hang);
    hxy.push([hx, hy]);
    // clear text

    fill(0);
    noStroke();
    rect(hx, hy, 83,25);
    // english, pinyin or hanzi

    fill(255, 255, 0);
    noStroke();
    if (mouseX > width - width / 3) {
      textSize(17);

      text(heaveneng[i - 1], hx, hy);
    } else if (mouseX < width / 3) {
      textSize(17);

      text(heavenpin[i - 1], hx, hy);
    } else {
      textSize(17);

      text(heaven[i - 1], hx, hy);
    }
    // incriment angle
    hang += 360 / heaven.length;
  }
  pop();
  // print(hxy)
}

function drawEarth() {
  push();
  translate(width / 2, height / 2);
  noFill();
  ellipse(0, 0, rearth * 2, rearth * 2);
  let hang = 0;
  for (let i = 1; i < earth.length + 1; i++) {
    let ex = rearth * cos(hang);
    let ey = rearth * sin(hang);
    exy.push([ex, ey]);
      // clear text

    fill(0);
    noStroke();
    rect(ex, ey-3, 60,20);
    // english, pinyin or hanzi

    fill(0, 255, 0);
    noStroke();
    if (mouseX > width - width / 3) {
      textSize(15);

      text(eartheng[i - 1], ex, ey);
    } else if (mouseX < width / 3) {
      textSize(15);

      text(earthpin[i - 1], ex, ey);
    } else {
      textSize(15);

      text(earth[i - 1], ex, ey);
    }
    hang += 360 / earth.length;
  }
  pop();
  //print(exy)
}

function allLines() {
  push();
  translate(width / 2, height / 2);
  stroke(127);
  for (let i = 0; i < 60; i++) {
    let x1 = hxy[i % hxy.length][0];
    let y1 = hxy[i % hxy.length][1];
    let x2 = exy[i % exy.length][0];
    let y2 = exy[i % exy.length][1];
    line(x1, y1, x2, y2);
  }
  pop();
}

function keyPressed() {
  // this will download the first 25 seconds of the animation!
  if (key === 'g') {
    saveGif('heavenEarth.gif', 20,{delay:20,units:'seconds'} );
  }
  if (key === 's') {
    saveCanvas('notagrid', 'jpg');
  }
  
}
