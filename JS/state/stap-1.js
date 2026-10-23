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

  verwerkInvoer() {
    console.log('key: '+key+'   keyCode: '+keyCode);
    if (this.toestand == 'begin') {
      // spatie start het spel
      if (keyCode == 32) {
        this.toestand = 'spelen';
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

  tekenSpeelScherm() {
    background('#c4bfea');
    this.tekenTekst('Dit is level '+this.level+'.','black');
  }

  teken() {
    if (this.toestand == 'begin') {
      this.tekenBeginScherm();
    }
    if (this.toestand == 'spelen') {
      this.tekenSpeelScherm();
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
