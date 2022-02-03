import getPosts from "./task1/getPostsJson.js";


const init = (selector) => {
    const app = document.querySelector(selector);

    getPosts(app, 20);

};


init('.task1__postsList');