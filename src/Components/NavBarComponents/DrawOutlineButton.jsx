const DrawOutlineButton = ({ children, href }) => {
  return (
    <button className="group relative mr-[5%] min-h-[40%] min-w-[25%] text-nowrap rounded-full bg-white px-4 py-2 text-base font-medium text-slate-900 transition-colors duration-500 hover:rounded-none hover:text-indigo-800 hover:duration-100 md:min-h-[50%] md:text-xl">
      <a href={href}>
        <span>{children}</span>

        {/* TOP */}
        <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-700 transition-all duration-100 group-hover:w-full" />

        {/* RIGHT */}
        <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-700 transition-all delay-100 duration-100 group-hover:h-full" />

        {/* BOTTOM */}
        <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-700 transition-all delay-200 duration-100 group-hover:w-full" />

        {/* LEFT */}
        <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-700 transition-all delay-300 duration-100 group-hover:h-full" />
      </a>
    </button>
  );
};

export default DrawOutlineButton;
