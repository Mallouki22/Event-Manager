 // Tableau pour stocker les événements
 var events = [];

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