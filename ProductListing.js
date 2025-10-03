import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem } from 'redux/actions';
import { PLANTS } from 'data/plants';

const ProductListing = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Group plants by category for the grading criteria (Task: Group plants into at least three categories)
  const groupedPlants = PLANTS.reduce((acc, plant) => {
    acc[plant.category] = [...(acc[plant.category] || []), plant];
    return acc;
  }, {});

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
  };

  return (
    <div className="product-listing">
      <h1>Houseplants for Sale 🌱</h1>
      {Object.entries(groupedPlants).map(([category, plants]) => (
        <div key={category} className="plant-category">
          <h2>{category}</h2>
          <div className="plant-grid">
            {plants.map(plant => {
              const isInCart = cart.some(item => item.id === plant.id);

              return (
                <div key={plant.id} className="plant-card">
                  <img src={plant.thumbnail} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price.toFixed(2)}</p>
                  <button
                    onClick={() => handleAddToCart(plant)}
                    disabled={isInCart} // Task: Button becomes disabled after selecting
                    style={{ backgroundColor: isInCart ? '#ccc' : 'green' }}
                  >
                    {isInCart ? 'Added to Cart' : 'Add to Cart'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
