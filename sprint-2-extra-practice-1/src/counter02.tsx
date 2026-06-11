import {useEffect, useState} from 'react';

 export function myCounter () {
     let [counter, setCounter] = useState<number>(0);

     useEffect(() => {
         let getLocal = localStorage.getItem('counterKey')
         if (getLocal) {
             let newGetLocal = JSON.parse(getLocal)
             setCounter(newGetLocal);
         }
     }, []);

     useEffect(() => {
         localStorage.setItem('counterKey', JSON.stringify(counter))
     }, [counter]);



     const incrementHandler = () => {
         setCounter(counter + 1);
     }
     // const saveHandler = () => {
     //    localStorage.setItem('counterKey', JSON.stringify(counter))
     // }

 //     const clearHandler = () => {
 //         localStorage.clear()
 //         setCounter(0);
 //     }
 //


      return (
          <div>
              <h1>{counter}</h1>
              <button onClick={()=> {incrementHandler()}}>inc</button>
              {/*<button onClick={()=> {saveHandler()}}>save</button>*/}
              {/*<button onClick={()=> {getHandler()}}>get</button>*/}
              {/*<button onClick={()=> {clearHandler()}}>clear</button>*/}
          </div>
      );
 }
