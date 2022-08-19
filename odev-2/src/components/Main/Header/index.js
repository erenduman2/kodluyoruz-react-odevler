import {useState} from 'react'

function Header({list, setList, count, setCount}) {

  const [newElement, setNewElement] = useState("");
  
  const formSubmit = (e) => {
	e.preventDefault();
	setList([...list, {todo: newElement, checked: false}]);
	setCount(count + 1)
	setNewElement("");
	
  }

  return (
	<header className="header">
		<h1>todos</h1>
		<form onSubmit={formSubmit}>
			<input value={newElement} onChange={(e) => setNewElement(e.target.value)} className="new-todo" placeholder="What needs to be done?" autoFocus />
		</form>
	</header>
  )
}

export default Header
