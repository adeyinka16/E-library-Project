// CAROUSEL
$('#FadeCarousel').carousel({
  interval: 10000
})

$('.carousel .carousel-item').each(function(){
    let minPerSlide = 4;
    let next = $(this).next();
    if (!next.length) {
    next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    for (let i=0;i<minPerSlide;i++) {
        next=next.next();
        if (!next.length) {
        	next = $(this).siblings(':first');
      	}
        
        next.children(':first-child').clone().appendTo($(this));
      }
});


// ARROW FUNCTION
let caroItem = document.querySelector('.carousel-item');
let leftArrow = document.querySelector('.left-arrow');
let rightArrow = document.querySelector('.right-arrow');
let images = document.querySelectorAll('.carousel-item image');
let imageWidth = images[0];
let currentPosition = 0;

leftArrow.addEventListener('click', () => {
  currentPosition += imageWidth;
  caroItem.style.transform = `translateX(${currentPosition}px)`;
  checkArrows();
});

rightArrow.addEventListener('click', () => {
  currentPosition -= imageWidth;
  caroItem.style.transform = `translateX(${currentPosition}px)`;
  checkArrows();
});

function checkArrows() {
  if (currentPosition === 0) {
    leftArrow.classList.add('disabled');
  } else {
    leftArrow.classList.remove('disabled');
  }

  if (currentPosition === -(imageWidth * (images.length - 1))) {
    rightArrow.classList.add('disabled');
  } else {
    rightArrow.classList.remove('disabled');
  }
}

  


// Select the search input, search button, and book cards
const Input = document.querySelector('.search-container input');
const Button = document.querySelector('.search-container button');
const bookCards = document.querySelectorAll('.book-card');


// SEARCH BUTTON 

// Attach an event listener to the search button
Button.addEventListener('click', event => {
  const searchQuery = Input.value;
 bookCards.forEach(bookCard => {
    const bookTitle = bookCard.querySelector('.text-item').textContent;
    if (bookTitle.includes(searchQuery)) {
      bookCard.style.display = '';
    } else {
      bookCard.style.display = 'none';
    }
  });
});

// SEARCH INPUT

// Attach an event listener to the search input
Input.addEventListener('input', event => {
  const searchQuery = event.target.value;
  bookCards.forEach(bookCard => {
    const bookTitle = bookCard.querySelector('.text-item').textContent;
    if (bookTitle.includes(searchQuery)) {
      bookCard.style.display = '';
    } else {
      bookCard.style.display = 'none';
    }
  });
});



