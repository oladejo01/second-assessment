
import './App.css';
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';

function App() {
  return (
    <div className='wrapper'>
    <div className="App">
      {/* user input */}
    <div className='userInput'> <UserInput />
    </div>
     <div>
      {/* paragraphs */}
      <UserOutput/>
     <UserOutput/>
     <UserOutput/>
     <UserOutput/>
     <UserOutput/>
     <UserOutput/>
     <UserOutput/></div>
    </div>
    </div>
  );
}

export default App;


