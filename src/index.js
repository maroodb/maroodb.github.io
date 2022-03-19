import { pages } from "./config/pages.config";

const main = () => {
    console.log('create sidenav..');
    setSideNavMenu();
};


function load_home() {
    document.getElementById("content").innerHTML='<object type="text/html" data="./dist/pages/simpleEvent.html" ></object>';
}


const setSideNavMenu = () => {
    console.log("set side");
    const menu = getSideNavMenuElement();
    console.log(menu);
    console.log(pages);
    for (const page of pages) {
        console.log(page);
        const menuItem = createMenuItemFrom(page);
        menu.appendChild(menuItem);   
    }
}

const getSideNavMenuElement = () => {
    return document.getElementById("sidenav");
}

const createMenuItemFrom = (page) => {
    var item = document.createElement("a");
    var linkText = document.createTextNode(page.title);
    item.appendChild(linkText);
    item.href = page.url;
    return item;
}


main();
