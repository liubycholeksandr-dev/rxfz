const brawlerName = document.getElementById("brawlerName");
const brawlerClass = document.getElementById("brawlerClass");
const brawlerRarity = document.getElementById("brawlerRarity");
const brawlerDesc = document.getElementById("brawlerDesc");
const skinFor = document.getElementById("skinFor");
const skinName = document.getElementById("skinName");
const skinTheme = document.getElementById("skinTheme");
const submissionList = document.getElementById("submissionList");

document.getElementById("addBrawlerBtn").addEventListener("click", () => {
  if (!brawlerName.value.trim()) return;
  addSubmission(
    "Brawler",
    brawlerName.value,
    `Class: ${brawlerClass.value || "N/A"} | Rarity: ${
      brawlerRarity.value
    } | ${brawlerDesc.value || "No description"}`
  );
  brawlerName.value = "";
  brawlerClass.value = "";
  brawlerDesc.value = "";
});

document.getElementById("addSkinBtn").addEventListener("click", () => {
  if (!skinName.value.trim()) return;
  addSubmission(
    "Skin",
    skinName.value,
    `For: ${skinFor.value || "Unknown"} | Theme: ${
      skinTheme.value || "None"
    }`
  );
  skinFor.value = "";
  skinName.value = "";
  skinTheme.value = "";
});

function addSubmission(type, title, details) {
  const li = document.createElement("li");

  const left = document.createElement("div");
  left.innerHTML = `<strong>${title}</strong><br><span style="opacity:.8">${details}</span>`;

  const badge = document.createElement("span");
  badge.className = "badge";
  badge.textContent = type;

  li.appendChild(left);
  li.appendChild(badge);
  submissionList.prepend(li);
}
