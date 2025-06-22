function updateClock() {
  const clock = document.getElementById("clock");
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;

  clock.textContent = `${hours}:${minutes}`;
}

// Initial call
updateClock();
// Update every minute
setInterval(updateClock, 60000);
