//fetching quotes from api
function fetchQuotes(){
    fetch('https://api.freeapi.app/api/v1/public/quotes/quote/random')
     .then(res=>res.json())
     .then(result=>{
         console.log('data',result);
         const quote=result.data.content;
         const author=result.data.author;
 
         const qutoes=document.getElementById('Quote');
         qutoes.innerHTML=quote;
         const Author=document.getElementById('Author');
         Author.innerHTML=`---${author}`; 
     })
     .catch(err=>{
         console.error('error while fetching data',err);
     })
 }
 
 fetchQuotes();
 
 //copy text to clipboard
 function copyText(){
     const text=document.getElementById('Quote').innerText;
 
     navigator.clipboard.writeText(text)
       .then(()=>{
         alert("Text Copied to Clipboard");
       })
       .catch(err=>{
         console.log("Failed to copy",err);
       });
 }
 
 //share on twitter
 function shareOnTwitter(){
     const text=document.getElementById('Quote').innerText;
     const author=document.getElementById('Author').innerText;
 
     const tweetText=`${text}--${author}`;
     const tweetUrl=`https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
 
     window.open(tweetUrl,'_blank');
 }