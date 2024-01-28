import contactData from "./data/contacts.json";

function App() {
  // const { id, brand, name, label, desc, imgUrl } = contactData.items[0];

  return contactData.items?.map((data) => {
    const { id, brand, name, label, desc, imgUrl } = data;

    return (
      <div
        key={id}
        className="detail-product-text w-[1050px] mx-auto pt-40pxr pb-76pxr "
      >
        <picture className="pic flex justify-center pb-76pxr">
          <img src={`/image/${imgUrl}.png`} alt="" />
        </picture>
        <h2 className="text-28pxr font-semibold flex justify-center">
          {label}
        </h2>
        <h3 className="pb-36pxr text-50pxr font-normal text-gray-800 flex justify-center">
          {brand}
          {name}
        </h3>
        <p className="w-[1050px] border-t pt-28pxr text-16pxr font-normal flex justify-center">
          {desc}
        </p>
      </div>
    );
  });
}

export default App;
