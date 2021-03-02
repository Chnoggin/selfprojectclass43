class Form {
 constructor() {
    this.name1 = createElement('Richard Stybak');
    this.name2 = createElement('Anthony Trinidad');

    this.button1 = createButton('player1');
    this.button2 = createButton('player2');

    this.title = createElement('h1');
    this.reset = createButton('reset');
 }
 display () {
     this.title.html("Bristol Streetfighter");
     this.title.position(350,50);

     this.name1.position(200,300);
     this.name2.position(300,300);

     this.button1.position(200,330);
     this.button2.position(300,330);

     this.reset.position(390,390);
 }
}
