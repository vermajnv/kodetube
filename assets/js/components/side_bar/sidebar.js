function BuildSideBar() {
    document.querySelector(".pageWrapper").innerHTML += render();
}

function render() {
    return `
        <aside class="menu my-menu">
            <ul class="menu-list">
                <li><a href="">Home</a></li>
                <li><a href="">Trending</a></li>
                <li><a href="">Subscriptions</a></li>
            </ul>
            <p class="menu-label">LIBRARY</p> 
            <ul class="menu-list">
                <li><a href="">History</a></li>
                <li><a href="">Liked Videos</a></li>
                <li><a href="">Watch Later</a></li>
            </ul>
            <p class="menu-label">SUBSCRIPTIONS</p> 
            <ul class="menu-list">
                <li><a href="">KODECAMP</a></li>
                <li><a href="">Saregama Music</a></li>
                <li><a href="">Woocamp</a></li>
                <li><a href="">TedX</a></li>
            </ul>    
        </aside>
    `;
}

BuildSideBar();