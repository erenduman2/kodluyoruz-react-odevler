import {useState, useEffect} from 'react'

function Footer({count, setCount, list, setList, showStatus, setShowStatus, setChangedList}) {

   const setSelecteds = (i) => {
	if(i == 1){
		setSelected1("selected");
		setSelected2("");
		setSelected3("");
	}
	if(i == 2){
		setSelected1("");
		setSelected2("selected");
		setSelected3("");
	}
	if(i == 3){
		setSelected1("");
		setSelected2("");
		setSelected3("selected");
	}
   }
  const [selected1, setSelected1] = useState("selected");
  const [selected2, setSelected2] = useState("");
  const [selected3, setSelected3] = useState("");
  
  const clearCompleted = () => {
	let arr = [...list];
	let tmpCount=0;
	arr = arr.filter((item) => {
		item.checked ? tmpCount++ : tmpCount += 0;
		return item.checked == false;
	})
	setCount(count - tmpCount);
	setList(arr);
  }

  useEffect(() => {
	if(showStatus == "All"){
		setChangedList(list);
	}
	else if(showStatus == "Active"){
		setChangedList(activeList);
	}
	else{
		setChangedList(completedList);
	}
  }, [list])

  const listBackUp = [...list];
  let activeList = list.filter(item => {
	return item.checked == false;
  });
  let completedList = list.filter(item => {
	return item.checked == true;
  });

  return (
	<footer className="footer">
		<span className="todo-count">
			<strong>{count}</strong>
			items left
		</span>

		<ul className="filters">
			<li>
				<a href="#/" className={selected1} onClick={(e) => {setSelecteds(1); setShowStatus("All"); setChangedList(list);}}>All</a>
			</li>
			<li>
				<a href="#/" className={selected2}  onClick={(e) => {setSelecteds(2); setShowStatus("Active"); setChangedList(activeList);}}>Active</a>
			</li>
			<li>
				<a href="#/" className={selected3} onClick={(e) => {setSelecteds(3); setShowStatus("Completed"); setChangedList(completedList);}}>Completed</a>
			</li>
		</ul>

		<button className="clear-completed" onClick={clearCompleted}>
			Clear completed
		</button>
	</footer>
  )
}

export default Footer