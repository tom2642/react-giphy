import React from 'react';
import Gif from './Gif';

const GifList = (props) => {
  const { gifIDs, setSelectedGif } = props;
  return (
    <div className="gif-list">
      {gifIDs.map((gifID) => <Gif gifID={gifID} setSelectedGif={setSelectedGif} key={gifID} />)}
    </div>
  );
};

export default GifList;
