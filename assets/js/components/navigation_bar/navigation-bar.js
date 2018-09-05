function BuildNavigation() {
    document.querySelector(".pageWrapper").innerHTML += render();
}

function render() {
    return `
        <nav class="navbar space-bw-clmn is-light is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item " id="burgurMenu" href="#">
                    <img src="./assets/images/menu.svg" alt="" width="30" height="28">
                </a>
                <a class="navbar-item" href="">
                    <img src="./assets/images/youtube.svg" alt="" width="30" height="28">Kodecamp
                </a>
            </div>
            <div class="MyNav">
                <a class="navbar-item" href="">
                    <img src="./assets/images/search.svg" alt="" width="30" height="28">
                </a>
                <a class="navbar-item" href="">
                    <img src="./assets/images/notifications-button.svg" alt="" width="30" height="28">
                </a>
                <a class="navbar-item is-rounded" href="#">
                    <img class="userLoginIcon" src="./assets/images/newpicture.svg" alt="" width="30" height="28">
                </a>
                <a class="navbar-item is-rounded" href="">
                    <img src="./assets/images/video-add-button.svg" alt="" width="30" height="28">
                </a>
            </div>
        </nav>
    `;
}

BuildNavigation();