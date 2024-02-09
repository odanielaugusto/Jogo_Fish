var config = {
    type: Phaser.AUTO,
    width: 800,
    height:600,
    
    scene: {
        preload: preload,
        create: create,
        update: update
    }

};

var game = new Phaser.Game(config);
var peixinho;

// Na função "preload" precisamos deixar pré-dispostos os arquivos de imagem que iremos utilizar no código.

function preload(){
    //Nesse sentido, primeiramente prepararemos um cenário que se assemelha ao mar para o nosso pequeno projeto.
    this.load.image('mar', 'assets/bg_azul-claro.png');

    this.load.image('alga', 'assets/algas.png');

    //Já agora, preparamos a logo do Instituto de tecnologia e Liderança (Inteli)
    this.load.image('logo', 'assets/logo-inteli_azul.png');

    //Por fim, preparamos a imagem do nosso personagem que iremos utilizar
    this.load.image('peixe', 'assets/peixes/peixe_serio.png');



}
function create(){
    this.add.image(400, 300, 'mar');
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(200, 507, 'alga').setScale(0.4);

    peixinho = this.add.image(400, 300, 'peixe');

    peixinho.setFlip(true, false);

    



}
function update(){

    var move = peixinho.x

    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    if (move > peixinho.x)
 peixinho.setFlip(false, false)
else if (move < peixinho.x)
peixinho.setFlip(true, false)

}
    

