import React,{useState} from 'react';
import AddIcon from '../node_modules/@material-ui/icons/Add';
import IconButton from '../node_modules/@material-ui/core/IconButton';
import './index.css';
import Todo from './Todo';


const App = () => {
const [Items,Set] = useState("");
const [Itemarr,Setarr] = useState([]);
const Lists = (event) => {
  Set(event.target.value);
};
const Adds = () => {
  Setarr((Old) => {
return [...Old,Items];
  });
  Set("");
};
const delItem = (id) => {
  Setarr((Old) => {
    return Old.filter((arrI,inde) => {
return inde!==id;
    });
      });
};
  return(  
    <>
    <div className="main">
      <div className="center">
        <h1> ToDo List</h1>
        <br />
        <input type="text" placeholder="Add items to list" value={Items} onChange={Lists}/>
              <IconButton aria-label="delete" onClick={Adds}>
          <AddIcon fontSize="large" />
        </IconButton>
        
        <ol>
        {
          Itemarr.map((Ival,ind) => {
            return <Todo text={Ival} key={ind} id={ind} onsel={delItem} />;
          })
        }
        </ol>
      </div>
    </div>
    </>
       ); 
  }

export default App;