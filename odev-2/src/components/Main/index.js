import {useState} from 'react'
import SectionFooter from "./SectionFooter";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

function Main() {
  
  const [list, setList] = useState([]);
  const [isCompleted, setIsCompleted] = useState([]);
  const [count, setCount] = useState(0);
  const [showStatus, setShowStatus] = useState("All");
  const [changedList, setChangedList] = useState([]);



  return (
<div>
  <section className="todoapp">
          <Header list={list} 
          setList={setList}  
          isCompleted={isCompleted} 
          setIsCompleted={setIsCompleted} 
          count= {count}
          setCount= {setCount} 
          />
          <Section 
          list={list} 
          setList={setList}
          isCompleted={isCompleted} 
          setIsCompleted={setIsCompleted}
          count= {count}
          setCount= {setCount}
          showStatus = {showStatus} 
          setShowStatus = {setShowStatus}
          changedList = {changedList}
          />
          <SectionFooter
          count= {count}
          setCount= {setCount}
          list={list}
          setList={setList}
          showStatus = {showStatus} 
          setShowStatus = {setShowStatus}
          setChangedList = {setChangedList}
          />
      </section>
      <Footer/>
</div>
  )
}

export default Main
  