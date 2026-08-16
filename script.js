const videos = [

  {
    id: 1,

    title: "فيديو مترجم 1",

    description:
      "وصف الفيديو الأول.",

    thumbnail:
      "https://placehold.co/800x450/12141a/ffffff?text=VIDEO+1",

    player:
      "ضع_رابط_Bunny_Player_الأول_هنا"
  },


  {
    id: 2,

    title: "فيديو مترجم 2",

    description:
      "وصف الفيديو الثاني.",

    thumbnail:
      "https://placehold.co/800x450/12141a/ffffff?text=VIDEO+2",

    player:
      "ضع_رابط_Bunny_Player_الثاني_هنا"
  },


  {
    id: 3,

    title: "فيديو مترجم 3",

    description:
      "وصف الفيديو الثالث.",

    thumbnail:
      "https://placehold.co/800x450/12141a/ffffff?text=VIDEO+3",

    player:
      "ضع_رابط_Bunny_Player_الثالث_هنا"
  }

];


/* =========================
   عرض البطاقات الرئيسية
========================= */

function renderHomeVideos(list) {

  const grid =
    document.getElementById("videosGrid");

  if (!grid) return;

  grid.innerHTML = "";

  list.forEach(video => {

    const card =
      document.createElement("article");

    card.className = "video-card";

    card.innerHTML = `

      <div class="thumbnail">

        <img
          src="${video.thumbnail}"
          alt="${video.title}"
          loading="lazy"
        >

        <div class="play-icon">
          ▶
        </div>

      </div>

      <div class="video-info">

        <h3>
          ${video.title}
        </h3>

        <p>
          ${video.description}
        </p>

      </div>

    `;

    card.addEventListener("click", () => {

      window.location.href =
        "watch.html?id=" + video.id;

    });

    grid.appendChild(card);

  });


  const count =
    document.getElementById("videoCount");

  if (count) {
    count.textContent =
      list.length + " فيديو";
  }
}


/* =========================
   الصفحة الرئيسية
========================= */

if (
  document.getElementById("videosGrid")
) {

  renderHomeVideos(videos);

}


/* =========================
   البحث
========================= */

const searchInput =
  document.getElementById("searchInput");

if (searchInput) {

  searchInput.addEventListener(
    "input",
    () => {

      const query =
        searchInput.value
          .toLowerCase()
          .trim();

      const results =
        videos.filter(video =>
          video.title
            .toLowerCase()
            .includes(query)
        );

      renderHomeVideos(results);

    }
  );
}


/* =========================
   صفحة المشاهدة
========================= */

const player =
  document.getElementById("player");

if (player) {

  const params =
    new URLSearchParams(
      window.location.search
    );

  const id =
    Number(params.get("id"));

  const video =
    videos.find(
      item => item.id === id
    );


  if (!video) {

    window.location.href =
      "index.html";

  } else {

    document.title =
      video.title + " | هيمنة العرب";


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


    renderRelatedVideos(video.id);

  }

}


/* =========================
   الفيديوهات المقترحة
========================= */

function renderRelatedVideos(currentId) {

  const container =
    document.getElementById(
      "relatedVideos"
    );

  if (!container) return;

  container.innerHTML = "";

  const related =
    videos.filter(
      video => video.id !== currentId
    );


  related.forEach(video => {

    const item =
      document.createElement("div");

    item.className =
      "related-card";

    item.innerHTML = `

      <div class="related-thumb">

        <img
          src="${video.thumbnail}"
          alt="${video.title}"
          loading="lazy"
        >

      </div>

      <div class="related-title">
        ${video.title}
      </div>

    `;


    item.addEventListener(
      "click",
      () => {

        window.location.href =
          "watch.html?id=" + video.id;

      }
    );


    container.appendChild(item);

  });

}


/* =========================
   الإعجاب
========================= */

const likeButton =
  document.getElementById(
    "likeButton"
  );


if (likeButton) {

  likeButton.addEventListener(
    "click",
    () => {

      const count =
        document.getElementById(
          "likeCount"
        );

      const liked =
        likeButton.classList.contains(
          "liked"
        );


      if (!liked) {

        count.textContent =
          Number(count.textContent) + 1;

        likeButton.classList.add(
          "liked"
        );

      }

    }
  );

}
