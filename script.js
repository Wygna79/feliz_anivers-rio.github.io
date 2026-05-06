window.onload = function(){

  const cake = document.getElementById("cake");
  const home = document.getElementById("home");
  const message = document.getElementById("message");

  cake.addEventListener("click", function(){

    // muda de tela
    home.style.display = "none";
    message.style.display = "flex";

    // cria balões
    for(let i = 0; i < 30; i++){

      let balloon = document.createElement("div");

      balloon.classList.add("balloon");

        balloon.style.setProperty(
        "--i",
        Math.random()
        );

      // posição aleatória
      balloon.style.left = Math.random() * 100 + "vw";

      // duração aleatória
      balloon.style.animationDuration =
      (Math.random() * 3 + 4) + "s";

      // tamanho aleatório
      let size = Math.random() * 40 + 30;

      balloon.style.width = size + "px";
      balloon.style.height = size * 1.2 + "px";

      document.body.appendChild(balloon);

      // remove depois
      setTimeout(() => {
        balloon.remove();
      }, 7000);

    }

  });

};