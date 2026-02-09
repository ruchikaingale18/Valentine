  const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const funnyText = document.getElementById("funnyText");
    const mainPage = document.getElementById("mainPage");
    const yesPage = document.getElementById("yesPage");
    const heartsContainer = document.getElementById("hearts");

    const funnyMessages = [
    "Oyeeee! 👀 NO dabaya toh single rehne ka contract sign ho jayega 😜",
    "Soch le bhai… ye NO life-changing decision hai 😏",
    "NO? Sach me? Meine ne tera naam blacklist kar diya 💔🧸",
    "Last warning! Abhi bhi waqt hai… warna story tragic ho jayegi 🧸😭🎬"    ];

    let msgIndex = 0;

    noBtn.addEventListener("click", () => {
      funnyText.textContent = funnyMessages[msgIndex];
      msgIndex = (msgIndex + 1) % funnyMessages.length;

      // move button randomly
      const x = Math.random() * 100 - 50;
      const y = Math.random() * 60 - 30;
      noBtn.style.transform = `translate(${x}px, ${y}px)`;
    });

    yesBtn.addEventListener("click", () => {
      mainPage.style.display = "none";
      yesPage.style.display = "flex";
      startHearts();
    });

    function startHearts() {
      setInterval(() => {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.textContent = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = Math.random() * 20 + 15 + "px";
        heartsContainer.appendChild(heart);

        setTimeout(() => {
          heart.remove();
        }, 4000);
      }, 300);
    }