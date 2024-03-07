<script>
import Presentation from '../components/Presentation.vue';
import Creation from '../components/Creation.vue';
import Contact from '../components/Contact.vue';
  export default {
  name: 'HomeView',
  components: {
    Presentation,
    Contact,
    Creation,
  },

}



</script>

<template>
  <main>
    <RouterView />

    <Presentation id="presentation"/>


    <Creation id="creation"/>


    <Contact id="contact"/>
  </main>
  
</template>

<style>
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
</style>