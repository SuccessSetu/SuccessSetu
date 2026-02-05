

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
