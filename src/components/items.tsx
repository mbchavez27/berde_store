const Item = () => {
  return (
    <>
      <div className="font-JetBrains w-60 m-1 mt-4 drop-shadow-2xl">
        <div className="bg-[url('./assets/macky_1.png')] bg-fill bg-center w-72 h-60 bg-gray-200 flex items-end p-2">
          <div className="bg-[#C1FF72] px-4 py-2 text-xs font-bold">
            LIMITED STOCK!
          </div>
        </div>
        <div className="w-72 h-30 bg-[#FFFFFF] px-3 flex flex-col">
          <div className="text-lg mt-2">HELLO WORLD TSHIRT</div>
          <div className="bg-purple-400 flex justify-center w-1/2 text-white text-xs shadow-m mt-1">
            <div>MACKYS TROVE</div>
          </div>
          <div className="text-2xl text-orange-400 mt-2 pb-2">₱400.00</div>
        </div>
      </div>
    </>
  );
};

const Items = () => {
  return (
    <>
      {/* <div className="flex justify-left flex-wrap ml-36"> */}
      <div className="grid grid-cols-4 px-72 py-1 pb-8 justify-center">
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
