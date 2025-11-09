const repoOwner = "daniah26";
const repoName = "ResAir";

async function fetchAnnouncements() {
  const response = await fetch(`https://api.github.com/repos/${repoOwner}/${repoName}/issues?per_page=3`);
  const data = await response.json();

  const container = document.getElementById("announcements");
  container.innerHTML = "";

  if (!data || data.length === 0) {
    container.innerHTML = "<p>No recent announcements.</p>";
    return;
  }

  data.forEach(issue => {
    const item = document.createElement("div");
    item.classList.add("announcement");
    item.innerHTML = `
      <h3><a href="${issue.html_url}" target="_blank">${issue.title}</a></h3>
      <p>${issue.body ? issue.body.substring(0, 100) + "..." : "No description."}</p>
      <small>Posted on ${new Date(issue.created_at).toLocaleDateString()}</small>
      <hr>
    `;
    container.appendChild(item);
  });
}

fetchAnnouncements();
