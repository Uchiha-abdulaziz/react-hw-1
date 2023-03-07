import Header from "./components/header/header";
import Profile from "./components/Profile";
import user from "./user.json";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Profile {...user} />
    </div>
  );
}
export default App;
