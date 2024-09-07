const profile = document.querySelector(".profile");
const shareBtn = document.querySelector(".share-btn");
const shareSocials = document.querySelector(".share-to");
const postNote = document.querySelector(".note");
const closeSocials = document.querySelector(".close-share");
const angle = document.querySelector(".angle");
const pinterest = document.querySelector(".pinterest");
const twitter = document.querySelector(".twitter");
const faceBook = document.querySelector(".facebook");

shareBtn.addEventListener("click", function () {
  profile.classList.toggle("hidden");
  shareSocials.classList.toggle("hidden");
  postNote.classList.remove("rounded-b-2xl");
});

closeSocials.addEventListener("click", function () {
  profile.classList.toggle("hidden");
  shareSocials.classList.add("hidden");
  postNote.classList.add("rounded-b-2xl");
});

if (window.innerWidth > 760) {
    shareBtn.addEventListener("click", function () {
        profile.classList.remove("hidden");
        shareSocials.className.toggle('hidden');
        postNote.classList.add("rounded-br-2xl"); 
    });
}

// if (!shareSocials.className.includes('hidden')) {
//   profile.classList.toogl
// }


// Creating Hover
pinterest.addEventListener('mouseover', function() {
  shareSocials.style.backgroundColor = 'red'
  shareSocials.style.color = 'white'
  angle.style.backgroundColor = 'red'
})

pinterest.addEventListener('mouseout', function(){
  shareSocials.style.backgroundColor = ''
  shareSocials.style.color = ''
  angle.style.backgroundColor = ''
})

twitter.addEventListener('mouseover', function() {
  shareSocials.style.backgroundColor = 'black'
  angle.style.backgroundColor = 'black'
  shareSocials.style.color = 'white'
})

twitter.addEventListener('mouseout', function(){
  shareSocials.style.backgroundColor = ''
  shareSocials.style.color = ''
  angle.style.backgroundColor = ''
})
faceBook.addEventListener('mouseover', function(){
  shareSocials.style.backgroundColor = 'blue'
  shareSocials.style.color = 'white'
  angle.style.backgroundColor = 'blue'
})
faceBook.addEventListener('mouseout', function(){
  shareSocials.style.backgroundColor = ''
  shareSocials.style.color = ''
  angle.style.backgroundColor = ''
})