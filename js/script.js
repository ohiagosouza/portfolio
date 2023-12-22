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

const buttonSend = document.getElementById("btnSend");

buttonSend.addEventListener("click", event => {
  event.preventDefault();
  const privacyChecked = document.getElementById("privacy-policy").checked;
  const privacyText = document.getElementById("privacy-text");

  if (!privacyChecked) {
    privacyText.style.color = "#ff0000";
  } else {
    document.getElementById("contact-form").submit();
  }
});
