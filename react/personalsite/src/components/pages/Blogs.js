import { useEffect, useState } from 'react';
import BlogEntry from '../widgets/BlogEntry';
import ContactButton from '../widgets/ContactButton';
import blogDataRaw from '../../resources/data/blogs.json';
import './styles/blogs.css';

const Blogs = (props) => {
    let categories = ["Coding", "Movies", "Misc"];
    const {setPageTitle} = props;
    const [selectedTags, setSelectedTags] = useState(categories);
    const [checkedTags, setCheckedTags] = useState(new Array(categories.length).fill(true));
    const [blogData, setBlogData] = useState(blogDataRaw);

    useEffect(() => {
        setPageTitle("Andrew Nolan's Blog");
    });

    const generateBlogList = () => {
        // eslint-disable-next-line array-callback-return
        const entries = blogData.posts.map(blog => {
            if (blog.tags.some(tag => selectedTags.includes(tag))){
                return <BlogEntry key={blog.title} blogData={blog}/>
            }
        });
        return entries;
    }

    const generateCheckList = () => {
        const checkList = categories.map((c,i) => {
            return (
                <p>
                    <input
                        id={c}
                        type="checkbox"
                        onChange={(event) => updateSelectedTags(event, i)}
                        checked={checkedTags[i]}
                    />
                    {c}
                </p>
            )
        });
        return checkList;
    }

    const updateSort = (event) => {
        let newSort = event.target.value;
        let tempData = {...blogData};
        if (newSort === "1") {
            tempData.posts.sort((a, b) => (a.date > b.date) ? 1 : -1);
            setBlogData(tempData);
        } else {
            tempData.posts.sort((a, b) => (a.date < b.date) ? 1 : -1);
            setBlogData(tempData);
        }
        
    }

    const updateSelectedTags = (event, index) => {
        checkedTags[index] = event.target.checked;
        setCheckedTags([...checkedTags]);
        if (event.target.checked) {
            selectedTags.push(categories[index])
            setSelectedTags([...selectedTags]);
        } else {
            let indexToRemove = selectedTags.indexOf(categories[index]);
            selectedTags.splice(indexToRemove, 1);
            setSelectedTags([...selectedTags]);
        }        
    }

    return (
        <div className="content">
            <br/>
            <h1 className="purpleText">Blogs</h1>

            <div id="blogStuff">
                <div id="blogList">
                    {generateBlogList()}
                </div>
                <div id="blogFilter">
                    <div id="filterBox">
                        <h3>Filter</h3>
                        <strong>Sort by:</strong>
                        <select id="sortby" onChange={updateSort}>
                            <option value="0">Newest First</option>
                            <option value="1">Oldest First</option>
                        </select>
                        <br/><br/>
                        <strong>Tags:</strong>
                        {generateCheckList()}
                        <br/><br/>
                    </div>
                </div>
            </div>
            <br/><br/>
            <ContactButton/>
        </div>
    );
}

export default Blogs;