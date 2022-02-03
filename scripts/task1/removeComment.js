const removeComment = postId => {
    const commentBox = document.querySelector(`#commentForPost${postId}`);
    commentBox.remove();
}

export default removeComment;