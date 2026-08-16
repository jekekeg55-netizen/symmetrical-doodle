const videos = [

  {
    id: 1,
    title: "فيديو 1",
    description: "وصف الفيديو الأول",

    thumbnail: "ضع رابط Thumbnail هنا",

    player: "ضع رابط Bunny Player هنا"
  },

  {
    id: 2,
    title: "فيديو 2",
    description: "وصف الفيديو الثاني",

    thumbnail: "ضع رابط Thumbnail هنا",

    player: "ضع رابط Bunny Player هنا"
  },

  {
    id: 3,
    title: "فيديو 3",
    description: "وصف الفيديو الثالث",

    thumbnail: "ضع رابط Thumbnail هنا",

    player: "ضع رابط Bunny Player هنا"
  }

];


const grid =
  document.getElementById("videosGrid");


function showVideos(list, container) {

  if (!container) return;

  container.innerHTML = "";

  list.forEach(video => {

    const card =
      document.createElement("div");

    card.className = "video-card";

    card.innerHTML = `
      <div class="thumbnail">

        <img
          src="${video.thumbnail}"
          alt="${video.title}"
        >

      </div>

      <div class="video-info">

        <h2>${video.title}</h2>

        <p>${video.description}</p>

      </div>
    `;

    card.onclick = () => {

      window.location.href =
        "video.html?id=" + video.id;

    };

    container.appendChild(card);

  });

}


/* الصفحة الرئيسية */

if (grid) {

  showVideos(
    videos,
    grid
  );

}


/* البحث */

const searchInput =
  document.getElementById("searchInput");

if (searchInput && grid) {

  searchInput.addEventListener(
    "input",
    function () {

      const text =
        this.value
          .toLowerCase()
          .trim();

      const result =
        videos.filter(video =>
          video.title
            .toLowerCase()
            .includes(text)
        );

      showVideos(
        result,
        grid
      );

    }
  );

}


/* صفحة المشاهدة */

const player =
  document.getElementById("player");

if (player) {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const id =
    Number(
      params.get("id")
    );

  const video =
    videos.find(
      item => item.id === id
    );

  if (video) {

    document.getElementById(
      "videoTitle"
    ).textContent =
      video.title;

    document.getElementById(
      "videoDescription"
    ).textContent =
      video.description;

    player.src =
      video.player;


    const related =
      videos.filter(
        item =>
          item.id !== video.id
      );

    showVideos(
      related,
      document.getElementById(
        "relatedVideos"
      )
    );

  }

}


/* الإعجاب */

const likeButton =
  document.getElementById(
    "likeButton"
  );

if (likeButton) {

  likeButton.onclick =
    function () {

      const count =
        document.getElementById(
          "likeCount"
        );

      count.textContent =
        Number(
          count.textContent
        ) + 1;

    };

}
