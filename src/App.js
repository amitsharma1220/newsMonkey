import './App.css';
import { Routes, Route , BrowserRouter} from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize = 6;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({progress: progress})
  }  

  render() {
    return (
      <>
      <BrowserRouter> 
        <Navbar/>
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        />
        <Routes>
          <Route exact path="/" element={ <News setProgress = {this.setProgress}  pageSize={this.pageSize} key="general" country="in"  category="general" />} />
          <Route exact path="/business" element={ <News setProgress = {this.setProgress}  pageSize={this.pageSize} key="business" country="in"  category="business" />} />
          <Route exact path="/entertainment" element={ <News setProgress = {this.setProgress}  pageSize={this.pageSize} key="entertainment" country="in"  category="entertainment" />} />
          <Route exact path="/health" element={ <News setProgress = {this.setProgress}  pageSize={this.pageSize} key="health" country="in"  category="health" />} />
          <Route exact path="/science" element={ <News setProgress = {this.setProgress}  pageSize={this.pageSize} key="science" country="in"  category="science" />} />
          <Route exact path="/sports" element={ <News setProgress = {this.setProgress}  pageSize={this.pageSize} key="sports" country="in"  category="sports" />} />
          <Route exact path="/technology" element={ <News setProgress = {this.setProgress}  pageSize={this.pageSize} key="technology" country="in"  category="technology" />} />
        </Routes>  
      </BrowserRouter>
      </>
    )
  }
}

