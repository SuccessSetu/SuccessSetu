const topicsData = {
  polity: {
    title: "📘 Polity",
    chapters: [
      ["📜", "Constitution"],
      ["⚖️", "Fundamental Rights"],
      ["🏛️", "DPSP"],
      ["👤", "President"],
      ["🤵", "Prime Minister"],
      ["🏢", "Parliament"],
      ["⚖️", "Supreme Court"],
      ["🏘️", "Panchayati Raj"]
    ]
  },

  history: {
    title: "🏛️ History",
    chapters: [
      ["🏺", "Ancient History"],
      ["🏰", "Medieval History"],
      ["🇮🇳", "Modern History"]
    ]
  },

  geography: {
    title: "🌍 Geography",
    chapters: [
      ["🗺️", "Indian Geography"],
      ["🌎", "World Geography"]
    ]
  },

  economics: {
    title: "💹 Economics",
    chapters: [
      ["📊", "Basic Economics"],
      ["💰", "Budget"],
      ["🏦", "Banking"],
      ["🧾", "Taxation"]
    ]
  },

  environment: {
    title: "🌱 Environment",
    chapters: [
      ["🌿", "Ecology"],
      ["🌦️", "Climate Change"],
      ["🦋", "Biodiversity"]
    ]
  },

  staticgk: {
    title: "📚 Static GK",
    chapters: [
      ["🏳️", "Countries & Capitals"],
      ["🏆", "Awards"],
      ["📖", "Books & Authors"],
      ["🔬", "Science & Tech"]
    ]
  }
};

const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");
const pageTitle = document.getElementById("pageTitle");
const sectionTitle = document.getElementById("sectionTitle");
const container = document.getElementById("topicContainer");

if (!topic || !topicsData[topic]) {
  sectionTitle.innerText = "Topic Not Found";
} else {
  pageTitle.innerText = topicsData[topic].title;
  sectionTitle.innerText = "Select a Chapter";

  topicsData[topic].chapters.forEach(ch => {
    const card = document.createElement("a");
    card.className = "card";

    // 🔥 IMPORTANT LINE
    card.href = `./${topic}/${ch[1]}/index.html`;

    card.innerHTML = `
      <span>${ch[0]}</span>
      <div>${ch[1].replace("-", " ")}</div>
    `;

    container.appendChild(card);
  });
}