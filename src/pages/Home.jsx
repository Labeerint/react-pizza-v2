import React, { useEffect, useState } from 'react';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home() {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://6293860b089f87a57ac1b955.mockapi.io/items')
        .then(res => res.json())
        .then(res => {
            setItems(res)
            setIsLoading(false)
        })
    }, [])

    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(9)].map((_, i) => <Skeleton key={i} />)
                    : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
        </>
    );
}

export default Home;
