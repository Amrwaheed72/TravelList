function Stats({ items }) {

    if (items.length === 0) {
        return (
            <footer className='stats'>
                <em>
                    Start adding some items That You will user in this holiday 🚀
                </em>
            </footer>
        )
    }

    const itemNumber = items.length
    const itemPacked = items.filter(item => item.packed).length
    const itemPercent = Math.round((itemPacked / itemNumber) * 100)
    return (
        <footer className="stats">
            <em>
                {itemPercent === 100 ?
                    `You Are Ready To Go ✈️`
                    :
                    `🎒You Have ${itemNumber} on your list, and you already packed ${itemPacked} (${itemPercent}%)`
                }
            </em>
        </footer>
    )
}

export default Stats