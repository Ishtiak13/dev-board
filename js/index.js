// theme change /////////////////
document.getElementById("theme-btn").addEventListener("click", function () {
  const bgThemes = [
    "bg-[#F4F7FF]",
    "bg-gray-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-yellow-200",
    "bg-red-200",
    "bg-purple-200",
    "bg-pink-200",
    "bg-teal-200",
    "bg-indigo-200",
  ];
  const body = document.getElementById("body-bg");
  for (const theme of bgThemes) {
    body.classList.remove(theme);
  }

  // Pick a new random theme and apply it
  const randomTheme = bgThemes[Math.floor(Math.random() * bgThemes.length)];
  body.classList.add(randomTheme);
});
// date////
const now = new Date();
const formattedWeekday = now.toLocaleString("en-US", {
  weekday: "short",
});
const formatDate = now.toLocaleString("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
});

document.getElementById("week-day").innerHTML = `
${formattedWeekday} ,
                <br />
                <span class="font-bold">${formatDate}</span>`;
// for another pages //////////////
document.getElementById("blog-page").addEventListener("click", function () {
  window.location.href = "../blog.html";
});

// complete btn click task//////
let remainingTask = parseInt(
  document.getElementById("remaining-task").innerText
);
let totalTask = parseInt(document.getElementById("total-task").innerText);
const completeBtn = document.querySelectorAll(".complete-btn");
for (const btn of completeBtn) {
  btn.addEventListener("click", function (event) {
    if (remainingTask <= 0) {
      alert("This task has not been assigned yet!");
      return;
    }
    remainingTask -= 1;
    totalTask += 1;

    const taskName = btn.parentElement.parentElement.children[1].innerText;

    const formatTime = now.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    if (remainingTask === 0) {
      alert("Board updated Successfully!");
      alert("Congrats!!! You have completed all the current task!");
    } else {
      alert("Board updated Successfully!");
    }
    document.getElementById("remaining-task").innerText = remainingTask;

    document.getElementById("total-task").innerText = totalTask;
    document.getElementById("history-details").innerHTML += `
  <p class="p-4 m-4 bg-[#F4F7FF] rounded-xl">
    You have completed the task ${taskName} at ${formatTime}
  </p>`;
    event.target.disabled = true;
  });
}

document
  .getElementById("btn-clear-history")
  .addEventListener("click", function () {
    document.getElementById("history-details").innerHTML = ``;
  });
