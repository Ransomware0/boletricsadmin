const SearchBar = () => {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="bg-n0 dark:bg-bg4 shadow-[0px_6px_40px_0px_rgba(0,0,0,0.02)] hidden lg:flex gap-3 rounded-[30px]  focus-within:border-primary px-2 items-center justify-between max-w-[230px] xxl:max-w-[320px] w-full">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent py-2 ltr:pl-4 rtl:pr-4 md:py-2.5 xxl:py-3  w-full"
      />
      <button className="bg-primary rounded-full w-8 shrink-0 h-8 flex justify-center items-center text-n0">
        <i className="las la-search text-lg"></i>
      </button>
    </form>
  );
};

export default SearchBar;
