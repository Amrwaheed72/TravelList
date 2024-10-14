import { useState } from 'react'
import Form from './Components/Form'
import Logo from './Components/Logo'
import PackingList from './Components/PackingList'
import Stats from './Components/Stats'

export default function App() {

  const [items, setItems] = useState([]);


  function handleAddItme(item) {
    setItems(items => [...items, item])
  }

  function deleteItems(id) {
    setItems(items => items.filter(item => item.id !== id)
    )
  }

  function handleCheckClick(id) {
    setItems(items => items.map(item => item.id === id ?
      {
        ...item,
        packed: !item.packed
      } : item
    )
    )
  }

  function handleClearAll() {
    const confirmed = window.confirm('are you sure you want to delete ?')

    if (confirmed) setItems([])
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItme} />
      <PackingList onCheckClick={handleCheckClick} items={items} onDeleteItem={deleteItems} onClear={handleClearAll} />
      <Stats items={items} />
    </div>
  )
}
