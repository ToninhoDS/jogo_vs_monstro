
new Vue({
    el: '#app',
   data: {
    inicio: false,
    life: 100,
    monster: 100,
    ataq: 0,
    

   },
   computed: {
    result(){
        return this.life === 0 || this.monster === 0;
    },

   },
   methods: {

    iniciar(){
        this.life = 100,
        this.monster = 100
    },
    Curar(){
        return this.life =  this.life + 10, 15, 5;
     },
     Esp(){
        this.ataq = 30, 10,15
        if(this.monster > 0){
            return this.monster = this.monster - this.ataq;
        }
     },
     Ta(){
        this.ataq = 5,10
        if(this.monster > 0){
            return this.monster = this.monster - this.ataq;
        }
         
     },
     Monster(){
         this.ataq = 5,10,20
         return this.life = this.life - this.ataq;
     }
   },

});