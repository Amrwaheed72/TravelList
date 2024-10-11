import {useState} from 'react'

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

function Logo() {
  return (
    <h1>🌴 Far Away 🎒</h1>
  )
}
function Form() {
const [description,setDescription]=useState('')
const [quantity,setQuantity]=useState(1);

  function handleSubmit(event){
    event.preventDefault()

    const newItem= {description,quantity,packed:false,id:Date.now()}
    console.log(newItem)
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for Your😍trip?</h3>
      <select value={quantity} onChange={e=>setQuantity(Number(e.target.value))}>
        {Array.from({length:20},(_,i)=>i+1).map(num=><option value={num} key={num}>{num}</option>) }
      </select>
      <input type='text' placeholder='item....' value={description} onChange={e=>setDescription(e.target.value)} />
      <button>Add</button>

    </form>
  )
}
function PackingList() {
  return (
    <div className="list">

      <ul >
        {
          initialItems.map(i => <Item item={i} key={i.id} />)
        }
      </ul>
    </div>

  )
}
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {item.quantity}  {item.description}
        <button>❌</button>
      </span>
    </li>
  )
}
function Stats() {
  return (
    <footer className="stats">
      <em>
        🎒You Have 2 on your list, and you already packed 3
      </em>
    </footer>
  )
}