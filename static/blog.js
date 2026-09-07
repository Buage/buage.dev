document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('post');

    fetch('/blog-content/posts/' + id + "/post.md")
    .then(response => response.text())
    .then((data) => {
        document.querySelector(".post-content").innerHTML = marked.parse(data)
    })
});