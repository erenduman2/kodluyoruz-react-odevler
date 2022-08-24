import './App.css';
import EmojiResult from './components/Emoji/EmojiResult';
import Header from './components/Header';
import { EmojiProvider } from './context/EmojiContext';

function App() {
  return (
    <div className="App">
      <EmojiProvider>
        <Header />
        <EmojiResult />
      </EmojiProvider>
    </div>
  );
}

export default App;
