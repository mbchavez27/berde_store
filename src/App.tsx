import NavBar from "./components/navbar";
import Store from "./components/store";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Store></Store>
      <div className="p-12 font-JetBrains">
        <div className="bg-[image:var(https://m.media-amazon.com/images/I/615nmPRVHDL._AC_SL1500_.jpg)] w-80 h-80 bg-gray-200 flex items-end p-4">
          <div className="bg-green-400 px-6 py-2">LIMITED STOCK!</div>
        </div>
        <div className="w-80 h-36 bg-green-200 p-3"></div>
      </div>
    </>
  );
}

export default App;
