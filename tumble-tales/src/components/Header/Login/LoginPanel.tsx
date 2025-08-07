export default function LoginPanel({ isOpen, onClose }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-72 bg-white shadow-md z-50 transform transition-transform duration-300 px-6 py-6 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-end">
        <button
          onClick={onClose}
          className="text-blue-600 hover:text-blue-800 text-2xl"
          aria-label="Close panel"
        >
          ✕
        </button>
      </div>
      <div className="mt-6 flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Enter Username"
          className="border px-3 py-2 rounded border-blue-300 focus:ring focus:ring-blue-100"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="border px-3 py-2 rounded border-blue-300 focus:ring focus:ring-blue-100"
        />
        <button className="bg-red-400 hover:bg-red-300 active:bg-red-500 text-white px-6 py-2 rounded-md font-sans tracking-wider text-base transition duration-100">
          Login
        </button>
      </div>
    </div>
  );
}
