import React from 'react'

export default function Poc() {
  return (
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',fontWeight:'bold',fontSize:'20px',width:'100%'}}>
        <video  autoPlay loop width={400}>
    <source src="PhotoGallary.mp4" type="video/mp4" />
    Sorry, your browser doesn't support videos.
</video>
        <p style={{textAlign:'center'}}>CSS Animations used like :
@keyframes, animation .</p>
<p style={{textAlign:'center'}}>Libraries used : react, semantic-uireact,
material-ui, react-router-dom</p>
<a href='https://gallery-murex.vercel.app/' style={{textAlign:'center'}}>URL</a>
    </div>
  )
}
