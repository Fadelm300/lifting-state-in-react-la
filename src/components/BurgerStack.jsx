// // `src/components/BurgerStack.jsx`
// const BurgerStack = (props) => {
//     return <ul>// map through props.ingredients</ul>;
//   };
  
//   export default BurgerStack;


const BurgerStack = ({ ingredients, removeFromBurger }) => {
    return (
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index} style={{ backgroundColor: ingredient.color }}>
            {ingredient.name}
            <button onClick={() => removeFromBurger(index)}>❌</button>
          </li>
        ))}
      </ul>
    );
  };
  export default BurgerStack;