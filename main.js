let sentence=['Welcome to your friendly neighbourhood library...There is no friend as loyal as a book ']
let p=document.getElementById('display')
let arrsentence=0;
let arrWords=0;

function auto() {
    letterword=sentence[arrsentence][arrWords]
    display.innerHTML+=letterword
    arrWords++
    setTimeout(function () {
        if (sentence[arrsentence][arrWords]) {
            auto()
            
        }
        else{
            clear()
        }
        
    },100);
    
}
auto()

function clear() {
    if (display.innerHTML=='') {
        if (sentence[arrsentence+1]) {
            arrsentence++
            arrWords=0;
            auto()
            
        }
        else{
            arrsentence=0
            arrWords=0
            auto()
        }
        return;
        
    }

    display.innerHTML=display.innerHTML.slice(0,-1)
    setTimeout(function () {
        clear()
        
    },100)
    
}


    
let Mybutton=document.getElementById('topBtn');

window.onscroll= function () {scroll()};

function scroll() {
    if (document.body.scrollTop >20 || document.documentElement.scrollTop > 20) {
        Mybutton.style.display = "block";
        
    }else{
        Mybutton.style.display ="none";
    }
    
}

function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0; 
  }

//   function of browse button
  const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    window.location.href = './booklib.html'; 
  });

//   function for trending books
 const btn = document.getElementById('trendingButton');
 btn.addEventListener('click', function() {
   window.location.href = './trending&ebooks.html'; 
 });
