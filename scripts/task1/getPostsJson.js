import createElement from "./createElement.js";
import getComment from "./getComment.js";
import removeComment from "./removeComment.js";



const createPost = postData => {
    const post = createElement('div', {
        className: 'post',
        id: `post${postData.id}`,
    });

    const postTitle = createElement('h3', {
        className: 'post__title',
        textContent: postData.title,
    });

    const postText = createElement('p', {
        className: 'post__text',
        textContent: postData.body,
    });

    const button = createElement('button', {
        className: 'post__show-comment',
        textContent: 'Комментарии',
    });

    button.addEventListener('click', (event) => {
        event.stopPropagation();

        if (button.classList.contains('post__hide-comment')){
            removeComment(postData.id);
            button.classList.remove('post__hide-comment');
        }
        else{
            getComment(postData.id);
            button.classList.add('post__hide-comment');
        }

    });

    post.append(postTitle, postText, button);

    return post;
}


const getPosts = (app ,limit) => {

    fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
        .then(response => response.json())
        .then(json => {
            json.forEach(postData => {
                const post = createPost(postData);
                app.append(post);
            })
        });
}

export default getPosts;