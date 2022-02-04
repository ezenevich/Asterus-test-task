import getPosts from "./task1/getPostsJson.js";
import addRow from "./task2/addRow.js";



const init = () => {
    const postsList = document.querySelector('.task1__postsList');
    const form = document.querySelector('.info');

    getPosts(postsList, 20);

    form.addEventListener('submit', event => {
        event.preventDefault();
        const formInfo = event.target;

        const info = {
            name: formInfo.name.value,
            age: formInfo.age.value,
            gender: formInfo.gender.value,
        };

        addRow(info);

        for (const element of form.elements) {
            if(element.classList.contains('info__field')){
                element.value = '';
            }
        }
    });
};



init();

