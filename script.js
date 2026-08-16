const videos = [
  {
    id: 1,
    title: "فيديو 1",
    description: "وصف الفيديو الأول",
    thumbnail: "https://placehold.co/800x450?text=Video+1",
    player: "https://player.mediadelivery.net/embed/728993/VIDEO-ID-1"
  },
  {
    id: 2,
    title: "فيديو 2",
    description: "وصف الفيديو الثاني",
    thumbnail: "https://placehold.co/800x450?text=Video+2",
    player: "https://player.mediadelivery.net/embed/728993/VIDEO-ID-2"
  },
  {
    id: 3,
    title: "فيديو 3",
    description: "وصف الفيديو الثالث",
    thumbnail: "https://placehold.co/800x450?text=Video+3",
    player: "https://player.mediadelivery.net/embed/728993/VIDEO-ID-3"
  }
];

const grid = document.getElementById("videosGrid");

function showVideos(list, container) {
  if (!container) return;

  container.innerHTML = "";

  list.forEach(video => {
    const card = document.createElement("article");

    card.className = "video-card";

    card.innerHTML = `
      <div class="thumbnail">
        <img src="${video.thumbnail}" alt="${video.title}">
      </div>

      <div class="video-info">
        <h2>${video.title}</h2>
        <p>${video.description}</p>
      </div>
    `;

    card.addEventListener("click", () => {
      window.location.href = `video.html?id=${video.id}`;
    });

    container.appendChild(card);
  });
}

if (grid) {
  showVideos(videos, grid);
}

const searchInput = document.getElementById("searchInput");

if (searchInput && grid) {
  searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase().trim();

    const results = videos.filter(video =>
      video.title.toLowerCase().includes(text)
    );

    showVideos(results, grid);
  });
}

const player = document.getElementById("player");

if (player) {
  const params = new URLSearchParams(window.location.search);
  const id = Number(params.get("id"));

  const video = videos.find(video => video.id === id);

  if (video) {
    document.getElementById("videoTitle").textContent = video.title;

    document.getElementById("videoDescription").textContent =
      video.description;

    player.src = video.player;

    const relatedVideos =
      document.getElementById("relatedVideos");

    const related = videos.filter(
      item => item.id !== video.id
    );

    showVideos(related, relatedVideos);
  }
}

const likeButton =
  document.getElementById("likeButton");

if (likeButton) {
  likeButton.addEventListener("click", () => {
    const count =
      document.getElementById("likeCount");

    count.textContent =
      Number(count.textContent) + 1;
  });
}
