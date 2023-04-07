import React from 'react'
import { Image } from 'semantic-ui-react'
export default function Certification() {
    const itemData = [
        {
            img: "FreeCodeCamp.png",
            title: "FreeCodeCamp",
        },
        {
            img: "SvgAnimation.png",
            title: "SvgAnimation",
        },
        {
            img: "TestDom.png",
            title: "TestDom",
        },
        {
            img: "Nodejs.png",
            title: "Nodejs",
        },
        {
            img: "PythonC.png",
            title: "Python",
        },
        {
            img: "MSSQL.png",
            title: "Mssql",
        },
        {
            img: "SSIS.png",
            title: "Ssis",
        },
        {
            img: "FullStack.png",
            title: "FullStack",
        }
    ]
  return (
    <div
    className="horizontalGrid"
    container
    spacing={{ xs: 2, md: 3 }}
    columns={{ xs: 4, sm: 8, md: 12 }}
  >
    <span className="alignImageDirect2">
      {itemData.map((item_set3) => (
        <Image
          src={`${item_set3.img}`}
          alt={item_set3.title}
          width="200"
          height="200"
          className="imageSet2"
        />
      ))}
    </span>
  </div>
  )
}
