const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");

fetch("gs-data.json")
  .then(response => response.json())
  .then(data => {

    if (!data[topic]) {
      document.getElementById("topicTitle").innerText = "Topic not found";
      return;
    }

    const topicData = data[topic];

    // Set title
    document.getElementById("topicTitle").innerText =
      topicData.icon + " " + topicData.title;

    const container = document.getElementById("chapterContainer");

    // Create chapter cards
    topicData.chapters.forEach(chapter => {
      const card = document.createElement("a");
      card.className = "card";
      card.href = `/start-learning/gs/${topic}/${slug}/index.html`;; // later chapter page
      card.innerHTML = `
        <span>📘</span>
        <div>${chapter}</div>
      `;
      container.appendChild(card);
    });
  })
  .catch(err => {
    document.getElementById("topicTitle").innerText = "Error loading data";
    console.error(err);
  });
