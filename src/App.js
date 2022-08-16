import ThemeProvider from 'react-bootstrap/esm/ThemeProvider';
import { useRef, useState } from 'react';
import { AiOutlinePlus, AiOutlineDelete } from "react-icons/ai";
import BrandExample from './components/BrandExample'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form2 from './components/Form2';
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const [plans, setPlans] = useState([]);
  const [plan, setPlan] = useState('');
  const ref = useRef(null);

  const notify = (message) => {

    toast.success(message, {
      position: toast.POSITION.BOTTOM_RIGHT
    });
  }

  const newPlan = () => {
    
    if (plan !== '') {
      setPlans(prevPlans => {
        return [...prevPlans, plan];
      });
      notify('Plan added successfully');
      ref.current.value = null;
      
    } else {
      alert('please fill the field')
    }
  }

  const handleDeleteTasks = () => {
    setPlans([]);
    notify('All the plans has been deleted.');
  }

  const handleDelete = (i) => {
    setPlans(plans => plans.filter((_, index) => index !== i));
    notify('Plan deleted successfully');
  }

  return (
    <ThemeProvider>
      <div className="App">
        <ToastContainer />
        <Router>
          <BrandExample />
          <Routes>
            <Route path='/' element={
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
            }></Route>
            <Route path='/signup' element={<Form2 />}></Route>
          </Routes>
        </Router>

        
      </div>
    </ThemeProvider>
  );
}

export default App;
