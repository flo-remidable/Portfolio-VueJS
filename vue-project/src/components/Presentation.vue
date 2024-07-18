<template>
    <div>
        
            <div id="presentation-div">
              <h2 class="presentation-titre">Présentation</h2>
  
              <div class="presentation-content">
                Bonjour a toutes et à tous, pour commencer je m'apelle Florian et j'ai 27ans. 
                Je suis actuellement en formation en tant que développeur 
                full stack grace au Centre Europeen de Formation.
                J'ai creer ce site pour vous présenter mes réalisation effectuer 
                durant ma formation et ainsi vous montrer mon savoir faire acquis jusqu'a présent.
              </div>
            </div>
      
  
  
  
    </div>   
  </template>
  
  
  <script>
    export default {
      name: "Presentation",
  }
  </script>
  
  
  <style>
  .presentation-content{
      font-size: 1.5rem;
      width: 500px;
  }
  
  
  #presentation-div{
      display: flex;
      flex-direction: column;
      align-items: center; 
      margin-bottom: 100px;
      margin-top: 60px;   
  }
  
  h2{
      font-size: 3rem;
  }
  </style>