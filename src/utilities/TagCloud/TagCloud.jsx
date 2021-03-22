import React, { useEffect } from 'react';

//Styles
import './TagCloud.styles.css';

const TagCloudFn = require('TagCloud');

const container = '.tag-container';
const texts = [
    'HTML5', 'React.js', 'JavaScript',
    'CSS3', 'Python', 'Bootstrap',
    'Git', 'Responsive Web Design', 
    'JIRA', 'Cordova', "REST",
    'API', 'C#', 'Ionic', 
];
const options = {
  radius: 225,
  initSpeed: "normal"
};

const TagCloud = () => {
  

  useEffect(() => {
    const tagCloud = TagCloudFn(container, texts, options);

    return () => tagCloud.destroy()
  }, [])
  
  return (
    <div>
      <div className="tag-container"></div>
    </div>
  )
}

export default TagCloud
