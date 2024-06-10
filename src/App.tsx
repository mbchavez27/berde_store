import NavBar from "./components/navbar";
import Store from "./components/store";
import Items from "./components/items";

function App() {
  return (
    <>
      <div className="bg-[#C5DBC0] h-screen">
        <NavBar></NavBar>
        <Store></Store>
        <Items></Items>
      </div>
    </>
  );
}

export default App;
