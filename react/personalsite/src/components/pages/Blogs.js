import { useEffect, useState } from 'react';
import BlogEntry from '../widgets/BlogEntry';
import blogData from '../../resources/data/blogs.json';
import './styles/blogs.css';

const Blogs = (props) => {
    const {setPageTitle} = props;
    const [selectedTags, setSelectedTags] = useState(["Coding", "Movies", "Misc"])

    useEffect(() => {
        setPageTitle("Andrew Nolan's Blog");
    });

    const generateBlogList = () => {
        return blogData.posts.forEach(blog => {
            if (blog.tags.some(tag => selectedTags.includes(tag))){
                return <BlogEntry blogData={blog}/>
            }
        });
    }

    return (
        <div class="content justify-p">
            <br/>
            <h1 className="purpleText">Work Experience</h1>

            <div id="blogStuff">
                <div id="blogList">
                    {generateBlogList()}
                </div>
                <div id="blogFilter">
                    <div id="filterBox">
                        <h3>Filter</h3>
                        <strong>Sort by:</strong>
                        <select id="sortby" onchange="updateSort()">
                            <option value="0">Newest First</option>
                            <option value="1">Oldest First</option>
                        </select>
                        <br/><br/>
                        <strong>Tags:</strong>
                        <p><input id="coding" type="checkbox" onchange="generatePosts()" checked/>Coding</p>
                        <p><input id="movies" type="checkbox" onchange="generatePosts()" checked/>Movies</p>
                        <p><input id="misc" type="checkbox" onchange="generatePosts()" checked/>Miscellaneous</p>
                        <br/><br/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blogs;