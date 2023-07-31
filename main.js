let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Software Engineering and Web Development Student')
  .pauseFor(5000)
  .deleteChars(10)
  .start();
  