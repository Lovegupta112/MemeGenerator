
import React ,{useEffect, useState} from 'react'
// import Image from './images/cat2.jpg';
import MemeGeneratorData from './MemeGeneratorData';

function Form2() {

const [meme,setMeme]=useState({
  topText:"",
  bottomText:"",
  randomImage:"http://i.imgflip.com/1bij.jpg"
}
);

const [allMemeImages,setAllMemeImages]=useState([]);

// const [memeImage,setMemeImage]=useState("http://i.imgflip.com/1bij.jpg");
// https://api.imgflip.com/get_memes


// useEffect(()=>{
//   fetch("https://api.imgflip.com/get_memes")
//   .then((response)=>response.json())
//   .then((respData)=>{
//     console.log(respData.data.memes);
//     setAllMemeImages(respData.data.memes);
//   })
//   return function (){

//   }
// },[])
useEffect(()=>{
  async function getMemes(){
  const response= await fetch("https://api.imgflip.com/get_memes");
  const respData= await response.json();
console.log(respData.data.memes);
    setAllMemeImages(respData.data.memes);
}
  getMemes();
},[])

// console.log(MemeGeneratorData.data.memes);


function getMemeImage(event){
event.preventDefault();
// console.log(event);
console.log(allMemeImages);
  const random=Math.floor(Math.random()*allMemeImages.length);
  const url =allMemeImages[random].url;

  // setMemeImage(url)
  setMeme((prevMeme)=>({...prevMeme,
    randomImage:url,
  }));

  console.log(meme);
}

// function handleClick(e){
//   e.preventDefault();
//   console.log(" I was clicked");
// }

function imageText(){
  console.log('Image is clicked');
}

function handleChange(event){
// console.log(event.target.value);
console.log(event.target.name);
setMeme((prevMeme)=>({
  ...prevMeme,
  [event.target.name]:event.target.value
}));
console.log(meme);
}



  return (
    <div className='form-section'>
<form>
{/* <input type='text' className='input1' placeholder='Top-text'     name='toptext' onChange={handleChange}/>
<input type='text' className='input2' placeholder='Bottom-text' name='bottomtext' onChange={handleChange}/>  */}
<input type='text' className='input1' placeholder='Top-text'     name='topText' onChange={handleChange} value={meme.topText}/>
<input type='text' className='input2' placeholder='Bottom-text' name='bottomText' onChange={handleChange} value={meme.bottomText}/> 

<button type='submit' className='btn'onClick={getMemeImage}>Get a new meme Image 🖼</button>
</form>
<div className='meme-div'>
            {/* <img src={memeImage} className='meme-image' onMouseOver={imageText}/> */}
            <img src={meme.randomImage} className='meme-image' onMouseOver={imageText}/>
            <h3 className='toptext'>{meme.topText}</h3>
            <h3 className='bottomtext'>{meme.bottomText}</h3>
        </div>
</div>
  )
}

export default Form2;