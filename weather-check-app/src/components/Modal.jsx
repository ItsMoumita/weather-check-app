import { RxCross2 } from "react-icons/rx";



const Modal = ({ onClose }) => {
    //  const [close, setClose] = useState(false)
    console.log({ onClose });

    return (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-gray-600/30 bg-blur">
            <div className="w-md h-[40vh] bg-gray-100 shadow-2xl flex items-start justify-between p-4">
                <h1 className="text-2xl">This is modal</h1>

                <button onClick={onClose} className="text-2xl font-bold p-2 bg-gray-300/60 rounded-full">
                    <RxCross2 />
                </button>
            </div>
        </div>
    );
};

export default Modal;