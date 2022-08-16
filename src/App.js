import ThemeProvider from 'react-bootstrap/esm/ThemeProvider';
import { useRef, useState } from 'react';
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";

function App() {
  const [plans, setPlans] = useState([]);
  const [plan, setPlan] = useState('');
  const ref = useRef(null);

  const newPlan = () => {
    
    if (plan !== '') {
      setPlans(prevPlans => {
        return [...prevPlans, plan];
      });
      ref.current.value = null;
      
    } else {
      alert('please fill the field')
    }
  }

  const handleDeleteTasks = () => {
    setPlans([]);
  }

  const handleDelete = (i) => {
    setPlans(plans => plans.filter((_, index) => index !== i));
  }

  return (
    <ThemeProvider>
      <div className="App">
        <div className="form">
          <h2>Todo App</h2>
          <div className="d-flex flex-row">
            <input type="text" className='form-control' ref={ref} onChange={(e) => { setPlan(e.target.value) }} />
            <button type="button" className="btn btn-primary ms-2" onClick={newPlan}>
              <AiOutlinePlus />
            </button>
          </div>
          <div className='d-flex flex-column'>
            {
              plans.length !== 0 ? 
              (
                plans.map((plan, i) => {
                  return (
                    <div key={i} className="d-flex flex-row align-items-baseline">
                      <p className='plan'>{ plan }</p>
                      <button type="button" className="btn btn-danger ms-1" onClick={() => handleDelete(i)}>
                        <AiOutlineDelete/> 
                      </button>
                    </div>
                  )
                })
              ) : 
              (
                <p className='no-plan-text'>There is no plan yet!</p>
              )
            }
          </div>
          <div className="d-flex flex-row align-items-baseline justify-content-between align-self-end w100 mt-2">
            <p>You have { plans.length } pending tasks!</p>
            <button type="button" className="btn btn-secondary ms-2" onClick={handleDeleteTasks}>Clear All</button>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
