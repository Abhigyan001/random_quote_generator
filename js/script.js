  var tweetURL = "";
  var tempList = "";
  var randomQuote = "";
  var html = "";
  var quoteBody = document.querySelector("#quote-body");
  var quote = document.querySelector("#quote");
  var button = document.querySelector("#quote-btn");
  var share = document.querySelector("#share");
  
  
  // Object with quotes & authors
  var quotes = [
   { 
    text: "I try to create sympathy for my characters, then turn the monsters loose.",
    author: "- Stephen King -"
   },
   {
    text: "Prose is architecture, not interior decoration.",
    author: "- Ernest Hemingway -"
   },
   { 
    text: "Most writers regard the truth as their most valuable possession, and therefore are most economical in its use." ,
    author: "- MarkTwain -"
   },
   { 
    text: "Do what you can, with what you have, where you are.", 
    author: "- Theodore Roosevelt -"
   },
   { 
    text: "It is perfectly okay to write garbage—as long as you edit brilliantly.", 
    author: "- C. J. Cherryh -"
   },
   { 
    text: "Don't cry because it's over. Smile because it happened.", 
    author: "- Dr.Seuss -"
   },
   { 
    text: "A blank piece of paper is God’s way of telling us how hard it to be God." ,
    author: "- Sidney Sheldon -"
   }
   ]
  
  
  // Shuffle the quotes  
  function randomize(){
    tempList = Object.keys(quotes);
    randomQuote = tempList[ Math.floor(Math.random() * tempList.length)];
    console.dir(randomize);
  }
  
  // Load a quote on the page
  function loadQuote(){
    randomize();
    
    // Create an element to load a quote
    html = '<p id="quote"><q>' + 
            quotes[randomQuote].text + 
            '</q><span class="quote-author">' + 
            quotes[randomQuote].author + '</span></p>';
    
    // Create Tweeter URL to share a quote
    tweetURL = "https://twitter.com/intent/tweet?text=" + 
               '"' +  quotes[randomQuote].text +
               '" ' + quotes[randomQuote].author +
               ' %23wisdom ' + '%23quotes ' + '%23inspiration ';
    
    // Display element with a quote on the page
    quoteBody.innerHTML = html;
   
  }
  loadQuote();  
    
  // Load a new random quote on click
  button.onclick = function(){
     loadQuote();
  }

  // Open Twitter window
  share.onclick = function(){
    window.open(tweetURL);
  }