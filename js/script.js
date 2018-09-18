
//Particle.js
particlesJS.load('particles-js', '../particles.json', function(){
    console.log('particles.json loaded...');
  });

//Type.js
var options = {
  strings: [ "My name is Shakti Gurung ", " I am an enthusiastic Front End Web Developer learning to be a Full Stack Developer.", " Please press the button below to know more about me. Thank you :)"],
  typeSpeed:20,
  backSpeed:20,
//   backDelay:500,
}
var typed = new Typed(".typing", options);