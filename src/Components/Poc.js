import React from 'react'

export default function Poc() {
  return (
    <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10}}>
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',fontWeight:'bold',fontSize:'20px',width:'100%'}}>
        <video  autoPlay loop width={300} onClick={() => window.open('https://gallery-murex.vercel.app/', '_blank')}>
    <source src="PhotoGallary.mp4" type="video/mp4" />
    Sorry, your browser doesn't support videos.
</video>
        <p style={{textAlign:'center'}}>CSS Animations used like :
@keyframes, animation .</p>
<p style={{textAlign:'center'}}>Libraries used : react, semantic-uireact,
material-ui, react-router-dom</p>
    </div>
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',fontWeight:'bold',fontSize:'20px',width:'100%'}}>
        <video  autoPlay loop width={300} onClick={() => window.open('https://todo-list-delta-bay.vercel.app/', '_blank')}>
    <source src="TodoList.mp4" type="video/mp4" />
    Sorry, your browser doesn't support videos.
</video>
<p style={{textAlign:'center'}}>ReactJS Hooks used like :
useState .</p>
<p style={{textAlign:'center'}}>React Redux Hooks used like :
useSelector, useDispatch .</p>
<p style={{textAlign:'center'}}>Libraries used : react,
material-ui, react-redux</p>
        
    </div>
    <div style={{display:'flex',alignItems:'center',flexDirection:'column',fontWeight:'bold',fontSize:'20px',width:'100%'}}>
        <video  autoPlay loop width={300} onClick={() => window.open('https://tic-tac-nine.vercel.app/', '_blank')}>
    <source src="Tic-tac-toe.mp4" type="video/mp4" />
    Sorry, your browser doesn't support videos.
</video>
<p style={{textAlign:'center'}}>CSS Animations used like :
@keyframes, animation .</p>
<p style={{textAlign:'center'}}>ReactJS Hooks used like :
useSate, useEffect.</p>
<p style={{textAlign:'center'}}>Libraries used : react,
material-ui</p>
    </div>
    </div>
  )
}
