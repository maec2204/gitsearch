import React from 'react';
import Button from './Button';
import DarkIcon from '../icons/DarkIcon';

function MainHeader() {
  return (
    <div className="w-full flex items-center justify-center mt-[31px]">
      <div className="md:w-1/2 w-full flex items-center justify-between">
        <h1 className="font-bold text-2xl leading-9">gitsearch</h1>
        <Button
          className="font-bold text-sm tracking-[2.5px] leading-4 uppercase"
          rightIcon={<DarkIcon className="w-4 h-4 line" />}
        >
          Dark
        </Button>
        {/* <Button rightIcon={<LightIcon />}>Light</Button> */}
      </div>
    </div>
  );
}

export default MainHeader;
