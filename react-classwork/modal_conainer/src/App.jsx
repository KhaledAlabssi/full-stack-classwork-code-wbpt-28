import { useState } from "react";
import About from "./components/About";
import Pricing from "./components/Pricing";
import Modal from "./Modal";

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setmodalContent] = useState()


  function openModal (e) {

    setmodalContent(e)
    setModal(true)

  }

  function submitHandler (e) {
      // e.preventDefault()


    const date = new Date().toUTCString()
    localStorage.set("s", {title: "my daily", text: "sfdjthd ", imgUrl: "htpp", dt: date})

  }


  submitHandler()





  return (
    <main>
      <p>This is main...</p>
      {/* convert to state...  */}

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button className="btn" onClick={() => setModal(true)}>
        open modal
      </button>

      <button onClick={() => openModal(<Pricing/>)} className="btn block">

        Show Pricing
      </button>

      <button onClick={() => openModal(<About />)} className="btn block">

        Show About
      </button>

      {modal && (
        // <Modal setModal={setModal} content={modalContent}/>

        

        <Modal setModal={setModal} content={modalContent} >

          {modalContent}

          <fomr>

            <input type="text" name />
          </fomr>





        </Modal>
      )}

     
    </main>
  );
}

export default App;
