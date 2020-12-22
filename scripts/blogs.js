// The data, temporarily stored here, should be moved to .json file
let blogData = {
    "posts":
        [
            {
                "Title": "Hello World!",
                "Date": "12/22/2020",
                "Tags": ["Misc"],
                "Description": "The first every entry to my blogs",
                "Url": "./blogs/HelloWorld.html"
            }
        ]
}

updateSort();


// Create the list of blog posts
function generatePosts() {
    document.getElementById("blogList").innerHTML = "";
    let viableTags = getViableTags();

    blogData.posts.forEach(post => {
        // Check if the post has one of the selected tags
        if (post.Tags.some(tag => viableTags.includes(tag))) {
            // Create the blog entry
            let blogEntry = document.createElement("div");
            blogEntry.className = "blogListEntry";
            blogEntry.onclick = function () {
                window.location.href = post.Url;
            }

            // Create the post title element
            let postTitle = document.createElement("h3");
            postTitle.textContent = post.Title;
            postTitle.className = "blogTitleLine";
            blogEntry.appendChild(postTitle);

            // Create the post date element
            let postDate = document.createElement("h3");
            postDate.textContent = post.Date;
            postDate.className = "blogDateLine";
            blogEntry.appendChild(postDate);

            // Create the post description element
            let postDescription = document.createElement("p");
            postDescription.textContent = post.Description;
            postDescription.className = "blogDescription";
            blogEntry.appendChild(postDescription);

            // Create the post tags element
            let postTags = document.createElement("h4");
            let postTagsText = "Tags: ";
            post.Tags.forEach(tag => {
                postTagsText += tag + ', ';
            });
            postTags.textContent = postTagsText.slice(0, postTagsText.length - 2);
            blogEntry.appendChild(postTags);

            // Add the blog entry to the blog list
            let blogList = document.getElementById("blogList");
            blogList.appendChild(blogEntry);
        }
    });
}

// Goes through the tags and returns an array containing ones that are checked
function getViableTags() {
    let viableTags = [];
    if (document.getElementById("coding").checked) {
        viableTags.push("Coding");
    }
    if (document.getElementById("movies").checked) {
        viableTags.push("Movies");
    }
    if (document.getElementById("misc").checked) {
        viableTags.push("Misc");
    }
    return viableTags;
}

// Update the order of the document
function updateSort() {
    if (document.getElementById("sortby").value === "1") {
        blogData.posts.sort((a, b) => (a.Date < b.Date) ? 1 : -1);
    } else {
        blogData.posts.sort((a, b) => (a.Date > b.Date) ? 1 : -1);
    }
    generatePosts();
}