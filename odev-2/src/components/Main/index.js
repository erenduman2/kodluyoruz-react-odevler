import {useState} from 'react'
import SectionFooter from "./SectionFooter";
import Header from "./Header";
import Section from "./Section";
import Footer from "./Footer";

function Main() {
  
  const [list, setList] = useState([]);
  const [count, setCount] = useState(0);
  const [showStatus, setShowStatus] = useState("All");
  const [changedList, setChangedList] = useState([]);



  return (
<div>
  <section className="todoapp">
          <Header list={list} 
          setList={setList}  
          count= {count}
          setCount= {setCount} 
          />
          <Section 
          list={list} 
          setList={setList}
          count= {count}
          setCount= {setCount}
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
  