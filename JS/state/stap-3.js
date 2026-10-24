/*  **********************************************************
    **                 BEGIN klasse Spel                    **
    ********************************************************** */


class Spel {
  constructor() {
    this.level = null;
    this.score = null;
    this.toestand = null;
  }

  nieuwSpel() {
    this.level = 1;
    this.score = 0;
    this.toestand = 'begin';
  }

  volgendeLevel() {
    this.level++;
    this.toestand = 'spelen';
  }

  verwerkInvoer() {
    console.log('key: '+key+'   keyCode: '+keyCode);

    if (this.toestand == 'begin') {
      // Spatie
      if (keyCode == 32) {
        this.toestand = 'spelen';
      }
    }

    if (this.toestand == 'spelen') {
      if (key == 'v') {
        this.score += round(random(1,10));
        this.toestand = 'levelGehaald';
      }
    }

    if (this.toestand == 'levelGehaald') {
      // Spatie
      if (keyCode == 32) {
        this.volgendeLevel();
      }
    }
  }

  tekenScorebord() {
    push();
    noStroke();
    fill('#EEEEEE');
    rect(0,0,canvas.width,24);
    fill('black');
    textSize(16);
    textAlign(LEFT);
    text('Score: '+this.score,10,20);
    textAlign(RIGHT);
    text('❤ ❤ ❤ ❤ ❤',canvas.width - 10,20);
    pop();
  }

  tekenTekst(tekst,kleur) {
    push();
    textStyle(BOLD);
    fill(kleur);
    textSize(20);
    textAlign(CENTER,CENTER);
    text(tekst,0,0,canvas.width,canvas.height);
    pop();
  }

  tekenBeginScherm() {
    background('#fec013');
    this.tekenTekst('Klaar voor het spel?\nDruk spatie om te starten','black');
  }

  tekenLevelScherm() {
    background('#ba087d');
    this.tekenScorebord();
    this.tekenTekst('Klaar voor het volgende level?\nDruk spatie om te starten','white');
  }

  tekenSpeelScherm() {
    background('#c4bfea');
    this.tekenScorebord();
    this.tekenTekst('Dit is level '+this.level+'.\nDruk V om naar het volgende level te gaan.','black');
  }

  teken() {
    if (this.toestand == 'begin') {
      this.tekenBeginScherm();
    }
    if (this.toestand == 'spelen') {
      this.tekenSpeelScherm();
    }
    if (this.toestand == 'levelGehaald') {
      this.tekenLevelScherm();
    }
  }
}

/*  **********************************************************
    **      EINDE klasse Spel      BEGIN hoofdprogramma     **
    ********************************************************** */


function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  spel = new Spel();
  spel.nieuwSpel();
  spel.teken();
}

function keyPressed() {
  spel.verwerkInvoer();
  spel.teken();
}

/*  **********************************************************
    **               EINDE hoofdprogramma                   **
    ********************************************************** */
