import React from 'react';

function Categories() {
    const [activeCategory, setActiveCategory] = React.useState(0)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    return (
        <div className="categories">
        <ul>
            {
                categories.map((value, i) => (
                    <li onClick={() => setActiveCategory(i)} className={activeCategory === i ? 'active' : ''}>{value}</li>
                ))
            }
        </ul>
        </div>
    );
}

export default Categories;
