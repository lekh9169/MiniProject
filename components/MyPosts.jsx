import React ,{useState,useEffect}from 'react'
import { PageHeader } from 'antd';
import MyPostsSnippet from './MyPostsSnippet';
import _ from 'lodash'
import db from '../firebase'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import{Router,Link} from "@reach/router"
const MyPosts=(props)=>{
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        let userId=props?.user.uid ? props?.user.uid : props.uid
        db.collection('users').doc(userId).collection('posts')
            .onSnapshot(async posts => {
                let postsData= await posts.docs.map(post => {
                    let data = post.data()
                    let { id }= post
    
                    let payload={
                        id,
                        ...data
                    } 
                    return payload
                });
                setPosts(postsData)
            })
    },[])
    return(
    <div className="posts_container">
        <div className="app_main_navigation">
               
               <Menu mode="horizontal">
                   <Menu.Item key="posts" icon={<MailOutlined />}>
                     <Link to="/postapp" style={{ float:'right'}}>Posts</Link>
                   </Menu.Item>
             
                     {props.user && 
                       <Menu.Item key="create_post"  icon={<AppstoreOutlined />}>
                       <Link to="/create_post" style={{ float:'right'}}>Create Posts</Link>
                       </Menu.Item>

                         }
                     {props.user &&
                       <Menu.Item key="Myposts" icon={<SettingOutlined />}>
                         <Link to={`/blogs/${props.user.uid}/posts`} style={{ float:'right'}}>My Posts</Link>
                       </Menu.Item>
                       }
                   
                   
               </Menu>   

             
       
         </div>
        <div className ="page_header_container">
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                title="Posts"
            />,
        </div>
        <div className="articles_container">
            {
                _.map(posts,(article,idx)=>(

                    <MyPostsSnippet
                    key={idx}
                    id={article.id}
                     title={_.capitalize(article.title) } 
                    content = {article.content.substring(0,1000)}
                    user={props.user}
                    uid={props.uid}
                    />
                ))
                        
            }
            
        </div>
        

    </div>
    )
}
export default MyPosts;