
/* ================= DARK MODE ================= */

function toggleDark(){
  document.body.classList.toggle("dark");

  localStorage.setItem("theme",
    document.body.classList.contains("dark") ? "dark" : "light"
  );
}

// Load theme on start
if(localStorage.getItem("theme")==="dark"){
  document.body.classList.add("dark");
}


/* ================= SIDE MENU ================= */

function openMenu(){
  document.getElementById("sideMenu").style.left="0";
}

function closeMenu(){
  document.getElementById("sideMenu").style.left="-260px";
}

window.onload = function(){

  const toggle = document.querySelector(".switch input");

  if(localStorage.getItem("theme")==="dark"){
    document.body.classList.add("dark");

    if(toggle){
      toggle.checked = true;
    }
  }

}

/* ================= SEARCH FILTER ================= */

const searchBox = document.getElementById("search");

if(searchBox){
  searchBox.addEventListener("input", e=>{

    document.querySelectorAll(".card").forEach(card=>{

      card.style.display =
        card.innerText.toLowerCase()
        .includes(e.target.value.toLowerCase())
        ? "block" : "none";

    });

  });
}


/* ================= RIPPLE EFFECT ================= */

document.querySelectorAll('.subject-card').forEach(card=>{

  card.addEventListener('click',function(e){

    const r = document.createElement('span');
    r.className = 'ripple';
    this.appendChild(r);

    const rect = this.getBoundingClientRect();

    r.style.left = (e.clientX-rect.left) + 'px';
    r.style.top  = (e.clientY-rect.top)  + 'px';

    setTimeout(()=> r.remove(),600);

  });

});


/* ================= GREETING ================= */

const greet = document.getElementById("greeting");

if(greet){

  const hour = new Date().getHours();
  let text = "", emoji = "";

  if (hour >= 5 && hour < 12){
    text="Good Morning"; emoji="🌅";
  }
  else if (hour >= 12 && hour < 17){
    text="Good Afternoon"; emoji="☀️";
  }
  else if (hour >= 17 && hour < 21){
    text="Good Evening"; emoji="🌆";
  }
  else{
    text="Good Night"; emoji="🌙";
  }

  greet.innerHTML = text+" "+emoji;
}


/* ================= PROGRESS ================= */

function saveProgress(subject, percent){
  localStorage.setItem("progress_"+subject, percent);
}

function loadProgress(){

  const subjects=["math","english","gs"];

  subjects.forEach(sub=>{

    let value = localStorage.getItem("progress_"+sub) || 0;

    let el = document.getElementById("progress-"+sub);

    if(el){
      el.innerText = value+"%";
    }

  });

}

loadProgress();


// 📊 SUBJECT PROGRESS SYSTEM

const progressData = {
  math: localStorage.getItem("math") || 0,
  english: localStorage.getItem("english") || 0,
  gs: localStorage.getItem("gs") || 0,
  reasoning: localStorage.getItem("reasoning") || 0,
  "current-affairs": localStorage.getItem("current-affairs") || 0,
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


let streak = localStorage.getItem("streak") || 0;
let hours = localStorage.getItem("hours") || 0;
let target = localStorage.getItem("target") || 0;
let lastDate = localStorage.getItem("lastDate");

const today = new Date().toDateString();

// Streak system
if(lastDate !== today){
  if(lastDate){
    streak++;
  }
  localStorage.setItem("lastDate", today);
  localStorage.setItem("streak", streak);
}

// Update UI
function updateStats(){
  document.getElementById("streak").innerText = streak;
  document.getElementById("hours").innerText = hours;
  document.getElementById("target").innerText = target;
}

updateStats();

// Add study hours
function addStudy(){

  let h = prompt("How many hours studied today?");

  if(h && !isNaN(h)){
    hours = Number(hours) + Number(h);

    // Target auto calculate (100 hrs = 100%)
    target = Math.min(100, Math.floor((hours/100)*100));

    localStorage.setItem("hours", hours);
    localStorage.setItem("target", target);

    updateStats();
  }
}

// Load last study
let lastSubject = localStorage.getItem("lastSubject") || "None";
let lastTopic = localStorage.getItem("lastTopic") || "None";
let lastTime = localStorage.getItem("lastTime") || 0;

// Update UI
function updateLastStudy(){
  document.getElementById("lastSubject").innerText = lastSubject;
  document.getElementById("lastTopic").innerText = lastTopic;
  document.getElementById("lastTime").innerText = lastTime;
}

updateLastStudy();

// Save study
function saveLastStudy(){

  let sub = prompt("Subject name?");
  let topic = prompt("Topic name?");
  let time = prompt("Hours studied?");

  if(sub && topic && time && !isNaN(time)){

    lastSubject = sub;
    lastTopic = topic;
    lastTime = time;

    localStorage.setItem("lastSubject", sub);
    localStorage.setItem("lastTopic", topic);
    localStorage.setItem("lastTime", time);

    updateLastStudy();
  }
}
