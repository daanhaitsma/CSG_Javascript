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
    // else if: per toetsaanslag mag maar één toestand reageren
    if (this.toestand == 'begin') {
      // spatie start het spel
      if (keyCode == 32) {
        this.toestand = 'spelen';
      }
    }
    else if (this.toestand == 'spelen') {
      // spatie: level gehaald
      if (keyCode == 32) {
        this.score += round(random(1,10));
        this.toestand = 'levelGehaald';
      }
    }
    else if (this.toestand == 'levelGehaald') {
      // spatie start het volgende level
      if (keyCode == 32) {
        this.volgendeLevel();
      }
    }
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
    this.tekenTekst('Klaar voor het volgende level?\nDruk spatie om te starten','white');
  }

  tekenSpeelScherm() {
    background('#c4bfea');
    this.tekenTekst('Dit is level '+this.level+'.\nDruk spatie om naar het volgende level te gaan.','black');
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
