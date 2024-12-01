<script>

import { RouterLink, RouterView } from 'vue-router';

export default {
  components: {
    RouterLink,
    RouterView,
  },
};
</script>

<!-- Menue de navigation -->

<template>
  <div>
    <header>
      <div class="wrapper"> 
        <h1>Mon Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#"><img src="../img/fleche.png" alt=""></a></li>
          <li><router-link :to="{ name: 'home' }" active-class="current">Accueil</router-link></li>
          <li><router-link :to="{ name: 'presentation' }" active-class="current">presentation</router-link></li>
          <li><router-link :to="{ name: 'Creation' }" active-class="current">Creation</router-link></li>
          <li><router-link :to="{ name: 'Contact' }" active-class="current">Contact</router-link></li>
        </ul>
      </nav>

      </div>
    </header>
    <RouterView />

  <!-- Footer -->

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



nav ul {
    background-color: rgb(20, 102, 156);
    display: flex;
    justify-content: space-around;
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    margin-top: 0;
}

nav ul li {
    color: white;
    font-size: 2rem;
    list-style-type: none;
}

nav a img{
  height: 35px;
  display: flex;
  align-items: center;
}

nav a:hover{
  background-color: hsla(180, 84%, 54%, 0.2);
}

nav ul li a.current {
  text-decoration: underline;
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
}
</style>

