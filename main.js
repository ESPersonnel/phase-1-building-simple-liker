// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta http-equiv="content-type" content="text/html; charset=utf-8" />
//     <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
//     <link rel="stylesheet" href="./style.css">

//     <title>Simple Liker</title>
//   </head>
//   <body>
//     <div id="modal">
//       <h2>Error!</h2>
//       <p id="modal-message"></p>
//     </div>

//     <header>
//       <h1>Simple Liker</h1>
//     </header>
//     <article class="media-post" id="201811189">
//       <header>
//         <h2> <span>Byron Flatiron</span> says:</h2>
//       </header>
//       <p>Practice your JavaScript!</p>
//       <footer>
//         <ul>
//           <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
//         </ul>
//       </footer>
//     </article>
//     <article class="media-post" id="201811190">
//       <header>
//         <h2> <span>Rashaun Flatiron</span> says:</h2>
//       </header>
//       <p>Practice your Ruby!</p>
//       <footer>
//         <ul>
//           <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
//         </ul>
//       </footer>
//     </article>
//     <article class="media-post" id="201811191">
//       <header>
//         <h2> <span>Matt Flatiron</span> says:</h2>
//       </header>
//       <p>Practice your Python!</p>
//       <footer>
//         <ul>
//           <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
//         </ul>
//       </footer>
//     </article>
//     <article class="media-post" id="201811192">
//       <header>
//         <h2> <span>Yunchu Flatiron</span> says:</h2>
//       </header>
//       <p>Practice your Java!</p>
//       <footer>
//         <ul>
//           <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
//         </ul>
//       </footer>
//     </article>
//     <article class="media-post" id="201811193">
//       <header>
//         <h2> <span>Hussein Flatiron</span> says:</h2>
//       </header>
//       <p>Practice your Elixr!</p>
//       <footer>
//         <ul>
//           <li class="like">Like! <span class="like-glyph">&#x2661;</span></li>
//         </ul>
//       </footer>
//     </article>
//   </body>
//   <script src="main.js" charset="utf-8"></script>
// </html>

// Add the .hidden class to the error modal in the HTML so it does not appear when the page first loads
// When a user clicks on an empty heart:
// Invoke mimicServerCall to simulate making a server request
// When the "server" returns a failure status:
// Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
// Display the error modal by removing the .hidden class
// Display the server error message in the modal
// Use setTimeout to hide the modal after 3 seconds (add the .hidden class)
// When the "server" returns a success status:
// Change the heart to a full heart
// Add the .activated-heart class to make the heart appear red
// When a user clicks on a full heart:
// Change the heart back to an empty heart
// Remove the .activated-heart class

// describe( "main.js", () => {
//   it("contains a hidden modal", () => {
//     let modal = document.querySelector('.hidden')
//     expect(modal).not.to.equal(null)
//   } )
// } )

// main.js
// contains a hidden modal:

// AssertionError: expected null to not equal null
// + expected - actual


// at Context.<anonymous> (test/indexTest.js:11:26)
// at processImmediate (node:internal/timers:466:21)

// Use backtick quotes where necessary to avoid escaping the quotes.

document.querySelectorAll('.like').forEach(like => { // for each like button
  like.addEventListener('click', (event) => { // add a click event listener
    mimicServerCall().then(() => { // mimic a server call
      event.target.innerHTML = FULL_HEART // change the heart to a full heart
      like.classList.add('activated-heart') // add the activated-heart class to the like button
    }).catch(() => { // if the server call fails
      document.querySelector('#modal').classList.remove('hidden') // remove the hidden class from the modal
      document.querySelector('#modal-message').innerHTML = 'Server error!' // display the server error message in the modal
      setTimeout(() => { // hide the modal after 3 seconds
        document.querySelector('#modal').classList.add('hidden') // add the hidden class to the modal
      }, 3000)
    }
    )
  }
  )
}
)


// document.querySelectorAll('.like').forEach(function(likeButton) {
//   likeButton.addEventListener('click', function(event) {
//     mimicServerCall(event.target).then(function(response) {
//       if (response.status === 'success') {
//         event.target.innerHTML = FULL_HEART
//         event.target.classList.add('activated-heart')
//       } else {
//         document.querySelector('#modal-message').innerHTML = response.message
//         document.querySelector('#modal').classList.remove('hidden')
//         setTimeout(function() {
//           document.querySelector('#modal').classList.add('hidden')
//         }, 3000)
//       }
//     }
//     ).catch(function() {
//       document.querySelector('#modal-message').innerHTML = 'Server error'
//       document.querySelector('#modal').classList.remove('hidden')
//       setTimeout(function() {
//         document.querySelector('#modal').classList.add('hidden')
//       }, 3000)
//     }
//     )
//   }
//   )
// }
// )


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
