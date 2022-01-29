import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';

const App = () => {
  const pageSize = 5;
  // apiKey = process.env.REACT_APP_NEWS_API
  const apiKey = "49461f98858c4ff1bced8656b5006729";

  const [progress, setProgress] = useState(0);

    return (
      <>
        <BrowserRouter>
          <Navbar />
          <LoadingBar
            color='#f11946'
            height={3}
            progress={progress}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key="general" country="in" category="general" />} />
            <Route exact path="/business" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key="business" country="in" category="business" />} />
            <Route exact path="/entertainment" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key="entertainment" country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key="health" country="in" category="health" />} />
            <Route exact path="/science" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key="science" country="in" category="science" />} />
            <Route exact path="/sports" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key="sports" country="in" category="sports" />} />
            <Route exact path="/technology" element={<News apiKey={apiKey} setProgress={setProgress} pageSize={pageSize} key="technology" country="in" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </>
    )
}

export default App;
