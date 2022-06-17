// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'


// document.querySelectorAll('.like').forEach(like => { // for each like button
//   like.addEventListener('click', (event) => { // add a click event listener
//     mimicServerCall().then(() => { // mimic a server call
//       event.target.innerHTML = FULL_HEART // change the heart to a full heart
//       like.classList.add('activated-heart') // add the activated-heart class to the like button
//     }).catch(() => { // if the server call fails
//       document.querySelector('#modal').classList.remove('hidden') // remove the hidden class from the modal
//       document.querySelector('#modal-message').innerHTML = 'Server error!' // display the server error message in the modal
//       setTimeout(() => { // hide the modal after 3 seconds
//         document.querySelector('#modal').classList.add('hidden') // add the hidden class to the modal
//       }, 3000)
//     }
//     )
//   }
//   )
// }
// )

// revision

// Something
// const likeButtons = document.querySelectorAll('.like')
// likeButtons.forEach(likeButton => {
//   likeButton.addEventListener('click', (event) => {
//     mimicServerCall().then(() => {
//       event.target.innerHTML = FULL_HEART
//       likeButton.classList.add('activated-heart')
//     }).catch(() => {
//       document.querySelector('#modal').classList.remove('hidden')
//       document.querySelector('#modal-message').innerHTML = 'Server error!'
//       setTimeout(() => {
//         document.querySelector('#modal').classList.add('hidden')
//       }
//       , 3000)
//     }
//     )
//   }
//   )
// }
// )

const likes = document.querySelectorAll('.like_glyph')
const errorMessage = document.querySelector('modal')

for (const like of likes) {
  like.addEventListener('click', () => {
    mimicServerCall("http://mimicServer.example.com").then(() => {
      if (like.innerText =   EMPTY_HEART) {
        like.innerText = FULL_HEART
        like.className = 'activated-heart'
      } else {
        like.innerText = ERROR
      }
    }).catch(() => {
      errorMessage.className = "";
      errorMessage.innerText = err
      setTimeout(() => errorMessage.className = "hidden", 3000)
    }
    )
  }
  )
}





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
