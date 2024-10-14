import { useState } from 'react'
import Item from './Item';

function PackingList({ items, onCheckClick, onDeleteItem, onClear }) {
    const [sortBy, setSortBy] = useState("input");

    let sortedItems;
    if (sortBy === "input") sortedItems = items;
    if (sortBy === "packed") {
        sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));
    }
    if (sortBy === "description") {
        sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));
    }


    return (
        <div className="list">
            <ul>
                {sortedItems.map((i) => (
                    <Item
                        onDeleteItem={onDeleteItem}
                        onCheckClick={onCheckClick}
                        item={i}
                        key={i.id}
                    />
                ))}
            </ul>
            <div className="actions">
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="input">Sort by input order</option>
                    <option value="packed">Sort by packed status</option>
                    <option value="description">Sort by description</option>
                </select>
                <button className='delete' onClick={onClear}>clear list</button>
            </div>
        </div>
    );
}

export default PackingList