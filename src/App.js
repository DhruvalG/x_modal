import "./App.css";
import { useState } from "react";
import Xmodal from "./Components/Xmodal";

function App() {
    let [openModal, setOpenModal] = useState(false);
    let [openModalBackground, setOpenModalBackground] = useState(false);
    let modal = {
        height: "100vh",
        backdropFilter: openModalBackground ? "blur(1px)" : "none",
        transition: "backdrop-filter 0.3s ease",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    };

    return (
        <div style={modal}>
            <h1>User Details Modal</h1>
            <button
                className="modalTrigger"
                onClick={() => {
                  setOpenModal(true);
                  setOpenModalBackground(true);
                }}
            >
              Open Form
            </button>
            {openModal && (
                <Xmodal
                    setOpenModal={setOpenModal}
                    setOpenModalBackground={setOpenModalBackground}
                />
            )}
        </div>
    );
}

export default App;
