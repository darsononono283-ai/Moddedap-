const apps = [
    {
        name: "CapCut",
        category: "Editing",
        desc: "Video Editor",
        version: "14.2.0",
        size: "250 MB",
        rating: "4.8",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png",
        download: "#"
    },

    {
        name: "Alight Motion",
        category: "Editing",
        desc: "Motion Graphics",
        version: "5.0.272",
        size: "130 MB",
        rating: "4.7",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        download: "#"
    },

    {
        name: "Spotify",
        category: "Music",
        desc: "Music & Podcast",
        version: "9.0.48",
        size: "85 MB",
        rating: "4.6",
        icon: "https://cdn-icons-png.flaticon.com/512/2111/2111624.png",
        download: "#"
    },

    {
        name: "VLC",
        category: "Video",
        desc: "Media Player",
        version: "3.6.0",
        size: "40 MB",
        rating: "4.5",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968519.png",
        download: "#"
    },

    {
        name: "Minecraft",
        category: "Game",
        desc: "Adventure Game",
        version: "1.21",
        size: "700 MB",
        rating: "4.9",
        icon: "https://cdn-icons-png.flaticon.com/512/5968/5968297.png",
        download: "#"
    },

    {
        name: "Files Manager",
        category: "Tools",
        desc: "File Manager",
        version: "2.5.1",
        size: "20 MB",
        rating: "4.4",
        icon: "https://cdn-icons-png.flaticon.com/512/716/716784.png",
        download: "#"
    }
];

let currentCategory = "Semua";


function displayApps(data) {

    const list = document.getElementById("appList");

    if (data.length === 0) {

        list.innerHTML = `
            <div class="empty">
                😕 APK tidak ditemukan
            </div>
        `;

        return;
    }

    list.innerHTML = data.map(app => `

        <div class="card">

            <div class="app-top">

                <img
                    class="icon"
                    src="${app.icon}"
                    alt="${app.name}"
                >

                <div>

                    <div class="app-name">
                        ${app.name}
                    </div>

                    <div class="desc">
                        ${app.desc}
                    </div>

                </div>

            </div>

            <div class="info">

                <span>
                    ⭐ ${app.rating}
                </span>

                <span>
                    v${app.version}
                </span>

                <span>
                    ${app.size}
                </span>

            </div>

            <a
                class="download"
                href="${app.download}"
                download
            >
                ⬇ Download APK
            </a>

        </div>

    `).join("");
}


function searchApp() {

    const keyword =
        document
        .getElementById("search")
        .value
        .toLowerCase();

    const result = apps.filter(app => {

        const matchSearch =
            app.name
            .toLowerCase()
            .includes(keyword);

        const matchCategory =
            currentCategory === "Semua" ||
            app.category === currentCategory;

        return matchSearch && matchCategory;
    });

    displayApps(result);
}


function filterCategory(category, button) {

    currentCategory = category;

    document
        .querySelectorAll(".categories button")
        .forEach(btn => {
            btn.classList.remove("active");
        });

    button.classList.add("active");

    searchApp();
}


function toggleDark() {

    document.body.classList.toggle("dark");

    const dark =
        document.body.classList.contains("dark");

    localStorage.setItem("darkMode", dark);
}


if (
    localStorage.getItem("darkMode") === "true"
) {
    document.body.classList.add("dark");
}


displayApps(apps);