const Item = () => {
  return (
    <>
      <div className="p-12 font-JetBrains flex flex-col">
        <div className="bg-[url('./assets/macky_1.png')] bg-fill bg-center w-80 h-80 bg-gray-200 flex items-end p-4">
          <div className="bg-green-400 px-6 py-2">LIMITED STOCK!</div>
        </div>
        <div className="w-80 h-36 bg-green-200 p-3 flex flex-col justify-evenly">
          <div className="text-xl my-1">HELLO WORLD TSHIRT</div>
          <div className="bg-purple-400 flex justify-center w-1/2 text-white text-sm shadow-md my-1">
            <div>MACKYS TROVE</div>
          </div>
          <div className="text-3xl text-orange-400 my-1">₱400.00</div>
        </div>
      </div>
    </>
  );
};

const Items = () => {
  return (
    <>
      <div className="grid grid-cols-4 p-8">
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
      </div>
    </>
  );
};

export default Items;
