const repoOwner = "daniah26";
const repoName = "ResAir";
// updated by lubna 
async function fetchContributors() {
  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors`);
  const data = await response.json();

  const list = document.getElementById("contributors");
  list.innerHTML = "";

  if (!data || data.length === 0) {
    list.innerHTML = "<li>No contributors found.</li>";
    return;
  }
<p id="contributor-count" style="font-weight:bold; margin-bottom:8px;"></p>
<ul id="contributors"></ul>
  data.forEach(contributor => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${contributor.avatar_url}" width="40" style="border-radius:55%; vertical-align:middle; margin-right:8px;">
      <a href="${contributor.html_url}" target="_blank">${contributor.login}</a>
    `;
    list.appendChild(li);
    
  });
}

fetchContributors();
