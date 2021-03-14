import Layout from './components/Layout/Layout'
import ShoppingList from './containers/ShoppingList/ShoppingList'

function App() {
  return (
    <div className="App">
      <Layout>
        <ShoppingList />
      </Layout>
    </div>
  );
}

export default App;
