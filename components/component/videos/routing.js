import React, {Component} from 'react';

import UserInputs from './user_inputs';
import SearchBar from './search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './video_list';
import VideoDetail from './video_details';
import "./complete.css"

const API_KEY =" ";//"AIzaSyALY8xL3Y85VTF27ABKdd4HRTihe13beAA";

const User_In = () => {
    return (
      <div>
        <UserInputs/>
      </div>
    );
};
  

class CuratedContents extends Component{

    constructor (props){
      super(props);

      this.state = {
        index: 0,
        indexm:0,
        videos: [],
        motivates: ["Talk to friends or family face-to-face",
          "Spend some time in nature",
          "Read a good book",
          "List what you like about yourself",
          "Do something spontaneous",
          "Listen to music",
          "Take a long, hot bath",
          "Watch a funny movie or TV show"],
        selectVideo: null,
        completed: false,
        
      };
      this.videoSearch('English Motivational Videos');
    }
    
  
  
  videoCompleted = (completed) => {
    
    this.setState({completed:completed});
  }

  
  videoSearch = (searchTerm) => {
    console.log("hello",searchTerm,this.state)
    YTSearch({key: API_KEY, term: searchTerm},(data) => {
      
      this.setState({
          videos: data,
          selectedVideo: data[0]
      });
    });
  }
  
  render(){
    console.log(this.state)
    return(
      <div className="videos">
        <SearchBar onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}/>
        <div class="row">
          <div class="column">
            <VideoDetail 
              video={this.state.selectedVideo} 
              onCompletion={comp => this.videoCompleted(comp)} 
              motivation={this.state.motivates} 
              index={this.state.index}
            />
        
          </div>
          <div class="container column">
            <VideoList
              onVideoSelect={userSelected => this.setState({selectedVideo: userSelected})}
              completed={this.state.completed}
              index={this.state.index}
              indexM={this.state.indexm}
              videos={this.state.videos}
              onCompletion={completed => this.videoCompleted(completed)}
              indexChange={indexC => this.setState({index: indexC})}
              indexMChange = {indexMo => this.setState({indexm: indexMo})}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default CuratedContents;