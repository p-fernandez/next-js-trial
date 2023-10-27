export const Button = ({ className, value, onClick }) => (
  <button
    className={`bg-white-500 hover:bg-white-600 active:bg-white-800 group m-5 h-10 cursor-pointer rounded-lg rounded-md border border-solid border-white p-3 px-4 py-2 text-white transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 ${className}`}
    onClick={onClick}
  >
    {value}
  </button>
);
