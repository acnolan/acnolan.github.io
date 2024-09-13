// For local development with a changed blogData.json, set the values on line 2
let blogData = {};

// Get the search query parameter
function getSearchQueryParam() {
  const urlParams = new URLSearchParams(window.location.search);
  const query = urlParams.get('q');
  if (query) {
    document.getElementById('search-bar-input').value = query;
    return query;
  }
  return '';
}

// Get the search query
let queryFilter = getSearchQueryParam();

function setSearchQueryParam(newQuery) {
  const url = new URL(window.location.href);
  url.searchParams.set('q', newQuery);
  window.history.replaceState({}, '', url.toString());
}

// Goes through the tags and returns an array containing ones that are checked
function getViableTags() {
  const viableTags = [];
  if (document.getElementById('ai').checked) {
    viableTags.push('AI');
  }
  if (document.getElementById('coding').checked) {
    viableTags.push('Coding');
  }
  if (document.getElementById('design').checked) {
    viableTags.push('Design');
  }
  if (document.getElementById('edTech').checked) {
    viableTags.push('EdTech');
  }
  if (document.getElementById('movies').checked) {
    viableTags.push('Movies');
  }
  if (document.getElementById('books').checked) {
    viableTags.push('Books');
  }
  if (document.getElementById('urbanism').checked) {
    viableTags.push('Urbanism');
  }
  if (document.getElementById('politics').checked) {
    viableTags.push('Politics');
  }
  if (document.getElementById('misc').checked) {
    viableTags.push('Misc');
  }
  return viableTags;
}

// Cleans up text for search purposes
function cleanUpText(text) {
  return text.toLowerCase().trim();
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

  queryFilter.split(' ').forEach((query) => {
    post.Title.split(' ').forEach((word) => {
      if (cleanUpText(word) === cleanUpText(query)) {
        searchWeight += 1.5;
      } else if (cleanUpText(word).includes(cleanUpText(query))) {
        searchWeight += 0.75;
      }
    });

    post.Description.split(' ').forEach((word) => {
      if (cleanUpText(word) === cleanUpText(query)) {
        searchWeight += 1;
      } else if (cleanUpText(word).includes(cleanUpText(query))) {
        searchWeight += 0.5;
      }
    });
  });

  return searchWeight;
}

// Check if a post is part of the search
function applySearchFiltering(post) {
  // If no search term, don't worry about it
  if (!queryFilter) {
    return true;
  }

  return scoreSearchResult(post) > 0;
}

// Check if a blog post is filtered
function checkFilters(post) {
  const viableTags = getViableTags();
  return post.Tags.some((tag) => viableTags.includes(tag)) && applySearchFiltering(post);
}

// Highlight text in title or description matched by search
function highlightMatchingSearchText(textToMatch) {
  let highlightedText = textToMatch;
  queryFilter.split(' ').forEach((query) => {
    const indexOfMatch = cleanUpText(textToMatch).indexOf(cleanUpText(query));
    if (indexOfMatch >= 0) {
      highlightedText = `${textToMatch.substring(0, indexOfMatch)}<em>${textToMatch.substring(indexOfMatch, indexOfMatch + query.length)}</em>${textToMatch.substring(indexOfMatch + query.length)}`;
      highlightedText = textToMatch.replaceAll(query, `<em>${query}</em>`);
    }
  });

  return highlightedText;
}

// Get visit data
function getVisitData(post) {
  const blogEntry = post.Key;
  fetch(`https://andrewnolan.goatcounter.com/counter/%2Fblogs%2F${blogEntry}.json`).then((response) => {
    if (response.ok) {
      return response.json();
    }
    throw new Error(`Error: ${response.status}`);
  }).then((data) => {
    const viewElement = document.getElementById(`${blogEntry}-views`);
    const viewOrViews = data.count === '1' ? 'view' : 'views';
    viewElement.innerHTML = `${data.count} ${viewOrViews}`;
    // eslint-disable-next-line no-param-reassign
    post.Views = parseInt(data.count, 10);
  }, () => {
    const viewElement = document.getElementById(`${blogEntry}-views`);
    viewElement.innerHTML = '0 views';
    // eslint-disable-next-line no-param-reassign
    post.Views = 0;
  });
}

// Create the list of blog posts
function generatePosts() {
  document.getElementById('blog-list').innerHTML = '';

  blogData.posts.forEach((post) => {
    // Check if the post has one of the selected tags
    if (checkFilters(post)) {
      // Create the blog entry
      const blogEntry = document.createElement('div');
      blogEntry.className = 'blog-list-entry';

      const titleDiv = document.createElement('div');
      titleDiv.className = 'blog-title-div';
      blogEntry.append(titleDiv);

      // Create the post title element
      const postTitle = document.createElement('h3');
      postTitle.innerHTML = queryFilter ? highlightMatchingSearchText(post.Title) : post.Title;
      postTitle.className = 'blog-title-line';
      titleDiv.appendChild(postTitle);

      // Create the post date element
      const postDate = document.createElement('p');
      postDate.textContent = post.Date;
      postDate.className = 'blog-date-line';
      titleDiv.appendChild(postDate);

      // Create the post description element
      const postDescription = document.createElement('p');
      postDescription.innerHTML = queryFilter ? highlightMatchingSearchText(post.Description)
        : post.Description;
      postDescription.className = 'blog-description';
      blogEntry.appendChild(postDescription);

      // Create the metadata (views and tags) row
      const metaDataDiv = document.createElement('div');
      metaDataDiv.className = 'meta-data-div';
      blogEntry.append(metaDataDiv);

      // Create the post tags element
      const postTags = document.createElement('h4');
      let postTagsText = 'Tags: ';
      post.Tags.forEach((tag) => {
        postTagsText += `${tag}, `;
      });
      postTags.textContent = postTagsText.slice(0, postTagsText.length - 2);
      metaDataDiv.appendChild(postTags);

      // Create the post view count element
      const postViews = document.createElement('small');
      postViews.id = `${post.Key}-views`;
      getVisitData(post);
      postViews.className = 'blog-views';
      metaDataDiv.appendChild(postViews);

      // Add a link to the blog
      // This is more semantic and better for accessibility than a JavaScript onclick
      const blogLink = document.createElement('a');
      blogLink.href = `./blogs/${post.Key}`;
      blogLink.className = 'blog-link';
      blogLink.ariaLabel = post.Title;
      blogEntry.appendChild(blogLink);

      // Add the blog entry to the blog list
      const blogList = document.getElementById('blog-list');
      blogList.appendChild(blogEntry);
    }
  });

  if (!document.getElementById('blog-list').innerHTML) {
    document.getElementById('blog-list').innerHTML = '<h3>No matching blogs :\'^(</h3>';
  }
}

// Update the order of the document
function updateSort() {
  if (queryFilter) {
    document.getElementById('sort-by').innerHTML = '<option>Search Relevance</option>';
    blogData.posts.sort((a, b) => (scoreSearchResult(a) < scoreSearchResult(b) ? 1 : -1));
  } else if (document.getElementById('sort-by').value === '0') {
    blogData.posts.sort((a, b) => ((new Date(a.Date) < new Date(b.Date)) ? 1 : -1));
  } else if (document.getElementById('sort-by').value === '2') {
    blogData.posts.sort((a, b) => ((a.Views < b.Views) ? 1 : -1));
  } else {
    blogData.posts.sort((a, b) => ((new Date(a.Date) > new Date(b.Date)) ? 1 : -1));
  }
  generatePosts();
}

// Search for something!
function search(e) {
  e.preventDefault();
  const data = new FormData(e.target);
  queryFilter = cleanUpText(Object.fromEntries(data.entries())?.query);
  setSearchQueryParam(queryFilter);

  if (!queryFilter) {
    document.getElementById('sort-by').innerHTML = '<option value="0">Newest First</option><option value="1">Oldest First</option><option value="2">Popularity</option>';
  }

  updateSort();
}

// Add the listener to the search bar form
document.querySelector('#search-bar').addEventListener('submit', search);

// Get the blog
fetch('https://andrewnolan.dev/blogs/blogData.json')
  .then((res) => res.json())
  .then((json) => {
    blogData = json;
    updateSort();
  });
