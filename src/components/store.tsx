const Store = () => {
  return (
    <>
      <div className="w-full h-72 bg-[url('./assets/lscscanvas.png')] bg-cover bg-center flex items-end justify-around p-4 text-green-800 font-JetBrains">
        <div className="flex items-center bg-[#FFFFFF] p-1 rounded-lg text-sm">
          <img
            src="https://researchfair.upalchemes.org/wp-content/uploads/LSCS-1.png"
            alt=""
            className="h-16 object-cover py-2"
          />
          <div className="text-xs font-bold py-2">
            <div>La Salle</div>
            <div>Computer Society</div>
          </div>
          <div className="flex items-center mx-3 text-white">
            <div className="bg-green-800 mx-1 rounded-md p-2 shadow-md">
              CSO
            </div>
            <div className="bg-green-800 mx-1 rounded-md p-2 shadow-md">
              CCS
            </div>
            <div className="bg-blue-800 mx-1 rounded-md p-2 shadow-md">
              BETA
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-5 text-green-800 font-bold ml-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-center bg-[#FFFFFF] p-2 rounded-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-6 mx-3"
          >
            <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
          </svg>
          {">"}
          <span className="mx-3">Checkout</span>
          <span className="mx-1 bg-red-500 text-white px-1 py-0.5 rounded-lg">
            7
          </span>
        </div>
      </div>
    </>
  );
};

export default Store;
