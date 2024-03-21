<template>
    <div id="block-404">
        
       <h2 class="titre-404">Page 404</h2>
       <p class="content-404">La page est introuvable. Veuillez cliquez sur le boutton "Accueil" !</p>
       <button id="acc-btn"><RouterLink to="/">Accueil</RouterLink></button>
       <RouterView />
    </div>
    
</template>


<script>
 

export default {
    name: "PageNotFound",
} 
</script>


<style>

    .titre-404{
        font-size: 100px;
        margin-bottom: 40px;
    }
    .content-404{
        font-size: 70px;
        margin-top: 10px;
        margin-bottom: 60px;
    }

    #block-404{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #acc-btn{
        height: 50px;
        width: 150px;
        font-size: 2em;
        margin-bottom: 60px;
        text-decoration-line: none;
    }
</style>