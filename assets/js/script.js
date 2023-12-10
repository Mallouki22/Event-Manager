 // Tableau pour stocker les événements
 var events = [
    {image:"https://cdn.pixabay.com/photo/2018/05/31/11/54/celebration-3443779_640.jpg", titre: "Carte 1", contenu: "Contenu de la carte 1" },
    {image:"https://ticketing.vichall.org.uk/wp-content/uploads/2023/08/boiler-room-a4-724x1024.jpg" , titre: "Carte 2", contenu: "Contenu de la carte 2" },
    {image:"https://img.freepik.com/free-vector/people-silhouettes-with-blue-lights_1048-188.jpg" , titre: "Carte 1", contenu: "Contenu de la carte 1" },
    {image:"https://picsum.photos/id/1011/800/450",titre: "Carte 2", contenu: "Contenu de la carte 2" },
    // Ajoute autant d'objets que nécessaire
];
 document.addEventListener("DOMContentLoaded", function () {
    const cartesContainer = document.getElementById("cartes-container");

    // Données des cartes


    // Fonction pour générer les cartes
    function genererCartes() {
        events.forEach(function (carte) {
            const carteElement = document.createElement("div");
            carteElement.classList.add("carte");
            carteElement.innerHTML = `
                <figure>
						<img src="${carte.image}" alt="" />
			    </figure>
                <h2>${carte.titre}</h2>
                <p>${carte.contenu}</p>
                <a href="#" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            `;
            cartesContainer.appendChild(carteElement);
        });
    }

    function genererArticle() {
        events.forEach(function (carte) {
            const article = document.createElement("article");
            const carteWrapper = document.createElement("div");
            carteWrapper.classList.add("article-wrapper");
            carteWrapper.innerHTML = `
            <figure>
                    <img src="${carte.image}" alt="" />
            </figure>`;
            const carteElement = document.createElement("div");
            carteWrapper.appendChild(carteElement);
            carteElement.classList.add("article-body");
            article.appendChild(carteWrapper);
            carteElement.innerHTML = `
               
                <h2>${carte.titre}</h2>
                <p>${carte.contenu}</p>

                <a href="#" class="read-more">
                Read more <span class="sr-only">about this is some title</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </a>
            `;
            cartesContainer.appendChild(article);
        });
    }
    // Appelle la fonction pour générer les cartes
    genererArticle();
});
 // Fonction pour ajouter un événement au tableau
 function addEvent() {
     // Obtenez les valeurs du formulaire
     var eventName = document.getElementById('eventName').value;
     var eventDate = document.getElementById('eventDate').value;
     var eventPhoto = document.getElementById('photo').value;
     var eventDescription = document.getElementById('eventDescription').value;

     // Validez que les champs nécessaires sont remplis
     if (eventName && eventDate && eventDescription) {
         // Créez un objet événement
         var newEvent = {
             name: eventName,
             date: eventDate,
             photo: eventPhoto,
             description: eventDescription
         };

         // Ajoutez l'événement au tableau
         events.push(newEvent);

         // Réinitialisez le formulaire
         document.getElementById('eventName').value = '';
         document.getElementById('eventDate').value = '';
         document.getElementById('photo').value = '';
         document.getElementById('eventDescription').value = '';

         // Mise à jour de l'affichage des événements (appelez votre fonction displayEvents ici)
         displayEvents();
     } else {
         // Gérez le cas où des champs sont manquants
         alert('Veuillez remplir tous les champs du formulaire.');
     }
 }

 // Fonction pour afficher les événements (vous devrez implémenter cette fonction)
 function displayEvents() {
     // Implémentez le code pour afficher les événements dans votre interface
     console.log(events);
 }