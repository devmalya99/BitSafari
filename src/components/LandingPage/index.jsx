
import "./style.css";
import gradient from "../../assets/gradient.png";
import iphone from "../../assets/iphone.png";
import { motion } from "framer-motion";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import ExploreBtn from "../common/ExploreBtn";

function MainComponent() {
  return (
    <div className="main-flex">
      <div className="info-landing">
        <motion.h1
          className="heading1 text-4xl mt-12 lg:text-9xl"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="heading2 lg:text-6xl mt-4  lg:mt-20"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.75, duration: 1 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text text-white mt-4 lg:mt-16 text-2xl lg:text-6xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.75 }}
        >
          Introducing Bitsafari
        </motion.p>
        <motion.div
          className="btn-flex mb-8 mt-8 "
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.75 }}
        >
          <Link to="/home">
            <ExploreBtn/>
          </Link>
          <RWebShare
            data={{
              text: "CryptoDashboard made by Avi Vashishta using React JS.",
              url: "https://crypto-dashboard-jan.netlify.app",
              title: "CryptoTracker.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <button className="flex  border-2 items-center font-semiBold font-serif bg-blue-700 rounded-xl text-xl px-4">Share</button>
          </RWebShare>
        </motion.div>
      </div>
      <div className="gradient-div ">
        <img src={gradient} className="gradient" />
        <motion.img
          src={iphone}
          className="iphone"
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default MainComponent;