import React  from 'react';
import useFetch from '../utils/useFetch';
import '../../css/main.min.css';

function Card() {
  const { data, send ,  error , requotes } = useFetch("https://api.adviceslip.com/advice");
  
  if (send) {
     
    return  <span className="loader"></span> 
  }
  if (error) {
    console.log(error);
  }


  return (
    <React.Fragment>
      <div className="card--container">
        <div className="card--contents">
          <div className="card--title">
            <h3 className="advice-number">Advice #{data?.slip.id}</h3>
          </div>
          <div className="card-quotes">
            
           <h1 className="quotes-text">&quot;{data?.slip.advice}&quot;</h1>
            
          </div>
          <div className="card-design">
            <img src="pattern-divider-desktop.svg" alt="" />
          </div>
          <div className="card-button">
            <button onClick={requotes}>
               <img src="icon-dice.svg" alt="" /> 
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Card;
