import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <h1 className="text-red-600">HI i'm Home page!</h1>
      <div className="flex w-1/2 justify-around">
        <div className="">
          <Link to="/Books/1">Book1</Link>
        </div>
        <div>
          <Link to="/Books/2">Book2</Link>
        </div>
      </div>
      <section id="buttonCheck" className="flex w-1/3 justify-around">
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="border-2 border-primary hover:bg-primary-100 rounded-lg overflow-hidden transition-colors delay-200 ease-in w-[25%] p-1"
        >
          <div className="bg-warning-300">div1</div>
          <div className="bg-warning-300">div2</div>
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.8 }}
          whileHover={{ scale: 1.1 }}
          className="border-2 border-warning hover:bg-warning-100 rounded-lg flex justify-center items-center overflow-hidden transition-colors delay-200 ease-in h-full w-[25%]"
        >
          <div className="bg-primary-300 h-[80%] w-[90%] flex justify-center items-center">
            <span className="max-h-max">div3</span>
          </div>
        </motion.button>
      </section>
    </>
  );
}
