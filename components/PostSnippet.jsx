import React from 'react'
import {Card} from 'antd';
import {Link} from "@reach/router"
import db from '../firebase'

const PostSnippet=(props) => {
    return (
        <div className="postSnippet_container">
            <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={props.title}
                extra={
                    <div className="post_snippet_links">
                    <Link to={`/post/${props.id}`} style ={{marginRight : '15px', float: 'left'}}>
                    Read Full Article
                    </Link> 
                    
                    </div>
                }
                >
                <p className = "article_content">
                    {
                        props.content.split('\n').map((paragraph,idx)=>{
                            return <p key = {idx}>{paragraph}</p>;
                        })
                    }
                </p>  
            </Card>
        </div>
    )
}
export default PostSnippet;