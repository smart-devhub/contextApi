
import './App.css';
import Taskform from './components/Taskform';
import Tasklist from './components/Tasklist';
import Header from './components/Header';
import { Verification } from './components/Verification';
import TasklistContextProvider from './context/TasklistContext';


function App() {
  return (
    <TasklistContextProvider>
    <div className="container">
      <div className="app-wrapper">
        <Header />
        <div className="main">
          <Taskform/>
        <Tasklist/>
        </div>
        
      </div>
     
    </div>
    </TasklistContextProvider>
  );
}

export default App;
