import React,{useState,useEffect} from 'react'
import { PageHeader,Input,Button} from 'antd';
const {TextArea}=Input;
import db from '../firebase'
import { navigate } from "@reach/router"
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import{Router,Link} from "@reach/router"
const UpdatePost=(props)=>{
    const [title,setTitle]=useState('')
    const [content,setContent]=useState('')
    useEffect(()=>{
        let postRef=db
        .collection('users')
        .doc(props.user.uid)
        .collection('posts')
        .doc(props.id)
    postRef
        .get()
        .then(doc=>{
            let {content,title}=doc.data()
            setTitle(title)
            setContent(content)
        })
       
    },[])
    const onTitleChange=(event)=>{
        setTitle(event.target.value)
    }
    const onContentChange=(event)=>{
        setContent(event.target.value)
    }
    const onEditPost=()=>{
        let postRef=db.collection('users').doc(props.user.uid).collection('posts').doc(props.id)
        let postRef2=db.collection('posts').doc(props.id)
        let payload={title,content}
        postRef.update(payload)
            .then(function(doc){
                console.log("Document Successfully updated!",doc.id)
            })
        postRef2.update(payload)
            .then(function(doc){
                console.log("Document Successfully updated!",doc.id)
            })
        navigate(`/posts`)

    }
    return(
        <div className="create_post_container">
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
                title="Create Post"
            />
        </div>
        <div className="post_inputs_container">
            <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Post Title</h2>
                </div>
                <div className = "post_input">
                    <Input placeholder="Post title"value={title} onChange={onTitleChange}/>
                </div>
            </div>
        </div>
        <div className="post_inputs_container">
            <div className="post_input_container">
                <div className="post_input_title">
                    <h2>Post Content</h2>
                </div>
                <div className = "post_input">
                    <TextArea rows={10} value ={content} onChange={onContentChange}/>
                </div>
            </div>
            <div className="post_input_button">
                <Button type="primary" size="large" onClick={onEditPost}>
                    edit post
                </Button>
            </div>
        </div>
        </div>
    )
}
export default UpdatePost;