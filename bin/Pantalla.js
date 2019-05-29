//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

class Pantalla {

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    constructor(app) {

        this.app = app;

        //audio
        this.boton = this.app.loadSound("/data/Audio/button.mp3");
        //fuentes
        this.fuente = this.app.loadFont("/data/Fonts/Kidstar.ttf")

        this.nivel = "Main";

        //nubes del main
        this.nubes = this.app.loadImage("/data/Escenario/Nubes/nubes.png");
        this.nubes1x = -100;
        this.nubes2x = 3900;

        //instrucciones
        this.intrucciones = this.app.loadImage("/data/Escenario/Iconos/instrucciones.png")
        this.volver = this.app.loadImage("/data/Escenario/Iconos/back.png")

        //logo
        this.logo = this.app.loadImage("/data/Escenario/Iconos/logo.png");
        this.logoY = 200;
        this.logoYMul = 0.2;
        this.logoZoom = 1;
        this.logoMul = 0.0025;

        //fondo
        this.fondo = this.app.loadImage("/data/Escenario/Nubes/fondo.png")
        this.montaña = this.app.loadImage("/data/Escenario/Nubes/montaña.png");

        //marca
        this.fuenteZoom = 25;
        this.fuenteMul = 0.2;

        //botones
        this.help = this.app.loadImage("/data/Escenario/Iconos/help.png");
        this.jugar = this.app.loadImage("/data/Escenario/Iconos/jugar.png");
        this.back = this.app.loadImage("/data/Escenario/Iconos/back.png");

        //puntaje
        this.puntuacion = this.app.loadImage("/data/Escenario/Iconos/score.png");
        this.aumento = 0;
        this.crecimiento = 0;
        this.unoPuntaje = 0;
        this.dosPuntaje = 0;
    } //cierra el constructor

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    pintar() {

        switch (this.nivel) {
            case "Main":

                this.app.image(this.fondo, 0, 0);

                //bucle de nubesitas
                this.nubesitas();

                //logo
                this.app.imageMode(this.app.CENTER);
                this.app.image(this.logo, this.app.width / 2, this.logoY, this.logo.width / 3 * this.logoZoom, this.logo.height / 3 * this.logoZoom);

                this.logoZoom += this.logoMul;
                if (this.logoZoom > 1.5) this.logoMul *= -1
                if (this.logoZoom < 1) this.logoMul *= -1

                this.logoY += this.logoYMul;
                if (this.logoY > 250) this.logoYMul *= -1;
                if (this.logoY < 150) this.logoYMul *= -1;


                //marca
                this.app.fill(255);
                this.app.textFont(this.fuente, this.fuenteZoom);
                this.app.textAlign(this.app.CENTER);
                if (this.app.mouseX > 950 && this.app.mouseX < 1073 && this.app.mouseY > 630 && this.app.mouseY < 648) {
                    this.fuenteZoom += this.fuenteMul;
                    if (this.fuenteZoom > 35) this.fuenteMul *= -1;
                    if (this.fuenteZoom < 25) this.fuenteMul *= -1;
                }
                this.app.text("PayDey-2018", 1020, 650);


                //botones

                this.app.image(this.jugar, this.app.width / 2 - 200, 550, this.help.width / 4, this.help.height / 4);
                if (this.app.mouseX > 289 && this.app.mouseX < 500 && this.app.mouseY > 505 && this.app.mouseY < 600) this.app.image(this.jugar, this.app.width / 2 - 200, 550, this.help.width / 3.5, this.help.height / 3.5);


                this.app.image(this.help, this.app.width / 2 + 200, 550, this.help.width / 4, this.help.height / 4);
                if (this.app.mouseX > 690 && this.app.mouseX < 900 && this.app.mouseY > 500 && this.app.mouseY < 600) this.app.image(this.help, this.app.width / 2 + 200, 550, this.help.width / 3.5, this.help.height / 3.5);

                break;

            case "Help":
                this.app.imageMode(this.app.CORNER);
                this.app.image(this.fondo, 0, 0);
                this.app.image(this.intrucciones, 0, 0, 1200, 700);
                this.app.imageMode(this.app.CENTER);
                this.app.image(this.back, 100, 600, 150, 150);
                if (this.app.dist(this.app.mouseX, this.app.mouseY, 100, 600) < 150) this.app.image(this.back, 100, 600, 170, 170);

                break;


            case "Juego":
                this.app.image(this.fondo, 0, 0);

                break;

        }
    } //cierra el metodo pintar
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    nubesitas() {

        //montañas

        if (this.nivel == "Juego") {
            this.app.imageMode(this.app.CORNER);
            this.app.image(this.montaña, -100, 400, this.montaña.width * 1.5, this.montaña.height * 1.5);
        }

        //bucle de nubesitas  
        this.app.imageMode(this.app.CENTER);

        if (this.nivel == "Main") {
            this.app.image(this.nubes, this.nubes1x, 400);
            this.app.image(this.nubes, this.nubes2x, 400);
        }

        if (this.nivel == "Juego") {
            this.app.image(this.nubes, this.nubes1x, 20);
            this.app.image(this.nubes, this.nubes2x, 20);
        }

        this.nubes1x -= 0.5;
        this.nubes2x -= 0.5;
        if (this.nubes1x <= -4000) this.nubes1x = 4000
        if (this.nubes2x <= -4000) this.nubes2x = 4000

    } //cierra el metodo nubes

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    puntajes(ronda, unoGano, dosGano) {

        if (this.aumento < 1) this.aumento += 0.02;
        this.app.image(this.puntuacion, this.app.width / 2, this.app.height / 2, this.puntuacion.width * this.aumento, this.puntuacion.height * this.aumento);

        if (this.aumento >= 1) {
            this.app.fill(255);
            this.aumento = 1;
            this.app.textSize(80);
            this.app.text("Puntuacion Parcial", this.app.width / 2, 125);
            this.app.textSize(70);
            this.app.text("Ronda " + ronda + " de 10", this.app.width / 2, 200);
            this.app.textSize(40);
            this.app.text("Oveja Uno:", 200, 300);
            this.app.text("Oveja DOs:", 200, 450);

            if (unoGano && this.crecimiento < 100) {
                this.unoPuntaje += 1;
            }

            if (dosGano && this.crecimiento < 100) {
                this.dosPuntaje += 1;
            }
            this.crecimiento += 1;

            this.app.text(this.unoPuntaje, 200, 350);
            this.app.text(this.dosPuntaje, 200, 500);
            this.app.noStroke();
            this.app.fill(195, 192, 0);
            this.app.rect(400, 300, this.app.map(this.unoPuntaje, 0, 1000, 0, 600), 75);

            this.app.fill(0, 148, 193);
            this.app.rect(400, 450, this.app.map(this.dosPuntaje, 0, 1000, 0, 600), 75);

            this.app.fill(255);
            this.app.textSize(40);
            if (this.app.mouseX > 525 && this.app.mouseY > 588 && this.app.mouseX < 660 && this.app.mouseY < 615) this.app.textSize(45);
            this.app.text("Continuar", this.app.width / 2, 600);


        }

    } //cierra le metodo puntajes
} //cierra la clase pantalla