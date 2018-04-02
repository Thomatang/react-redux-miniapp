import _ from "lodash";
// Define variable React by importing from react module
import React, { Component } from "react";
// use REACTDOM library to render content in the DOM
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
//import SearchBar component with path reference
import SearchBar from "./components/search_bar";
//import video list component
import VideoList from "./components/video_list";
//import video details
import VideoDetail from "./components/video_detail";
//declare variable to hold Youtube API key
const API_KEY = "AIzaSyAoyhBsPCbyeaLOIUOg2UUSuk-UyjfBCPg";

// create new component CLASS. It should produce some HTML
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };
    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({ videos: videos, selectedVideo: videos[0] }); // this.setState({videos: videos})
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    //JSX code
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}
//take component 's generated HTML and put it on the page(in the DOM), 2 parameters, the first to initiate , the second to declare the location
ReactDOM.render(<App />, document.querySelector(".container")); // self-closing tag around APP is used to instantiate class
