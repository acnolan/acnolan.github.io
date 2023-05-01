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
    console.log(e);
}
