//A princípio, é preciso adicionar algumas configurações básicas de nossa página web, como a altura(height) e a largura(width) de nossa tela
//Adicionamos também a configuração básica "Phaser.AUTO" que indicará para o navegador escolher um renderizador automático para a página
var config = {
    type: Phaser.AUTO,
    width: 800,
    height:600,
    //Além das configurações básicas já citadas, torna-se evidente que adicionamos as funções que representam o ciclo de vida de nosso jogo(preload, create e update)
    scene: {
        preload: preload,
        create: create,
        update: update
    }

};
//Adicionamos aqui algumas variáveis que nos permitirá adicionar novos elementos ao jogo
//Incluindo também uma variável que guardará as configurações phaser
var game = new Phaser.Game(config);
var peixinho;

// Na função "preload" precisamos deixar pré-dispostos os arquivos de imagem que iremos utilizar no código.

function preload(){
    //Nesse sentido, primeiramente prepararemos um cenário que se assemelha ao mar para o nosso pequeno projeto.

    this.load.image('mar', 'assets/aquario_bob_esponja.jpg');

    this.load.image('alga', 'assets/algas.png');

    //Já agora, preparamos a logo do Instituto de Tecnologia e Liderança (Inteli)
    this.load.image('logo', 'assets/logo-inteli_branco.png');

    //Por fim, preparamos a imagem do personagem que iremos utilizar
    this.load.image('peixe', 'assets/peixes/peixe_serio.png');



}

//Na função create será onde adicionaremos e especificaremos algumas características como posicionamento e tamanho de imagens na página web
function create(){
    this.add.image(400, 300, 'mar').setScale(0.85);
    this.add.image(400, 525, 'logo').setScale(0.5);
    this.add.image(200, 507, 'alga').setScale(0.4);

    peixinho = this.add.image(400, 300, 'peixe');
//Para se adicionar um efeito complementar, adicionamos uma rotação
    peixinho.setFlip(true, false);





}
//Por fim, o último ciclo do game(update) é responsável por atualizações lógicas do jogo
function update(){
// Salva a posição anterior do peixinho
    var move = peixinho.x

    //Atualiza a posição do peixinho para seguir o mouse
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;

    // Verifica a direção do movimento e ajusta a orientação do peixinho
    if (move > peixinho.x)
     // Se o peixinho está se movendo para a direita, mantém a imagem na orientação padrão
 peixinho.setFlip(false, false)
else if (move < peixinho.x)

 // Se o peixinho está se movendo para a esquerda, inverte a imagem horizontalmente
peixinho.setFlip(true, false)

}
    

