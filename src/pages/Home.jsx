import React, { useEffect, useState } from 'react';
import Sort from '../components/Sort';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Home({searchValue, setSearchValue}) {
    const [items, setItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const sortType = useSelector(state => state.sortReducer.sortType)
    const [activeCategory, setActiveCategory] = React.useState(0);
    const category = activeCategory > 0 ? '&category=' + activeCategory : '';
    const search = searchValue ? '&search=' + searchValue : ''
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        setIsLoading(true);
        axios.get(
            `https://6293860b089f87a57ac1b955.mockapi.io/items?page=${currentPage}&limit=9${category}${search}&sortBy=${sortType.value}&order=desc`,
        )
            .then((res) => {
                setItems(res.data);
                setIsLoading(false);
            });
        window.scrollTo(0, 0);
    }, [sortType, activeCategory, searchValue, currentPage]);

    return (
        <>
            <div className="content__top">
                <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(9)].map((_, i) => <Skeleton key={i} />)
                    : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </>
    );
}

export default Home;
