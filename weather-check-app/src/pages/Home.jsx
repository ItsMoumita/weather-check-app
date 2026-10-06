import { useState } from "react";
import Modal from "../components/Modal";

const Home = () => {
    const [cliked, setClicked] = useState(false);
    // console.log(cliked);
    return (
        <div className=" text-center">
            <h1 className="text-6xl text-blue-300 font-extrabold">Check <span className="text-blue-400">Weather</span></h1>
            <p className="text-xl text-gray-300 my-5">Check your weather now</p>
            <button onClick={() => { setClicked(true) }} className="btn px-5 py-2 text-lg font-medium bg-blue-500 text-gray-100 rounded-2xl hover:scale-105 transition-all delay-100">Check Weather</button>

            {cliked && <Modal onClose={() => setClicked(false)}></Modal>}


        </div>
    );
};

export default Home;