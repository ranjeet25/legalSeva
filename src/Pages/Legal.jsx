import React from 'react'
import { useState } from 'react'

import '../App.css'
import Header from '../assets/Components/Header';


const API_KEY = "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"; // secure -> environment variable

function Legal() {

    const [tweet, setTweet] = useState("");
    const [legalResponse, setlegalResponse] = useState(""); // "Negative" or "Positive"
  
    async function callOpenAIAPI() {
      console.log("Calling the OpenAI API");
  
      // For 0-10
      // What is the legalResponse of this tweet with a value between 0 and 10 (10 being its very positive)? 
  
      const APIBody = {
        "model": "text-davinci-003",
        "prompt": "answer " + tweet,
        "temperature": 0,
        "max_tokens": 60,
        "top_p": 1.0,
        "frequency_penalty": 0.0,
        "presence_penalty": 0.0
      }
  
      await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + API_KEY
        },
        body: JSON.stringify(APIBody)
      }).then((data) => {
        return data.json();
      }).then((data) => {
        console.log(data);
        setlegalResponse(data.choices[0].text.trim()); // Positive or negative
      });
    }


  return (
<div>
<Header></Header>
<div className="bg-gray-300 flex flex-col justify-center items-center  h-[100vh]">
<div className=" py-6 sm:py-8 lg:py-12 ">
    <div>
      <textarea
      className='rounded-md w-full border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-gray-300 transition duration-100 focus:ring'
        onChange={(e) => setTweet(e.target.value)}
        placeholder='Tell us your situation...'
        cols={50}
        rows={10}
      />
    </div>

    <button className='w-[100%] inline-block rounded-lg bg-yellow-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-yellow-300 transition duration-100 hover:bg-yellow-600 focus-visible:ring active:bg-gray-700 md:text-base' 
      onClick={callOpenAIAPI}>Get The legalResponse From OpenAI API</button>
</div>

<div >
    <div>
      
      {legalResponse !== "" ?
        <div className='bg-white' >Legal Response: {legalResponse}</div>  
        :
        null
      }
    </div>
</div>

</div>

    
</div>
  )
}

export default Legal