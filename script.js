let content = document.querySelector("#content");
let btn = document.querySelector("#btn");
let voiceAnim = document.querySelector("#voice")

// Ai speak

function speak (text){
  let talk = new SpeechSynthesisUtterance(text);
  talk.rate = 0.9;
  talk.pitch =1 ;
  talk.volume =5;
  talk.lang ="hi-GB"
  window.speechSynthesis.speak(talk)
}


// loading wishes

function wishMe () {
  
  let day = new Date()
  let hours = day.getHours() ;
 if (hours >= 0 && hours < 12){
  speak("Good Morning sir")
 } else if (hours >= 12 && hours < 16 ) {
  speak ("Good Afternoon sir")
 } else {
  speak ("Good Evening sir")
 }
}

window.addEventListener('load',()=>{
  wishMe()

// })


// speak text collect funtion

let speechrecognition = window.speechRecognition || window.webkitSpeechRecognition

let recognition = new speechrecognition()
recognition.onresult= (event)=>{
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript;
  content.innerText = transcript

  takecommand(transcript.toLowerCase())
}

// button function 
 
btn.addEventListener("click" ,()=>{
  recognition.start()
  btn.style.display = "none" ;
  voiceAnim.style.display = "block" ;
})

// human speak quary 

function takecommand(quary){
  btn.style.display = "flex";
  voiceAnim.style.display = "none" ;
  if (quary.includes("hello kitty") || quary.includes("hi kitty")){
     speak("hello sir , how can i help you")
  } else if (quary.includes("who are you") || quary.includes("hu r u")){
     speak ("i am kitty, created by sudip sir. Student of Kalyani Government Engineering College ")
  }else if (quary.includes("what is your name")){
    speak (" hello sir, my self kitty ")
  
  }else if (quary.includes("bye")){
    speak ("bye sir , take care ")
  
  }else if (quary.includes("hello")){
    speak ("Hello sir, how can i help you")
  
  }
  else if (quary.includes(" what are you doing")){
    speak (" hello sudip sir ,")
  
  }
  else if (quary.includes(" about spectro")){
    speak ("Espektro is the annual fest of kalyani government engineering college and its is the second highest fest of west bengal")
  }
  
  else if (quary.includes("open youtube")){
    speak(" o,k sir open youtube...")
    window.open("https://www.youtube.com/","_blank")
  }
  else if (quary.includes("open calculator")){
    speak(" o,k sir open calculator...")
    window.open("calculator://" , "_blank")
  }
  else if (quary.includes("open facebook")){
    speak(" o,k sir open facebook...")
    window.open("https://www.facebook.com/","_blank")
  }
  else if (quary.includes("open whatsapp")){
    speak("o,k sir open whatsapp...")
    window.open("https://web.whatsapp.com/","_blank")
  }
  else if (quary.includes("open linkdin")){
    speak("o,k sir open linkdin...")
    window.open("https://www.linkedin.com/feed/","_blank")
  }
  else if (quary.includes("open apna college") || quary.includes("delta five")){
    speak("o,k sir open apna college ...")
    window.open("https://www.apnacollege.in/start","_blank")
}
else if (quary.includes("open google")){
  speak("o,k sir open google ...")
  window.open("https://www.google.com/","_black")
}
else if (quary.includes("time right now")){
 let time = new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
 speak(time)
}  
 else {
 let finalquary = quary.replace("kitty","") || quary.replace("hey","") || quary.replace("hey kitty","") ;
  speak (`o,k sir , this is what i found on internet regarding ${finalquary} `)
  window.open(`https://www.google.com/search?q= ${finalquary.replace("hey","") }` , "_blank")
}
}




