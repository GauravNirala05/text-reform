
import './App.css';
import Navbar from './components/navbar';
import TextArea from './components/textArea';
function App() {
  return (
    <>
     <Navbar title ="TEXT-My"/>
     <div className="container my-3">
      <TextArea/>
     </div>
    </>
  );
}

export default App;
