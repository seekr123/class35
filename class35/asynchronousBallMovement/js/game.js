class Game{
    constructor(){

    }
    getState(){
        database.ref('gameState').on('value',function(data){
            gameState=data.val();
        });
    }

    updateName(State){
        var updateStateRef=database.ref('/');
        updateStateRef.update({
            gameState:State
        })
    }

    start(){
        if(gameState===0){
            player=new Player();
            player.getCount();
            form=new Form();
            form.display();

        }
    }

}