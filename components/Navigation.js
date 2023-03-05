import React, { useState } from "react";

const Navigation = () => {
  const Menus = [
    { name: "Home"},
    { name: "Profile"},
    { name: "Message"},
    { name: "Photos"},
    { name: "Settings"},
  ];

  const [active, setActive] = useState(0);

  return (
    <div className="bg-white h-18 rounded-full px-4">
      <ul className="flex relative">
        {Menus.map((menu, i) => (
          <li key={i} className="w-20">
            <a
              className="flex flex-col text-center p-5 cursor-pointer px-4"
              onClick={() => setActive(i)}
            >
               <span
                className={` ${
                  active === i
                    ? " duration-700 opacity-100 font-bold"
                    : "opacity-40"
                } `}
              >
                {menu.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;