// Tableau pour stocker les événements
function redirectToModifyPage(eventId) {
  // Utilisez window.location.href pour rediriger vers la page modify.html avec l'ID dans l'URL
  window.location.href = `Modif.html?id=${eventId}`;
}
var events = [
  {
    id: 1,
    image:
      "https://cdn.pixabay.com/photo/2018/05/31/11/54/celebration-3443779_640.jpg",
    titre: "Carte 1",
    contenu: "Contenu de la carte 1",
  },
  {
    id: 2,
    image:
      "https://ticketing.vichall.org.uk/wp-content/uploads/2023/08/boiler-room-a4-724x1024.jpg",
    titre: "Carte 2",
    contenu: "Contenu de la carte 2",
  },
  {
    id: 3,
    image:
      "https://img.freepik.com/free-vector/people-silhouettes-with-blue-lights_1048-188.jpg",
    titre: "Carte 1",
    contenu: "Contenu de la carte 1",
  },
  {
    id: 4,
    image: "https://picsum.photos/id/1011/800/450",
    titre: "Carte 2",
    contenu: "Contenu de la carte 2",
  },
  // Ajoute autant d'objets que nécessaire
];

document.addEventListener("DOMContentLoaded", function () {
  const cartesContainer = document.getElementById("cartes-container");

  // Données des cartes

  // Fonction pour générer les cartes

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
 
 
               <button class="modify-button"  data-card-id="${carte.id}" onclick="redirectToModifyPage(${carte.id})" >Modify</button>

              <button class="delete-button" data-card-id="${carte.id}">Delete</button>
            `;

      cartesContainer.appendChild(article);
    });
  }

  // Fonction pour générer les cartes
  function genererCartes() {
    // Clear existing cards
    cartesContainer.innerHTML = "";
  }
  const urlParams = new URLSearchParams(window.location.search);
  const eventId = urlParams.get("id");

  // Appelez votre fonction d'édition avec l'ID récupéré
  editCard(eventId);
  function deleteCard(cardId) {
    const indexToDelete = events.findIndex((carte) => carte.id === cardId);

    if (indexToDelete !== -1) {
      events.splice(indexToDelete, 1);
      genererCartes();
      genererArticle(); // Update the display after deletion
    } else {
      console.log(`Card with ID ${cardId} not found.`);
    }
  }

  // Event listener for delete buttons
  cartesContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
      const cardId = parseInt(event.target.dataset.cardId);
      deleteCard(cardId);
    }
  });
  // Event listener for delete buttons
  cartesContainer.addEventListener("click", function (event) {
    if (event.target.classList.contains("modify-button")) {
      const cardId = parseInt(event.target.dataset.cardId);
      editCard(cardId);
    }
  });
  genererArticle();
});

// Fonction pour ajouter un événement au tableau
function addEvent() {
  // Obtenez les valeurs du formulaire
  var eventName = document.getElementById("eventName").value;
  var eventDate = document.getElementById("eventDate").value;
  var eventPhoto = document.getElementById("photo").value;
  var eventDescription = document.getElementById("eventDescription").value;

  // Validez que les champs nécessaires sont remplis
  if (eventName && eventDate && eventDescription) {
    // Créez un objet événement
    var newEvent = {
      name: eventName,
      date: eventDate,
      photo: eventPhoto,
      description: eventDescription,
    };

    // Ajoutez l'événement au tableau
    events.push(newEvent);

    // Réinitialisez le formulaire
    document.getElementById("eventName").value = "";
    document.getElementById("eventDate").value = "";
    document.getElementById("photo").value = "";
    document.getElementById("eventDescription").value = "";

    // Mise à jour de l'affichage des événements (appelez votre fonction displayEvents ici)
    displayEvents();
  } else {
    // Gérez le cas où des champs sont manquants
    alert("Veuillez remplir tous les champs du formulaire.");
  }
}

// Fonction pour afficher les événements (vous devrez implémenter cette fonction)
function displayEvents() {
  // Implémentez le code pour afficher les événements dans votre interface
  console.log(events);
}

// Inside the genererArticle function
article.appendChild(carteWrapper);
carteElement.innerHTML = `
    <h2>${carte.titre}</h2>
    <p>${carte.contenu}</p>
    <button class="modify-button" data-card-id="${carte.id}">Modify</button>
    <button class="delete-button" data-card-id="${carte.id}">Delete</button>
`;

cartesContainer.appendChild(article);

function editCard(cardId) {
  const indexToEdit = events.findIndex((carte) => carte.id === cardId);

  if (indexToEdit !== -1) {
    const existingEvent = events[indexToEdit];

    // Vérifiez si les éléments existent avant de définir leurs valeurs
    const eventNameInput = document.getElementById("eventName");
    const eventDateInput = document.getElementById("eventDate");
    const photoInput = document.getElementById("photo");
    const eventDescriptionInput = document.getElementById("eventDescription");

    if (
      eventNameInput &&
      eventDateInput &&
      photoInput &&
      eventDescriptionInput
    ) {
      eventNameInput.value = existingEvent.titre; // utilisez existingEvent.titre au lieu de existingEvent.name
      eventDateInput.value = existingEvent.date;
      photoInput.value = existingEvent.image;
      eventDescriptionInput.value = existingEvent.contenu;

      // Supprimez l'événement existant du tableau
      events.splice(indexToEdit, 1);

      // Mettez à jour l'affichage après la suppression
      genererCartes();
      genererArticle();
    } else {
      console.error("One or more input elements not found.");
    }
  } else {
    console.log(`Card with ID ${cardId} not found.`);
  }
}

// Event listener for delete and edit buttons
cartesContainer.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    const cardId = parseInt(event.target.dataset.cardId);
    deleteCard(cardId);
  } else if (event.target.classList.contains("modify-button")) {
    const cardId = parseInt(event.target.dataset.cardId);
    editCard(cardId);
  }
});
