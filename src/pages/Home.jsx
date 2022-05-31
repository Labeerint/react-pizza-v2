import React, { useEffect, useState } from 'react';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';

function Home({searchValue, setSearchValue}) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortType, setSortType] = useState({ name: 'популярности', value: 'popularity' });
    const [activeCategory, setActiveCategory] = React.useState(0);
    const category = activeCategory > 0 ? 'category=' + activeCategory : '';
    const search = searchValue ? '&search=' + searchValue : ''

    useEffect(() => {
        setIsLoading(true);
        fetch(
            `https://6293860b089f87a57ac1b955.mockapi.io/items?${category}${search}&sortBy=${sortType.value}&order=desc`,
        )
            .then((res) => res.json())
            .then((res) => {
                setItems(res);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [sortType, activeCategory, searchValue]);

    return (
        <>
            <div className="content__top">
                <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <Sort sortType={sortType} setSortType={(value) => setSortType(value)} />
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
