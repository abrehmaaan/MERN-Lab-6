import './App.css';
import Title from "./components/Title";
import Button from "./components/Button";
import CartButton from "./components/CartButton";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="App">
      <Title title="Shopping Cart" />
      <Button message="Click me" />
      <CartButton />
      <Calculator />
    </div>
  );
}

export default App;
