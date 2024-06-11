const Item = () => {
  return (
    <>
      <div className="font-JetBrains w-60 m-1 mt-4 shadow-md">
        <div className="bg-[url('./assets/macky_1.png')] bg-fill bg-center w-60 h-60 bg-gray-200 flex items-end p-2">
          <div className="bg-[#C1FF72] px-4 py-2 text-xs font-bold">
            LIMITED STOCK!
          </div>
        </div>
        <div className="w-60 h-36 bg-[#F1FFED] px-3 flex flex-col justify-evenly">
          <div className="text-lg">HELLO WORLD TSHIRT</div>
          <div className="bg-purple-400 flex justify-center w-1/2 text-white text-xs shadow-m">
            <div>MACKYS TROVE</div>
          </div>
          <div className="text-2xl text-orange-400 mt-2">₱400.00</div>
        </div>
      </div>
    </>
  );
};

const Items = () => {
  return (
    <>
      {/* <div className="flex justify-left flex-wrap ml-36"> */}
      <div className="grid grid-cols-4 px-56 py-1 justify-center">
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
        <Item></Item>
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
