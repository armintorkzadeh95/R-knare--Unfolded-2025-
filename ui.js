// Hämta elementet där vi visar nedräkningen
const countdownElement = document.getElementById("countdown");

// Sätt datum och tid för eventet
const eventDate = new Date("2025-05-26T00:00:00");

// Funktion för att uppdatera nedräkningen
function updateCountdown() {
  const now = new Date(); // Hämta dagens datum och tid
  const timeLeft = eventDate - now; // Räkna ut skillnaden i millisekunder

  if (timeLeft <= 0) {
    countdownElement.textContent = "Eventet har börjat!";
    return; // Sluta köra funktionen om tiden är slut
  }

  // Räkna ut dagar, timmar, minuter och sekunder
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Visa nedräkningen
  countdownElement.textContent = `${days} dagar ${hours} timmar ${minutes} minuter ${seconds} sekunder`;
}

// Kör funktionen direkt och uppdatera varje sekund
updateCountdown();
setInterval(updateCountdown, 1000);
