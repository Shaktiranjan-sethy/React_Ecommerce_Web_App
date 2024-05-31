import React, { useContext, useState } from 'react';
import myContext from '../../context/data/myContext';
import { useNavigate } from "react-router";

function Filter({ excludeFashion = false }) {
    const context = useContext(myContext);
    const { mode, searchkey, setSearchkey, filterType, setFilterType, filterPrice, setFilterPrice, product } = context;
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const resetFilters = () => {
        setFilterType('All');
        setFilterPrice('All');
    };

    const handleSearchChange = (e) => {
        setSearchkey(e.target.value);
        setIsDropdownVisible(true);
    };

    const handleProductClick = (id) => {
        setIsDropdownVisible(false);
        navigate(`/productinfo/${id}`);
        setSearchkey("");
    };

    const filterSearchData = product.filter((obj) => obj.title.toLowerCase().includes(searchkey.toLowerCase())).slice(0, 8)

    const priceRanges = [
        { label: 'All', value: 'All' },
        { label: 'Below ₹500', value: 'Below ₹500' },
        { label: '₹500 - ₹1000', value: '₹500 - ₹1000' },
        { label: '₹1000 - ₹2000', value: '₹1000 - ₹2000' },
        { label: 'Above ₹2000', value: 'Above ₹2000' },
    ];

    const navigate = useNavigate();

    // Create a unique list of categories, optionally excluding "fashion"
    let uniqueCategories = Array.from(new Set(product.map(item => item.category)));
    if (excludeFashion) {
        uniqueCategories = uniqueCategories.filter(category => category.toLowerCase() !== 'fashion');
    }

    return (
        <div className='container mx-auto px-4 mt-5'>
            <div className="lg:p-5 p-2 rounded-lg bg-gray-100 drop-shadow-xl border border-gray-200" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', color: mode === 'dark' ? 'white' : '' }}>
                <div className="relative">
                    <div className="absolute flex items-center ml-2 h-full">
                        <svg className="w-4 h-4 fill-current text-primary-gray-dark" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8898 15.0493L11.8588 11.0182C11.7869 10.9463 11.6932 10.9088 11.5932 10.9088H11.2713C12.3431 9.74952 12.9994 8.20272 12.9994 6.49968C12.9994 2.90923 10.0901 0 6.49968 0C2.90923 0 0 2.90923 0 6.49968C0 10.0901 2.90923 12.9994 6.49968 12.9994C8.20272 12.9994 9.74952 12.3431 10.9088 11.2744V11.5932C10.9088 11.6932 10.9495 11.7869 11.0182 11.8588L15.0493 15.8898C15.1961 16.0367 15.4336 16.0367 15.5805 15.8898L15.8898 15.5805C16.0367 15.4336 16.0367 15.1961 15.8898 15.0493ZM6.49968 11.9994C3.45921 11.9994 0.999951 9.54016 0.999951 6.49968C0.999951 3.45921 3.45921 0.999951 6.49968 0.999951C9.54016 0.999951 11.9994 3.45921 11.9994 6.49968C11.9994 9.54016 9.54016 11.9994 6.49968 11.9994Z" />
                        </svg>
                    </div>
                    <input
                        type="text"
                        name="searchkey"
                        id="searchkey"
                        value={searchkey}
                        onChange={handleSearchChange}
                        placeholder="Search here"
                        className="lg:px-8 lg:py-3 px-8 py-2 w-full rounded-md bg-violet-0 border-transparent outline-0 text-sm"
                        style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}
                    />

                    <div className=" flex justify-center relative">
                        {isDropdownVisible && searchkey && (
                            <div className=" absolute bg-gray-200 w-96  md:w-96 lg:w-96 z-50 my-1 rounded-lg px-15 py-2" style={{ backgroundColor: mode === 'dark' ? '#282c34' : '', zIndex: 1000}}>
                                {filterSearchData.length > 0 ? (
                                    filterSearchData.map((item, index) => (
                                        <div key={index} className="py-2 px-2 cursor-pointer" onClick={() => handleProductClick(item.id)}>
                                            <div className="flex items-center gap-5 hover:bg-slate-300">
                                                <img className="w-10" src={item.imageUrl} alt="" />
                                                {item.title}
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex justify-center">
                                        <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/10437/10437090.png" alt="img" />
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                </div>
                <div className="flex items-center justify-between mt-4" >
                    <p className="font-medium">Filters</p>
                    <button onClick={resetFilters} className="lg:px-4 lg:py-2 py-1 px-4 bg-gray-50 hover:bg-gray-200 text-gray-800 text-sm font-medium rounded-md" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}>
                        Reset Filter
                    </button>
                </div>
                <div className=' px-2 py-0'>
                    <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-4">
                        <select value={filterType} onChange={(e) => setFilterType(e.target.value)} className="lg:px-4 lg:py-3 px-4 py-2 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            <option value="All">All</option>
                            {uniqueCategories.map((category, index) => (
                                <option key={index} value={category}>{category}</option>
                            ))}
                        </select>
                        <select value={filterPrice} onChange={(e) => setFilterPrice(e.target.value)} className="px-4 py-3 w-full rounded-md bg-gray-50 border-transparent outline-0 focus:border-gray-500 focus:bg-white focus:ring-0 text-sm" style={{ backgroundColor: mode === 'dark' ? 'rgb(64 66 70)' : '', color: mode === 'dark' ? 'white' : '' }}>
                            {priceRanges.map((range, index) => (
                                <option key={index} value={range.value}>{range.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
