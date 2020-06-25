import React ,{useState}from 'react'
import Posts from  './Posts'
import Post from './Post'
import MentTransparent from './component/Images/MentTransparent.png';
import CreatePost from './CreatePost'
import{Router,Link, navigate} from "@reach/router"
import { Menu,Avatar,Layout } from 'antd';
import UpdatePost from './UpdatePost';
import SignIn from './SignIn'
import SignUp from './SignUp'
//import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import {auth} from '../firebase'
import PostApp from './PostApp';
import MyPosts from './MyPosts';
import MyPostsSnippet from './MyPostsSnippet';
import store from './store';
import {Provider} from 'react-redux';
//import Header from './component/layout/Header'
import Footer from './component/layout/Footer'
import Volunteers from './component/volunteer/Volunteers'
import Profile from './component/volunteer/Profile';
import Chat from './component/chat/Chat';
import Home from './component/pages/Home';
import CuratedContent from './component/videos/routing'
import UserInputs from './component/videos/user_inputs'
import 'antd/dist/antd.css';
import "./component/videos/complete.css"
const {Header} =Layout;
//const {SubMenu} = Menu;
function App(props){
    const [user,setUser]=useState(false)
    auth.onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          // ...
          setUser(user)
          navigate("/")
        } 
        else {
          // User is signed out.
          console.log("No user Signed in")
          //alert("password")
          // ...
        }
      });
      const onSignOut=()=>{
        console.log('signing out',props)
        auth.signOut().then(function(){

            console.log('user signed out')
            alert('signed out')
            setUser(false)
            navigate("/")
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
          });
      }
    console.log(user,"routing report on User")  
    return (
      <Provider store={store}>
         <Layout className="Header">
          <Layout>
            <Header style={{background:'black'}}>
            <Link className="navbar-brand" to="/">
                <img src={MentTransparent} style={{height:'70px',width:'120px'}} />
            </Link>  
            {!user?
              <Link style={{float:'right',marginRight:'20px'}} to="/sign_in">Sign In</Link>
              :
              <a style={{float:'right',marginRight:'20px'}} onClick = {onSignOut}>Sign Out</a>
            }
              <Link style={{float:'right',marginRight:'20px'}} to="/postapp">BLOGS</Link>
              {!user ?  
                <Link style={{float:'right',marginRight:'20px',marginLeft:'20px'}} to="/sign_in">VOLUNTEERS</Link>
                :
                <Link style={{float:'right',marginRight:'20px',marginLeft:'20px'}} to="/volunteers">VOLUNTEERS</Link>
              } 
              {!user ?
                <Link style={{float:'right',marginLeft:'20px'}} to="/sign_in">VIDEOS</Link>
                :
                <Link style={{float:'right',marginLeft:'20px'}} to="/videos">VIDEOS</Link>
              }
              <Link style={{float:'right',marginLeft:'20px'}} to="/">HOME</Link>
              
            </Header>
          
          </Layout>
        </Layout>
         {/* <Header user={user}/> */}
          <div className="app_container main">
            <Router>
                  
                  <SignUp path="sign_up"/>
                  <SignIn path="sign_in"/>
                  <PostApp path ="postapp" user={user}/>
                  <Home path="home" />
                  <Volunteers path="volunteers"/>
                  <Chat path="chat" user={user}/>
                  <CuratedContent path="videos" user={user}/>
                  <Profile path="profile/:id" user={user}/>
                  <UserInputs path="userInput" user={user} default/>
                  <MyPosts path="blogs/:uid/posts" user={user}/>
                  <CreatePost path="create_post" user={user}/>
                  <Post path="post/:id"/>
                  <UpdatePost path="update_post/:id" user={user}/>


              </Router>

          </div>
          <Footer/>
        </Provider>
        
    )

}
export default App;