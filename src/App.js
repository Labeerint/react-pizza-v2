import './scss/app.scss';
import Header from './components/Header';
import Sort from './components/Sort';
import Categories from './components/Categories';
import PizzaBlock from './components/PizzaBlock';
import Skeleton from './components/PizzaBlock/Skeleton';
import { useEffect, useState } from 'react';


function App() {
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
        <div className="App">
            <div className="wrapper">
                <Header />
                <div className="content">
                    <div className="container">
                        <div className="content__top">
                            <Categories />
                            <Sort />
                        </div>
                        <h2 className="content__title">Все пиццы</h2>
                        <div className="content__items">
                            {isLoading ?
                              [...new Array(9)].map((_, i) => <Skeleton key={i}/>)
                              :
                              items.map((obj) => (
                                <PizzaBlock key={obj.id} {...obj} />))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
