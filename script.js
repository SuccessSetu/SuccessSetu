

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
async function askAI() {

  const question = document.getElementById("question").value;
  const answerBox = document.getElementById("answer");

  if (question === "") {
    alert("Please write your doubt first!");
    return;
  }

  answerBox.innerText = "Thinking... 🤔";

  const API_KEY = "YAHAN_APNI_KEY_DALO"; // 👈 Yahan apni key paste karo

  try {

    const response = await fetch("https://api.openai.com/v1/chat/completions", {

      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + API_KEY
      },

      body: JSON.stringify({

        model: "gpt-4o-mini",

        messages: [
          { role: "system", content: "You are a helpful teacher." },
          { role: "user", content: question }
        ]

      })

    });

    const data = await response.json();

    answerBox.innerText = data.choices[0].message.content;

  } catch (error) {

    answerBox.innerText = "Error! Try again later.";

  }

}
