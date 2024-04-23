document.addEventListener("DOMContentLoaded", () => {

    let containerOne = document.querySelector(".container");
    let containerTwo = document.querySelector(".container__two");
    let submitButton = document.querySelector(".send");
    let pressScores = document.querySelectorAll(".score");
    let messageCalification = document.querySelector(".message__calification")

    const handleScoreClick = (event) => {
      const selectedScore = event.target;
      pressScores.forEach(score => {
         score.style.background= "";
         score.style.color="";
        });
      selectedScore.style.background = "linear-gradient(to bottom, hsl(24, 100%, 49%), rgb(243, 139, 64))";
      selectedScore.style.color = "white";

      messageCalification.textContent = `You selected ${selectedScore.textContent} of 5.`;
    };

  pressScores.forEach(score => score.addEventListener("click", handleScoreClick));

    submitButton.addEventListener("click", () => {
      // Se oculta container de calificación
      containerOne.style.display = "none";
      containerTwo.style.display= "grid";


    });
  });

  
  