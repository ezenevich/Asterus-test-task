import createElement from "./createElement.js";



const createComment = commentData => {
    const comment = createElement('div', {
        className: 'comment',
        id: `comment${commentData.id}`,
    });

    const commentTitle = createElement('span', {
        className: 'comment__title',
        textContent: commentData.email,
    });

    const commentText = createElement('p', {
        className: 'comment__text',
        textContent: commentData.body,
    });

    comment.append(commentTitle, commentText);

    return comment;
}


const getComment = async (postId) => {
    const post = document.querySelector(`#post${postId}`);

    const commentBox = createElement('div', {
        className: 'comment-box',
        id: `commentForPost${postId}`,
    });


   await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(response => response.json())
        .then(json => {
            json.forEach(commentData => {
                const comment = createComment(commentData);
                commentBox.append(comment);
            })
            post.append(commentBox);
        })
       .catch((err) => {
           console.error(err);
       });
}

export default getComment;