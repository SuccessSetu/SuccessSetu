

// Auto load saved theme
(function(){
  if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");
  }
})();

// Toggle function
function toggleTheme(){

  document.body.classList.toggle("dark");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}


// 📊 SUBJECT PROGRESS SYSTEM

const progressData = {
  math: localStorage.getItem("math") || 0,
  english: localStorage.getItem("english") || 0,
  gs: localStorage.getItem("gs") || 0,
  reasoning: localStorage.getItem("reasoning") || 0,
  ca: localStorage.getItem("ca") || 0,
  articles: localStorage.getItem("articles") || 0,
  pyq: localStorage.getItem("pyq") || 0,
};

// Update UI
function updateProgress(){
  document.querySelectorAll(".subject-card").forEach(card=>{
    const subject = card.dataset.subject;
    const value = progressData[subject] || 0;

    const bar = card.querySelector(".progress");
    if(bar){
      bar.innerText = value + "%";
      bar.style.width = value + "%";
    }
  });
}

updateProgress();
