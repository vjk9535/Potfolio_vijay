import React from 'react';
import { Image } from 'semantic-ui-react';

export default function Certification() {
  const itemData = [
    {
      img: 'FreeCodeCamp.png',
      title: 'FreeCodeCamp',
    },
    {
      img: 'SvgAnimation.png',
      title: 'SvgAnimation',
    },
    {
      img: 'TestDom.png',
      title: 'TestDom',
    },
    {
      img: 'Nodejs.png',
      title: 'Nodejs',
    },
    {
      img: 'PythonC.png',
      title: 'Python',
    },
    {
      img: 'MSSQL.png',
      title: 'Mssql',
    },
    {
      img: 'SSIS.png',
      title: 'Ssis',
    },
    {
      img: 'FullStack.png',
      title: 'FullStack',
    },
  ];

 const itemsPerRow = 4; // change as needed
  
  return (
    <div className="horizontalGrid" style={{width:'100%'}}>
      {itemData.map((item, index) => (
        <Image
          key={item.title}
          src={item.img}
          alt={item.title}
          width="200"
          height="150"
          className={`imageSet2 ${index % itemsPerRow === itemsPerRow - 1 ? "lastImageOfRow" : ""}`}
        />
      ))}
    </div>
  );
}