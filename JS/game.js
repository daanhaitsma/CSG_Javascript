
let canvas;
let game;

function setup() {
    canvas = createCanvas(450,450);
    canvas.parent('processing');

    noLoop();

    game = new Game();
    game.reset();
    game.draw();
}

const GameState = {
    PRE_GAME: 'pre_game',
    PAUSED: 'paused',
    BETWEEN_LEVELS: 'between_levels',
    PLAYING: 'playing',
    LOST: 'lost',
    WON: 'won',
};

class Game {
    gameState;
    level;
    score;

    reset() {
        this.setState(GameState.PRE_GAME);
        this.level = 1;
        this.score = 0;
    }

    setState(newState) {
        this.gameState = newState;
    }

    draw() {
        background('#41803c');

        switch (this.gameState) {
            case GameState.PRE_GAME:
                this.drawPreGame();
                break;
            case GameState.PAUSED:
                this.drawPaused();
                break;
            case GameState.BETWEEN_LEVELS:
                this.drawBetweenLevels();
                break;
            case GameState.PLAYING:
                this.drawPlaying();
                break;
            case GameState.LOST:
                this.drawLost();
                break;
            case GameState.WON:
                this.drawWon();
                break;
        }
    }

    handleKeyInput(key) {
        switch (this.gameState) {
            case GameState.PRE_GAME:
                // In the pre_game state, pressing space starts the game
                if (key === ' ') {
                    this.setState(GameState.PLAYING);
                }
                break;
            case GameState.PAUSED:
                // In the paused state, pressing space or escape un-pauses the game
                if (key === ' ' || key === 'Escape') {
                    this.setState(GameState.PLAYING);
                }
                break;
            case GameState.BETWEEN_LEVELS:
                // In the between_levels state, pressing space plays the next level
                if (key === ' ') {
                    this.setState(GameState.PLAYING);
                    this.level++;
                }
                break;
            case GameState.PLAYING:
                // In the playing state, pressing P or escape pauses the game
                if (key === 'p' || key === 'Escape') {
                    this.setState(GameState.PAUSED);
                }
                // In the playing state, pressing space automatically wins the level
                if (key === ' ') {
                    this.score += round(random(1, 10));
                    this.setState(GameState.BETWEEN_LEVELS);
                }
                // In the playing state, pressing W automatically wins the game
                if (key === 'w') {
                    this.setState(GameState.WON);
                }
                // In the playing state, pressing L automatically loses the game
                if (key === 'l') {
                    this.setState(GameState.LOST);
                }
                break;
            case GameState.LOST:
                // In the lost state, pressing space starts a new game
                if (key === ' ') {
                    this.reset();
                }
                break;
            case GameState.WON:
                // In the won state, pressing space starts a new game
                if (key === ' ') {
                    this.reset();
                }
                break;
        }
    }

    drawPreGame() {
        background('#fec013');
        this.drawMessage('Klaar voor het spel?\nDruk spatie om te starten', 'black');
    }

    drawPaused() {
        background('#015d9c');
        this.drawHUD();
        this.drawMessage('Het spel is gepauzeerd.\nDruk spatie om het spel te hervatten');
    }

    drawBetweenLevels() {
        background('#ba087d');
        this.drawHUD();
        this.drawMessage('Klaar voor het volgende level?\nDruk spatie om te starten');
    }

    drawPlaying() {
        background('#c4bfea');
        this.drawHUD('black');
        this.drawMessage(`Dit is level ${this.level}.\nDruk W om te winnen, L om te verliezen, of\nspatie om naar het volgende level te gaan.\nEscape of P pauzeert het spel`, 'black');
    }

    drawLost() {
        background('#B50016');
        this.drawMessage(`Je hebt verloren!\nJe score: ${this.score}.\n\nDruk op statie om een nieuw spel te starten`);
    }

    drawWon() {
        background('#198B26');
        this.drawMessage(`Je hebt gewonnen!\nJe score: ${this.score}.\n\nDruk op statie om een nieuw spel te starten`);
    }

    drawHUD(textColor = 'white') {
        push();

        noStroke();

        fill('#EEEEEE');
        rect(0, 0, width, 24);

        fill('black');
        textSize(16);
        textAlign(LEFT);
        text(`︎Score: ${this.score}`, 10, 20);

        textAlign(RIGHT);
        text('❤ ❤ ❤ ❤ ❤', width - 10, 20);

        pop();
    }

    drawMessage(message, color = 'white') {
        push();
        textStyle(BOLD);
        fill(color);
        textSize(20);
        textAlign(CENTER, CENTER);
        text(message, width / 2, height / 2);
        pop();
    }
}

function keyPressed() {
    game.handleKeyInput(key);
    game.draw();
}
