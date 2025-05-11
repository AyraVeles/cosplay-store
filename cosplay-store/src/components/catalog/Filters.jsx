import React from 'react';

const Filters = () => {
  const categories = [
    'Костюмы',
    'Парики',
    'Аксессуары',
    'Обувь',
    'Реквизит'
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title">Фильтры</h5>
        
        <div className="mb-3">
          <label className="form-label">Категории</label>
          {categories.map(category => (
            <div key={category} className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id={`category-${category}`}
              />
              <label className="form-check-label" htmlFor={`category-${category}`}>
                {category}
              </label>
            </div>
          ))}
        </div>

        <div className="mb-3">
          <label className="form-label">Размер</label>
          <select className="form-select">
            <option value="">Все размеры</option>
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Цена</label>
          <div className="d-flex align-items-center">
            <input type="number" className="form-control me-2" placeholder="От" />
            <input type="number" className="form-control" placeholder="До" />
          </div>
        </div>

        <button className="btn btn-primary w-100">Применить</button>
        <button className="btn btn-outline-secondary w-100 mt-2">Сбросить</button>
      </div>
    </div>
  );
};

export default Filters;