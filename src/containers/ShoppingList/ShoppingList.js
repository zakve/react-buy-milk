import React, { useState } from "react";

import List from "../../components/List/List";

const ShoppingList = () => {
    const [list, setList] = useState([
        { title: 'Fresh salad', count: 1 },
        { title: 'Norweigan Bacon', count: 1 },
        { title: 'Gouda', count: 1 },
        { title: 'Chicken legs', count: 2 }
    ])

    return (
        <>
            <List list={list} />
            <div>Controls</div>
        </>
    )
}

export default ShoppingList