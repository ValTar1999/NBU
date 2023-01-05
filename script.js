window.addEventListener('scroll', reveal);

function reveal(){
   var reveals = document.querySelectorAll('.reveal');

   for(var i = 0; i < reveals.length; i++){

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;

      if(revealtop < windowheight - revealpoint){
         reveals[i].classList.add('active');
      }
      else{
         reveals[i].classList.remove('active');
      }

   }
}


// data-digits-counter

"use strict"

window.addEventListener("load", windowLoad);

function windowLoad(){

   function digitsCountersInit(digitsCountersInit) {
      let digitsCounters = digitsCountersInit ? digitsCountersInitc : document.querySelectorAll("[data-digits-counter]");
      if (digitsCounters) {
         digitsCounters.forEach(digitsCounter => {
            digitsCountersAnimate(digitsCounter);
         });
      }
   }

   function digitsCountersAnimate(digitsCounter) {
      let startTimestamp = null;
      const duration = parseInt(digitsCounter.dataset.digitsCounter) ? parseInt(digitsCounter.dataset.digitsCounter) : 1000;
      const startValue = parseInt(digitsCounter.innerHTML);
      const startPosition = 0;
      const step = (timestamp) => {
         if (!startTimestamp) startTimestamp = timestamp;
         const progress = Math.min((timestamp - startTimestamp) / duration, 1);
         digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
         if (progress < 1) {
            window.requestAnimationFrame(step);
         }
      };
      window.requestAnimationFrame(step);
   }
   // digitsCountersInit();
   let options = {
      threshold: 0.3
   }
   let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
         if (entry.isIntersecting) {
            const targetElement = entry.target;
            const digitsCountersItems = targetElement.querySelectorAll("[data-digits-counter]");
            if (digitsCountersItems.length) {
               digitsCountersInit(digitsCountersItems);
            }
         }
      });
   }, options);

   let sections = document.querySelectorAll('.advantages__body');
   if (sections.length) {
      sections.forEach(section => {
         observer.observe(section);
      });
   }
}
