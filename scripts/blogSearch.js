let blogSearchData = {};

// Get the blog
fetch('https://andrewnolan.dev/blogs/blogData.json')
  .then(res => res.json())
  .then(json => {
    blogSearchData = json;
    updateSort();
});

/**
 * Search for a query term
 * 
 * @param {string} query 
 */
const search = (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  query = Object.fromEntries(data.entries())?.query;

  // Create result filter list

  // Loop through the blogSearchData
  // Check if the title or description has the query
  // If yes, include it in the filter list


  // Apply filter to search results
}

document.querySelector('#searchBar').addEventListener('submit', search);


