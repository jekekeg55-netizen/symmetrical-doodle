const videos = [

    {
        id: 1,

        title: "فيديو تجريبي 1",

        description:
            "هذا وصف الفيديو الأول.",

        thumbnail:
            "https://placehold.co/800x450/15151c/ffffff?text=VIDEO+1",

        player:
            "https://example.com/video1"
    },

    {
        id: 2,

        title: "فيديو تجريبي 2",

        description:
            "هذا وصف الفيديو الثاني.",

        thumbnail:
            "https://placehold.co/800x450/15151c/ffffff?text=VIDEO+2",

        player:
            "https://example.com/video2"
    },

    {
        id: 3,

        title: "فيديو تجريبي 3",

        description:
            "هذا وصف الفيديو الثالث.",

        thumbnail:
            "https://placehold.co/800x450/15151c/ffffff?text=VIDEO+3",

        player:
            "https://example.com/video3"
    }

];


const grid =
    document.getElementById("videosGrid");


/* الصفحة الرئيسية */

if (grid) {

    showVideos(videos, grid);

}


/* عرض الفيديوهات */

function showVideos(list, container) {

    container.innerHTML = "";

    list.forEach(video => {

        const card =
            document.createElement("div");

        card.className =
            "video-card";


        card.innerHTML = `

            <div class="thumbnail">

                <img
                    src="${video.thumbnail}"
                    alt="${video.title}"
                >

            </div>

            <div class="video-info">

                <h2>
                    ${video.title}
                </h2>

                <p>
                    ${video.description}
                </p>

            </div>

        `;


        card.onclick = function () {

            window.location.href =
                "video.html?id=" + video.id;

        };


        container.appendChild(card);

    });

}


/* البحث */

const searchInput =
    document.getElementById("searchInput");


if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const text =
                this.value.toLowerCase();


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
        Number(params.get("id"));


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
                item => item.id !== video.id
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

    likeButton.addEventListener(
        "click",
        function () {

            const count =
                document.getElementById(
                    "likeCount"
                );

            count.textContent =
                Number(
                    count.textContent
                ) + 1;

        }
    );

}
