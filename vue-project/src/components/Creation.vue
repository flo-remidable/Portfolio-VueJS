<template>
  <div>
    <section id="creation-all">
            <h2 class="creation-titre">Voici mes création</h2>
            <div class="creation-content">
              <div id="contenu-cv">
                <h3>Mon CV en ligne</h3>
                <img src="../../img/CV.en.ligne.png" alt="Le cv en ligne que j'ai créer le 25 mai 2023, cliquez sur la photo pour mes différents repository GitHub." class="img-cv">
              </div>

              <div id="contenu-espace-commentaire">
                <h3>Espace commentaire dynamiser</h3>
                <img src="../../img/Espace.commentaire.png" alt="l'espace commentaire que j'ai dynamiser grace a JS créer le 15 juin 2023, cliquez sur la photo pour mes différents repository GitHub." class="img-commentaire">
              </div>

              <div id="contenue-paysagiste">
                <h3>site de paysagiste(en cour)</h3>
                  <img src="../../img/paysagiste.png" alt="le site de paysagiste que je fais (pas terminé) créer le 24 mai 2023, cliquez sur la photo pour mes différents repository GitHub." class="img-paysagiste">
              </div>
            </div>
    </section>  
    
    <div id="modal" class="modal">
      <span class="close">&times;</span>
      <a href="https://github.com/flo-remidable" target="_blank"><img class="modal-content" id="img01" alt="" src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="></a>
      <div id="caption"></div>       
    </div>
  </div>
</template>



<script>
  export default {
  name: "Creation",

  mounted() {
    let images1 = document.getElementsByClassName("img-cv");
    let images2 = document.getElementsByClassName("img-commentaire");
    let images3 = document.getElementsByClassName("img-paysagiste");
    let modal = document.getElementById("modal");
    let modalContent = document.getElementById("img01"); 
    let caption = document.getElementById("caption");
    let closeBtn = document.getElementsByClassName("close");

    for (let i = 0; i < images1.length; i++) {
      images1[i].onclick = function () {
        modal.style.display = "block";
        modalContent.src = this.src;
        modalContent.alt = this.alt;
        caption.innerHTML = this.alt;
      };
    }

    for (let i = 0; i < images2.length; i++) {
      images2[i].onclick = function () {
        modal.style.display = "block";
        modalContent.src = this.src;
        modalContent.alt = this.alt;
        caption.innerHTML = this.alt;
      };
    }

    for (let i = 0; i < images3.length; i++) {
      images3[i].onclick = function () {
        modal.style.display = "block";
        modalContent.src = this.src;
        modalContent.alt = this.alt;
        caption.innerHTML = this.alt;
      };
    }

    for (let i = 0; i < closeBtn.length; i++) {
      closeBtn[i].onclick = function () {
        modal.style.display = "none";
      };
    }

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
};
</script>



<style>

.creation-titre{
    display: flex;
    justify-content: center;
}

#creation-all h3{
    display: flex;
    justify-content: center;
}


#creation-all img{
    height: 400px;
    cursor: pointer;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 50px;
    
}

.creation-content img:hover{
    box-shadow: 20px 20px 15px  black;
    
}

.creation-content{
    display: flex;
    justify-content: space-around;
    margin-bottom: 10px;
}


/* modal */


.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 50px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.9);
  }

  .modal-content {
    margin-left: 33%; 
    width: 33%;
  }

  #caption {
    margin: auto;
    display: block;
    width: 80%;
    text-align: center;
    color: white;
    padding: 10px 0;
    height: 150px;
  }
  

  .close {
    position: absolute;
    top: 15px;
    right: 35px;
    color: #f1f1f1;
    font-size: 40px;
    font-weight: bold;
    transition: 0.3s;
  }
  
  .close:hover,
  .close:focus {
    color: #bbb;
    text-decoration: none;
    cursor: pointer;
  }

</style>