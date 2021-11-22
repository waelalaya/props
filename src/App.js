import Profile from './profile/Profile';
import './App.css';

function App() {
  let fullName = "Wael Alaya"
  let bio = 24
  let profession = "developer student"

  let handleName=(name)=>{
  alert(name)
  }

  return (
    <div>
      <Profile name={fullName} age={bio} pro={profession} alrt={handleName} />

    </div>

  );
}


export default App;
