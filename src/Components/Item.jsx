function Item({ item, onCheckClick, onDeleteItem }) {
    return (
        <li>
            <input
                type="checkbox"
                checked={item.packed}
                onChange={() => onCheckClick(item.id)}
            />
            <span style={item.packed ? { textDecoration: "line-through" } : {}}>
                {item.quantity} {item.description}
            </span>
            <button onClick={() => onDeleteItem(item.id)}>❌</button>
        </li>
    );
}
export default Item
