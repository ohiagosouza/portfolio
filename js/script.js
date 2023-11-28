let i = 0;
const title = "Engenheiro da Computação & Desenvolvedor Full-Stack";
const speed = 75;

window.onload = function typeWriter() {
  if (i < title.length) {
    document.getElementById("job-title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
};
