// For local development with a changed blogData.json, set the values on line 2
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
            postTitle.innerHTML = queryFilter ? highlightMatchingSearchText(post.Title) : post.Title;
            postTitle.className = "blog-title-line";
            titleDiv.appendChild(postTitle);

            // Create the post date element
            let postDate = document.createElement("h3");
            postDate.textContent = post.Date;
            postDate.className = "blog-date-line";
            titleDiv.appendChild(postDate);

            // Create the post description element
            let postDescription = document.createElement("p");
            postDescription.innerHTML = queryFilter ? highlightMatchingSearchText(post.Description) : post.Description;
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

    if (!document.getElementById("blog-list").innerHTML) {
        document.getElementById("blog-list").innerHTML = "<h3>No matching blogs :'^(</h3>";
    }
}


// Check if a blog post is filtered
function checkFilters(post) {
    const viableTags = getViableTags();
    return post.Tags.some(tag => viableTags.includes(tag)) && applySearchFiltering(post);
}


// Check if a post is part of the search
function applySearchFiltering(post) {
    // If no search term, don't worry about it
    if (!queryFilter) {
        return true;
    }
    
    return scoreSearchResult(post) > 0;
}

// Highlight text in title or description matched by search
function highlightMatchingSearchText(textToMatch) {
    queryFilter.split(" ").forEach(query => {
        const indexOfMatch = textToMatch.toLowerCase().indexOf(query.toLowerCase());
        if (indexOfMatch >= 0) {
            textToMatch = textToMatch.substring(0, indexOfMatch) + '<em>' + textToMatch.substring(indexOfMatch, indexOfMatch + query.length) + '</em>' + textToMatch.substring(indexOfMatch + query.length);
            textToMatch = textToMatch.replaceAll(query, '<em>' + query + '</em>');
        }
    });
    
    return textToMatch;
}

/**
 * Score the post in terms of the search query
 * Uses a sort of tokenizing method
 * 
 * Points:
 * +1.5 matching title token
 * +1 matching description token
 * +0.5 partial match title
 * +0.25 partial match description
 * 
 * @param {object} post 
 */
function scoreSearchResult(post) {
    let searchWeight = 0;

    queryFilter.split(" ").forEach(query => {
        post.Title.split(" ").forEach(word => {
            if (word.toLowerCase() === query.toLowerCase()) {
                searchWeight += 1.5;
            } else if (word.toLowerCase().includes(query.toLowerCase())) {
                searchWeight += 0.75;
            }
        });

        post.Description.split(" ").forEach(word => {
            if (word.toLowerCase() === query.toLowerCase()) {
                searchWeight += 1;
            } else if (word.toLowerCase().includes(query.toLowerCase())) {
                searchWeight += 0.5;
            }
        });
    });

    return searchWeight;
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
    if (queryFilter) {
        document.getElementById('sort-by').innerHTML = "<option>Search Relevance</option>";
        blogData.posts.sort((a, b) => (scoreSearchResult(a) < scoreSearchResult(b) ? 1 : -1));
    } else if (document.getElementById("sort-by").value === "0") {
        blogData.posts.sort((a, b) => (new Date(a.Date) < new Date(b.Date)) ? 1 : -1);
    } else {
        blogData.posts.sort((a, b) => (new Date(a.Date) > new Date(b.Date)) ? 1 : -1);
    }
    generatePosts();
}

// Search for something!
function search(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    queryFilter = Object.fromEntries(data.entries())?.query;

    if (!queryFilter) {
        document.getElementById('sort-by').innerHTML = '<option value="0">Newest First</option><option value="1">Oldest First</option>';
    }

    updateSort();
  }
  
  // Add the listener to the search bar form
  document.querySelector('#search-bar').addEventListener('submit', search);