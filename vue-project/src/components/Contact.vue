<template>
    <div>
      <section id="contact">
          <h2 class="contact-titre">Pour me contacter</h2>
          <div id="error-message">
            Tous les champs doivent être remplis !!
          </div>
          <div id="form-content">
            <form action="https://formspree.io/f/xbjnjone" method="post" id="form">
              <div id="nom-prenom">
                <div id="first-name">
                  <label for="prénom">Prénom</label>            
                  <input type="text" id="prénom" name="prénom" placeholder="Prénom (nécessaire)">
                </div>
                <div id="last-name">      
                  <label for="nom">Nom</label>
                  <input type="text" id="nom" name="nom" placeholder="Nom (nécessaire)">
                </div>
              </div>
              <label for="message">Message</label>
              <textarea name="message" id="message" cols="35" rows="10" placeholder="Votre message..."></textarea>
              <input type="submit" id="boutton">          
            </form>
          </div>             
        </section>
    </div>
</template>

<script>
  export default {
  name: "Contact",

  mounted() {
    const formElement = document.body.querySelector('form');
    formElement.addEventListener('submit', async (e) => {
      e.preventDefault();

      const firstNameInput = document.body.querySelector('#prénom');
      const lastNameInput = document.body.querySelector('#nom');
      const commentTextarea = document.body.querySelector('#message');
      const errorElement = document.body.querySelector('#error-message');

      if (!firstNameInput.value || !lastNameInput.value || !commentTextarea.value) {
        errorElement.style.display = 'block';
        return;
      } else {
        errorElement.style.display = 'none';
      }

      try {
        const response = await fetch('https://formspree.io/f/xbjnjone', {
          method: 'POST',
          body: new FormData(formElement),
        });

        if (response.ok) {
          console.log('Formulaire envoyé avec succès');
        } else {
          console.error('Erreur lors de l\'envoi du formulaire');
        }
      } catch (error) {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
      }

      formElement.reset();
      errorElement.style.display = 'none';
    });
  },
};
</script>


<style>
#message{
    width: 400px;
}

#nom-prenom{
    display: flex;
    flex-direction: row;
} 

#form-content{
    width: 400px; 
    font-size: 1.5rem;
    margin-bottom: 20px;
}

 #boutton{
    width: 100px;
}

#prénom, #nom{
    width: 195px;
    height: 1.6rem;
}


#contact{
    display: flex;  
    flex-direction: column;
    align-items: center;
    margin-top: 60px;
    margin-bottom: 60px;
}

#error-message{
    display: none;
    background-color: red;
    font-size: 1.3rem;
}

</style>