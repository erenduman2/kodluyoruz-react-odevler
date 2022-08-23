import './App.css';
import Weather from "./components/Weather";
import SearchSection from "./components/SearchSection";
import { WeatherProvider } from "./context/WeatherContext";

function App() {
  return (
    <div className="App">
      
      <WeatherProvider>
        <SearchSection/>
        <Weather/>
      </WeatherProvider>
    </div>
  );
}

export default App;
