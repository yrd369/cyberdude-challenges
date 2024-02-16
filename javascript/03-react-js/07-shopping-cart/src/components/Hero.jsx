import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const data = [
    {
      id: 1,
      productName: "iphone",
      price: 500,
      quantity: 2,
      image:
        "https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png",
      color: "black",
    },
    {
      id: 2,
      productName: "macbook",
      price: 1000,
      quantity: 4,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpV0lR36O9ojJBjFKHbx2YZL9avq1djRTPU-5zZScJe-Oe4442k8ZUUXH9EuVjWNm82d0&usqp=CAU",
      color: "space grey",
    },
  ];
  const [cart, setCart] = useState(data);
  const handleDecrement = (cart_id) => {
    setCart((cart) =>
      cart.map((item) =>
        cart_id === item.id
          ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
          : item
      )
    );
  };
  const handleIncrement = (cart_id) => {
    setCart((cart) =>
      cart.map((item) =>
        cart_id === item.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };
  // const [price, setPrice] = useState();
  // setPrice(data.reduce((prevVal, currentVal) => {
  //   console.log(prevVal.price + currentVal.price);
  // }))
  const info = cart.map((val) => {
    return (
      <tr key={val.id} className="border-b-2 border-gray-200">
        <td className="p-5 flex items-center space-x-2 md:w-80">
          <img src={val.image} className="w-20" />
          <div>
            <p className="font-semibold">{val.productName}</p>
            <p className="text-sm">{val.color}</p>
          </div>
        </td>
        <td className="p-5">₹{val.price}</td>
        <td className="p-5">
          <tr className="bg-slate-100 rounded">
            <td>
              <button
                onClick={() => handleDecrement(val.id)}
                className="text-xl hover:bg-slate-200 p-2 rounded-lg"
              >
                -
              </button>
            </td>
            <td className="p-2">{val.quantity}</td>
            <td>
              <button
                onClick={() => handleIncrement(val.id)}
                className=" text-xl p-2 hover:bg-slate-200 rounded-lg"
              >
                +
              </button>
            </td>
          </tr>
        </td>
        <td className="p-5">₹{val.quantity * val.price}</td>
      </tr>
    );
  });
  return (
    <>
      <h1 className="text-center p-10 text-3xl font-semibold">Your Cart</h1>
      <div className="grid md:grid-cols-2 item-center md:ml-40">
        <table className="m-5 bg-slate-50">
          <thead>
            <tr className="border-b-2 border-gray-200">
              <th className="">Product</th>
              <th className="md:p-3">Price</th>
              <th className="p-3">Quantity</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>
          <tbody>{info}</tbody>
        </table>
        <div className="ml-20 m-5 bg-gray-200  w-72 h-60">
          <h1 className="font-semibold border-b-2 border-gray-300 p-5">
            Order Summary
          </h1>
          <div className="flex justify-between p-5">
            <p>Subtotal</p>
            <p>
              ₹
              {cart.reduce((prevVal, currentVal) => {
                return (
                  prevVal.quantity * prevVal.price +
                  currentVal.quantity * currentVal.price
                );
              })}
            </p>
          </div>
          <div className="flex justify-between px-5">
            <p>Shipping</p>
            <p>free</p>
          </div>
          <div className="flex justify-between p-3 px-5 mt-9 bg-gray-300 ">
            <p>Total</p>
            <p>
              ₹
              {cart.reduce((prevVal, currentVal) => {
                return (
                  prevVal.quantity * prevVal.price +
                  currentVal.quantity * currentVal.price
                );
              })}
            </p>
          </div>
          <button className="bg-green-600 text-white w-full px-3 py-2 mt-2 text-sm font-mono">
            CHECKOUT
          </button>
        </div>
      </div>
    </>
  );
};
export default Hero;
