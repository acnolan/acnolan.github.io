import {useEffect, useState} from 'react';
import blogData from '../../resources/data/blogs.json';

const Blog = (props) => {
    const {setPageTitle} = props;
    
    let urlParts = window.location.href.split('/');
    const blog = urlParts[urlParts.length-1];
    const [blogContent, setBlogContent] = useState();

    useEffect(() => {
        
        console.log(blogData)
        blogData.posts.some(b => {
            if(b.id === blog) {
                setBlogContent(b);
                setPageTitle(b.title);
                return true;  
            }
            return false;
        }); 
        
    });

    return (
        blogContent ? 
            <div className={"content justify-p"}>
                <br/>
                <a href="../blogs" className={"desktop-only"} id="backButton">&lt; Back to Blog List</a>
                <a href="../blogs" className={"mobile-only"} id="backButton">&lt; Back</a>
                <h1 id="blogTitle" className={"purpleText"}>{blogContent.title}</h1>
                <h3>{blogContent.author}</h3>
                <h3>{blogContent.date}</h3>
                <div dangerouslySetInnerHTML={{__html:blogContent.body}}/>
                <br/><br/><br/><br/>
            </div> 
            : <div className={"content justify-p"}>
                <br/>
                <a href="../blogs" className={"desktop-only"} id="backButton">&lt; Back to Blog List</a>
                <a href="../blogs" className={"mobile-only"} id="backButton">&lt; Back</a>
                <h1 id="blogTitle" className={"purpleText"}>{"The requested blog does not exist!"}</h1>
                <div style={{"text-align":"center", "margin":"auto"}}>
                    <img 
                        src="/favicon.ico"
                        alt="An emoji for when things go wrong"
                    />
                </div>
                <br/><br/><br/><br/>
            </div> 
    );
}

export default Blog;