class Huis {
    postcode = null;
    huisnummer = null;
    aantalVerdiepingen = null;
    voordeurOpen = false;

    teken() {
        // ...
    }

    openVoordeur() {
        this.voordeurOpen = true;
    }
}

var huis1 = new Huis();
var huis2 = new Huis();
var huis3 = new Huis();
