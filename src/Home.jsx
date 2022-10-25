import React from "react";
import "./index.css";

function Home() {
  /*const [count, setCount] = useState(0);
   const handleClick = () => {
        setCount(count + 1);
   }
   const handleReset = () =>{
     setCount(0);
   }
*/

  return (
    <div>
      <>
        <div className="container1">
          <h1 className="heading1">
            Hello!! You can start your quiz here
            <button className="quizstart">
              <a className="link" href="/quiz">
                Start Quiz
              </a>
            </button>
          </h1>
        </div>
      </>
    </div>
  );
}

export default Home;
