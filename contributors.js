const repoOwner = "daniah26";
const repoName = "ResAir";

async function fetchContributors() {
  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/contributors`);
  const data = await response.json();

  const list = document.getElementById("contributors");
  list.innerHTML = "";

  if (!data || data.length === 0) {
    list.innerHTML = "<li>No contributors found.</li>";
    return;
  }

  data.forEach(contributor => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img src="${contributor.avatar_url}" width="30" style="border-radius:50%; vertical-align:middle; margin-right:8px;">
      <a href="${contributor.html_url}" target="_blank">${contributor.login}</a>
    `;
    list.appendChild(li);
  });
}

fetchContributors();
