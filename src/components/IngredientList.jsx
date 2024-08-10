// // src/components/IngredientList.jsx
// const IngredientList = (props) => {
//     return <ul>// map through props.ingredients</ul>;
//   };
  
//   export default IngredientList;

  // src/components/IngredientList.jsx

const IngredientList = ({ ingredients, addToBurger }) => {
    return (
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => addToBurger(ingredient)}>➕</button>
          </li>
        ))}
      </ul>
    );
  };
  
  export default IngredientList;