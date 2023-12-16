import React from 'react'
import { useState } from 'react'
import '../App.css'
import Header from '../Components/Header';
import History from '../Components/History';

const API_KEY = "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"; // secure -> environment variable

var history_array_question = new Array();
var history_array_answer = new Array();

function Legal() {

    const [query, setquery] = useState("");
    const [legalResponse, setlegalResponse] = useState(""); 
    const [history, setHistory] = useState(false); 

    async function callOpenAIAPI() {

      const APIBody = {
        "model": "text-davinci-003",
        "prompt": "Act as a Indian lawyer any answer " + query,
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
        setlegalResponse(data.choices[0].text.trim()); 
      
        
      history_array_question.push(query);
      history_array_answer.push(legalResponse);
      console.log(history_array_answer);
      console.log(history_array_question);
        
      });

      
 
    }


  return (
    <div>
      <Header></Header>
      <div className="bg-gray-200 flex flex-col justify-center items-center  h-[95vh]">
        <div className=" py-6 sm:py-8 lg:py-12 ">
          <div>
            <textarea
              className="rounded-md w-full border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-gray-300 transition duration-100 focus:ring"
              onChange={(e) => setquery(e.target.value)}
              placeholder="Tell us your situation..."
              cols={50}
              rows={10}
            />
          </div>

          <button
            className="w-[100%] inline-block rounded-lg bg-yellow-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-yellow-300 transition duration-100 hover:bg-yellow-600 focus-visible:ring active:bg-gray-700 md:text-base"
            onClick={callOpenAIAPI}
          >
            Get The legalResponse From LegalSeva
          </button>
        </div>

        {history && (
          <div className="absolute top-10 right-0 ">
            <div className="bg-gray-100 h-[100vh]  w-[20vw]">
              <h4 className="font-bold p-2 "> History </h4>
              <div>
                {history_array_question.map(
                  (item) => (
                    <p className='text-sm bg-gray-300 p-2 mt-1 '>{item}</p>
                  )
                )}
              </div>
            </div>
          </div>
        )}

        <button
          onClick={() => setHistory(!history)}
          className="  absolute top-12 right-1  inline-block rounded-lg bg-yellow-500 px-4 py-1 text-center text-sm font-semibold text-white outline-none ring-yellow-300 transition duration-100 hover:bg-yellow-600 focus-visible:ring active:bg-gray-700 md:text-base"
        >
          {history ? "close" : "view History"}
        </button>

        <div className="w-2/4 justify-center items-center ">
          {legalResponse !== "" ? (
            <div className="bg-white p-4 rounded-sm shadow-sm">
              Legal Response: {legalResponse}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Legal