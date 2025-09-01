import React from 'react'
import { useState, useEffect } from 'react'
import "prismjs/themes/prism-tomorrow.css"
import prism from "prismjs"
import Markdown from "react-markdown"
import axios from "axios"
// import rehypeHighlight from "rehype-highlight"
// import "highlight.js/styles/github-dark.css"
import Editor from "react-simple-code-editor"
import "./App.css"

function App() {
  const [ code, setCode ] = useState(``)

  const [ review, setReview ] = useState(" ")

  useEffect(() => {
    prism.highlightAll();
  }, [])

  const reviewCode = async () => {
  try {
    const response = await axios.post("http://localhost:3000/ai/get-review", { code });
    setReview(response.data); // ✅ response is now defined
  } catch (error) {
    console.error(error);
  }
};


  return (
    <>
     <main>
      <div className="left">
        <div className="code">
          <Editor
            value= {code}
            onValueChange={code => setCode(code)}
            highlight={code => prism.highlight(code, prism.languages.javascript, "javascript")}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
              border: "1px solid #ddd",
              borderRadius: "5px",
              height: "100%",
              width: "100%"
            }}
            />
        </div>
        <div className="review" onClick={reviewCode}>Review</div>
      </div>
      <div className="right">
        <Markdown >
          {review}
        </Markdown>
      </div>
     </main>
    </> 
  )
}

export default App
