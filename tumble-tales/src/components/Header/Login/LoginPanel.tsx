import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";

export default function LoginPanel({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="fixed top-0 right-0 h-full w-64 bg-white shadow-md z-50 px-6 py-6"
      >
        {/* Close button */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-red-400 hover:text-red-300 active:text-red-500 rounded-md focus:outline-none transition-colors duration-150"
            aria-label="Close login panel"
          >
            <IoClose className="w-8 h-8" />
          </button>
        </div>

        {/* Login form */}
        <div className="mt-6 flex flex-col space-y-4">
          <div className="flex flex-col">
            <label htmlFor="username" className="sr-only">
              Username
            </label>
            <input
              id="username"
              type="text"
              placeholder="Enter Username"
              className="border px-3 py-2 rounded border-blue-300 focus:ring focus:ring-blue-100"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              className="border px-3 py-2 rounded border-blue-300 focus:ring focus:ring-blue-100"
            />
          </div>

          <button
            className="bg-red-400 hover:bg-red-300 active:bg-red-500 text-white px-6 py-2 rounded-md font-sans tracking-wider text-base transition duration-100"
            aria-label="Submit login"
          >
            Login
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
