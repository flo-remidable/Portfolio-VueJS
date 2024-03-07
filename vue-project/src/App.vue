<script>

import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>



<template>
  <div>
    <header>
      <div class="wrapper"> 
        <h1>Mon Portfolio</h1>
        <nav>
          <a href="#"><img src="../img/fleche.png" alt=""></a>
          <a href="#presentation">Présentation</a>
          <a href="#creation">Création</a>
          <a href="#contact">Contact</a>           
                    
        </nav>

      </div>
    </header>
    <RouterView />

  
    <div id="footer">
      <footer>
          <div id="text-footer">
            <small>@copyright 2023</small>
            <p>dernière mise à jour le xx/xx/xxxx</p>
          </div>
          <a href="**" target="_blank">
            <img src="../img/logofb.jpg" alt="Logo Facebook" id="face">
          </a>

          <a href="" target="_blank">
            <img src="../img/logo.twitter.webp" alt="Logo Twitter" id="twitter">
          </a>

          <a href="https://github.com/flo-remidable" target="_blank">
            <img src="../img/github.png" alt="Logo github" id="github">
          </a>
        </footer>
    </div>
  </div>
</template>

<style>

/* menue de naviguation */


h1{
    display: flex;
    justify-content: center;
    position: relative;
    top: 200px;
    font-size: 3rem;
    color: white;
}



nav {
    background-color: rgb(20, 102, 156);
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
}

nav a {
    color: white;
    font-size: 2rem;
    text-decoration: none;
}

nav a img{
  height: 35px;
  display: flex;
  align-items: center;
}

nav a:hover{
  background-color: hsla(180, 84%, 54%, 0.2);
}


/* footer */


#face{
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20px;
    right: 20px;
}

#twitter{
    position: fixed;
    width: 85px;
    height: 85px;
    right: 70px;
    bottom: 3px;
}

#github{
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 20px;
    right: 150px;
}

#text-footer{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(20, 102, 156);
    opacity: 40%;
    color: white;
    font-size: 1.2rem;
    margin-bottom: -10px;
};
</style>

