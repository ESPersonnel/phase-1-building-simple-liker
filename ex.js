// Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
// document.querySelectorAll('.empty-heart').forEach(function(heart) {
//     heart.addEventListener('click', function() {
//       mimicServerCall().then(function() {
//         heart.classList.add('activated-heart');
//       }).catch(function() {
//         document.querySelector('.error-modal').classList.remove('hidden');
//         setTimeout(function() {
//           document.querySelector('.error-modal').classList.add('hidden');
//         }, 3000);
//       });
//     });
//   }
//   );

document.querySelectorAll('.empty-heart').forEach(function(heart) {
    heart.addEventListener('click', function() {
        mimicServerCall().then(function() {
        heart.classList.add('activated-heart');
        }).catch(function() {
        document.querySelector('.modal-message').classList.remove('hidden');
        setTimeout(function() {
            document.querySelector('.modal-message').classList.add('hidden');
        }, 3000);
        });
    });
    }
);

