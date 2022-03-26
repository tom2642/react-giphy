import React, { useState } from 'react';
import Gif from './Gif';
import GifList from './GifList';
import SearchBox from './SearchBox';

const giphy = require('giphy-api')({
  apiKey: 'qVScbigf9QmT5j8b42QMzrcXPBvAyOZ8',
  https: true
});

const App = () => {
  const [selectedGif, setSelectedGif] = useState("13HgwGsXF0aiGY");
  const [gifList, setGifList] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);

  const searchGiphy = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      // res.data.map(gif => gif.id); //array with 10 ids
      const gifIDArray = res.data.map((gif) => gif.id);
      setGifList(gifIDArray);
    });
  };
  return (
    <div>
      <div className="left-scene">
        <SearchBox searchGiphy={searchGiphy} />
        <div className="selected-gif">
          <Gif gifID={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIDs={gifList} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;
