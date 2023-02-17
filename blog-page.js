let posts = localStorage.getItem("posts")
  ? JSON.parse(localStorage.getItem("posts"))
  : [];

console.log(posts);

// SINGLE BLOG PAGE

let blog_title = document.querySelector(".blog-title");

let blog_text = document.querySelector(".blog-text-container");

let blog_image = document.querySelector(".blog-image");

let renderSingleBlog = (arr) => {
  let blog = arr[3];

  // BLOG HEADING
  blog_heading = document.createElement("h1");
  blog_date = document.createElement("p");
  blog_date.innerText = "12 May 2021";
  blog_heading.innerText = blog.title;

  blog_title.appendChild(blog_heading);
  blog_title.appendChild(blog_date);

  //BLOG IMAGE
    let blog_picture = document.createElement("img");
    blog_picture.src = blog.image;
    blog_image.appendChild(blog_picture);


  // BLOG TEXT
  blog_body = document.createElement("p");
  blog_body.innerText = blog.body;
    blog_text.appendChild(blog_body);
};

// CREATE COMMENT SECTION

let comment_name = document.getElementById("comment-name");
let comment_email = document.getElementById("comment-email");
let comment_body = document.getElementById("comment-body");
let comment_submit = document.getElementById("comment-submit");

let comments = localStorage.getItem("comments") ? JSON.parse(localStorage.getItem("comments")) : [];

const date = () => {
  const now = new Date(Date.now());
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = now.getDate();
  const monthIndex = now.getMonth();
  const year = now.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]} ${year}`;

  return formattedDate;
};

let commentObj = {

    name: "",
    email: "",
    body: "",
    date: date()

}

const createComment = (e) => {

    e.preventDefault();

    commentObj.name = comment_name.value;
    commentObj.email = comment_email.value;
    commentObj.body = comment_body.value;

    comments.push(commentObj);

    localStorage.setItem("comments", JSON.stringify(comments));

    comment_name.value = "";
    comment_email.value = "";
    comment_body.value = "";

    console.log(comments);

};

comment_submit.addEventListener("click", createComment);

// RENDER COMMENTS

let renderComments = (arr) => {

    let comments_container = document.querySelector(".comments-container");


    arr.forEach((comment) => {
    let comment_box = document.createElement("div");
    comment_box.classList.add("comment-box");

        let comment_heading = document.createElement("p");
        comment_heading.setAttribute("id", "comment-heading");
        comment_heading.innerText = `${comment.name} says...`;

        let comment_text = document.createElement("p");
        comment_text.setAttribute("id", "comment-text");
        comment_text.innerText = comment.body;

        let comment_date = document.createElement("p");
        comment_date.setAttribute("id", "comment-date");
        comment_date.innerText = comment.date;

        comment_box.appendChild(comment_heading);
        comment_box.appendChild(comment_text);
        comment_box.appendChild(comment_date);

        comments_container.appendChild(comment_box);
    });

}

window.onload = () => {
    renderSingleBlog(posts);
    renderComments(comments);
    console.log(comments);
  };