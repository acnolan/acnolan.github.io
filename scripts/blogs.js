// The data, temporarily stored here, should be moved to .json file
let blogData = {};
let queryFilter = "";

// Get the blog
fetch('https://andrewnolan.dev/blogs/blogData.json')
  .then(res => res.json())
  .then(json => {
    blogData = json;
    updateSort();
});

// Create the list of blog posts
function generatePosts() {
    document.getElementById("blog-list").innerHTML = "";

    blogData.posts.forEach(post => {
        // Check if the post has one of the selected tags
        if (checkFilters(post)) {
            // Create the blog entry
            let blogEntry = document.createElement("div");
            blogEntry.className = "blog-list-entry";
            blogEntry.onclick = function () {
                window.location.href = post.Url;
            }

            let titleDiv = document.createElement("div");
            titleDiv.className = "blog-title-div";
            blogEntry.append(titleDiv);

            // Create the post title element
            let postTitle = document.createElement("h3");
            postTitle.textContent = post.Title;
            postTitle.className = "blog-title-line";
            titleDiv.appendChild(postTitle);

            // Create the post date element
            let postDate = document.createElement("h3");
            postDate.textContent = post.Date;
            postDate.className = "blog-date-line";
            titleDiv.appendChild(postDate);

            // Create the post description element
            let postDescription = document.createElement("p");
            postDescription.innerHTML = post.Description;
            postDescription.className = "blog-description";
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
            let blogList = document.getElementById("blog-list");
            blogList.appendChild(blogEntry);
        }
    });
}


// Check if a blog post is filtered
function checkFilters(post) {
    const viableTags = getViableTags();
    return post.Tags.some(tag => viableTags.includes(tag)) && applySearchFiltering(post);
}

function applySearchFiltering(post) {
    // If no search term, don't worry about it
    if (!queryFilter) {
        return true;
    }

    // Some things to try
    // 1. Match full text vs substring (probably can't do full text easily without stemming so maybe a ranking later)
    // 2. Stemming
    // 3. Tokenizing (check if any search token shows up more = higher weight) (break both text and query into tokens)
    // 4. Synonyms
    // 5. Add a sort by for relevant that is used when search is applied
    // 6. Weighting in sort (maybe title is higher than description)
    // 7. Highlight matching text
    // 8. Fuzzy search?
    post.Description.split(" ").forEach(textBlob => {
        queryFilter.split(" ").forEach(query => {
            return textBlob.toLowerCase().includes(query.toLowerCase());
        });
    });
    return post.Description.toLowerCase().includes(queryFilter.toLowerCase()) || post.Title.toLowerCase().includes(queryFilter.toLowerCase())
}

function highlightMatchingSearchText(textToMatch) {
    // Break query into tokens and loop
        // Break textToMatch into tokens and check if it matches
            // add <em> tags around matches
}

function sortBySearch() {
    // Weigh each post by the search sort criteria
    // 1. +1.5 for matching tokens to query in title
    // 2. +1 for matching tokens to query in description
    // 3. +0.5 matching substring of token in title
    // 4. +0.25 matching substring of token in description
}


// Goes through the tags and returns an array containing ones that are checked
function getViableTags() {
    let viableTags = [];
    if (document.getElementById("coding").checked) {
        viableTags.push("Coding");
    }
    if (document.getElementById("design").checked) {
        viableTags.push("Design");
    }
    if (document.getElementById("edTech").checked) {
        viableTags.push("EdTech");
    }
    if (document.getElementById("movies").checked) {
        viableTags.push("Movies");
    }
    if (document.getElementById("books").checked) {
        viableTags.push("Books");
    }
    if (document.getElementById("misc").checked) {
        viableTags.push("Misc");
    }
    return viableTags;
}

// Update the order of the document
function updateSort() {
    if (document.getElementById("sort-by").value === "0") {
        blogData.posts.sort((a, b) => (new Date(a.Date) < new Date(b.Date)) ? 1 : -1);
    } else {
        blogData.posts.sort((a, b) => (new Date(a.Date) > new Date(b.Date)) ? 1 : -1);
    }
    generatePosts();
}

/**
 * Search for a query term
 * 
 * @param {string} query 
 */
function search(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    queryFilter = Object.fromEntries(data.entries())?.query;
    generatePosts();
  }
  
  document.querySelector('#searchBar').addEventListener('submit', search);