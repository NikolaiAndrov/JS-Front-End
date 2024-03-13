function attachEvents() {

    const url = "http://localhost:3030/jsonstore/blog/";

    const loadPostsBtn = document.getElementById("btnLoadPosts");
    const postsSelect = document.getElementById("posts");
    const viewPostBtn = document.getElementById("btnViewPost");
    const postTitle = document.getElementById("post-title");
    const postBody = document.getElementById("post-body");
    const postCommnts = document.getElementById("post-comments");

    let allPosts = {};

    loadPostsBtn.addEventListener("click", async () => {

        postsSelect.innerHTML = "";

        const response = await fetch(url + "posts");
        allPosts = await response.json();
        
        for (const [postId, postObj] of Object.entries(allPosts)) {
            
            let option = document.createElement("option");

            option.value = postId;
            option.textContent = postObj.title;

            postsSelect.appendChild(option);
        }

    });

    viewPostBtn.addEventListener("click", async () => {
        
        postBody.innerHTML = "";
        postCommnts.innerHTML = "";

        const postId = postsSelect.value;
        postBody.textContent = allPosts[postId].body;
        postTitle.textContent = allPosts[postId].title;

        const response = await fetch(url + "comments");
        const commentsInfo = await response.json();
        const filteredComments = Object.values(commentsInfo).filter(c => c.postId === postId);

        for (const comment of filteredComments) {
            
            const li = document.createElement("li");
            li.id = comment.id;
            li.textContent = comment.text;
            postCommnts.appendChild(li);
        }
    });
}

attachEvents();