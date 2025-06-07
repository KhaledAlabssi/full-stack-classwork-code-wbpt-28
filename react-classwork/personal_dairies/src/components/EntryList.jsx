import React, { useState } from "react";
import Modal from "./Modal";

export default function EntryList({ dairies }) {
  const [choosedDairy, setChoosedDairy] = useState();
  const [isModal, setIsModal] = useState(false);

  function modalHandler(obj) {
    console.log(obj);
    
    setChoosedDairy(obj);
    setIsModal(true);

    document.getElementById("my_modal_5").showModal();
  }
  return (
    <div>
      {dairies?.map((i) => (
        <p>
          {i.title}
          <button onClick={() => modalHandler(i)}>Show more</button>
        </p>
      ))}

      <Modal dairy={choosedDairy}/>
    </div>
  );
}
