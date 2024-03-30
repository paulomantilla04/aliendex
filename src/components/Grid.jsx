import React, {useEffect, useState} from 'react';
import Search from './Search'
const GridItem = ({ image, name, species }) => {
    const boxStyle = 'border-4 border-white p-5 rounded-xl w-72 h-64 flex flex-col items-center justify-end relativ backdrop-blur-sm bg-black/30 mb-5';
    

  return (
    <div className={`${boxStyle}`}>
      <div className='bg-cover w-64 h-40 mb-3 rounded-xl drop-shadow-xl' style={{ backgroundImage: `url(${image})` }}></div>
      <h1 className='text-center text-xl font-black text-white'>{name}</h1>
      <p className='text-white text-sm'>{species}</p>
    </div>
  );
};

const Grid = ({ data }) => {

  const [search, setSearch] = useState('');

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const filteredAliens = Object.keys(data).filter((key) =>
    data[key].name.toLowerCase().includes(search.toLowerCase())
  );
  

  return (
    <div className="flex flex-col">
      <Search value={search} onChange={searcher}/>
      <div className="grid md:grid-cols-3 gap-6 mx-auto">
        {filteredAliens.map((key, i) =>
          <GridItem key={i} image={data[key].image} name={data[key].name} species={data[key].species}/>
        )}
      </div>
    </div>
  );
};

export default Grid;
