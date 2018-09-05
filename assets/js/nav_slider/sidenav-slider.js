function ToggleSideBar() {
    console.log("toggle side bar is called");
    document.querySelector("#burgurMenu").addEventListener('click', SideBarAction);
}

function SideBarAction() {
    console.log("Menu clicked");
    document.querySelector(".my-menu").classList.toggle("MenuVisible");
    document.querySelector(".has-margin-150").classList.toggle("MarginReset");
}

ToggleSideBar();