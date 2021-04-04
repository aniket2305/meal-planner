import Header from '../Header/Header';
import ShoppingList from '../ShoppingList/ShoppingList';
import Recipes from "../Recipes/Recipes";

function App () {
    return (
       <div className="page-container">
            <Header />
            <div className="container">
                <ShoppingList />
                <Recipes />
            </div>
       </div>  
    )
}

export default App;