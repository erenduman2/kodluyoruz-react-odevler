import React from 'react'
export default TodoList

function TodoList({list, setList, count, setCount, changedList}) {

	const changeAll = () => {
	let arr = [...list];
	let state = arr.every((element) => {
		return element.checked == true;
	})
	arr.forEach((element) => {
		element.checked = !state;
	})
	setList(arr);
}
  const toggleChecked = (index) => {
	let arr = [...list];
	arr[index].checked = !arr[index].checked;
	setList(arr);
  }

  const deleteToDo = (index) => {
	let arr = [...list];
	arr = [...arr.slice(0,index), ...arr.slice(index+1)];
	setList(arr);
	setCount(count - 1)
  }
  return (
	
	<section className="main">
		<input id='toggle-all' className="toggle-all" type="checkbox" onChange={() => changeAll()}/>
		<label htmlFor="toggle-all">
			Mark all as complete
		</label>

		<ul className="todo-list">
			{changedList.map((element, index) => {

				return <li key={index} className={element.checked ? "completed" : ""} >
				<div className="view">
					<input type="checkbox" className="toggle" checked={element.checked} onChange={() => {
						toggleChecked(index);
					} }>
					</input>
					<label>{element.todo}</label>
					<button className="destroy" onClick={() => deleteToDo(index)}></button>
				</div>
				</li>
			})}
		</ul>
	</section>

  )
}


