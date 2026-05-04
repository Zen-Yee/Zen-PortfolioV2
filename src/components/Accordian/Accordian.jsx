import React, { useState } from "react";
import AccordianItem from "./AccordianItem";

function Accordian({ items, defaultOpen }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen ?? items[0].id);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {items.map((item) => (
        <AccordianItem
          key={item.id}
          company={item.Name}
          position={item.Role}
          period={item.Period}
          responsibilities={item.Responsibilities}
          isOpen={openIndex === item.id}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}

export default Accordian;
