import React from 'react';

const SearchBox = (props) => {
  const { searchGiphy } = props;
  const handleChange = (event) => {
    searchGiphy(event.currentTarget.value);
  };

  return (
    <input type="text" className="form-search form-control" onChange={handleChange} />
  );
};

export default SearchBox;
