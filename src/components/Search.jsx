const Search = ({value, onChange}) => {
    return (
        <div className="flex items-center justify-center">
            <input
                value={value}
                onChange={onChange}
                type="text"
                placeholder="Search..."
                className="px-6 py-2 border border-white rounded-full focus:outline-none focus:ring-2 focus:ring-white m-5 backdrop-blur-sm bg-transparent text-white"
            />
        </div>
    );
};

export default Search;