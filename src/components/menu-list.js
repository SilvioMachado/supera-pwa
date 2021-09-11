import React from 'react';
import MenuItem from './MenuItem';

const MenuList = ({menuItemList, ...props}) => {
  return (
    <div style={{margin: 'auto', display: 'flex', flexDirection: 'row', flexWrap: 'wrap',
    justifyContent: 'center'}}>
      {
        menuItemList.map((item, idx) => (
          <MenuItem 
            text={item.text}
            imgSource={item.imgSource}
            key={`menuItem-${idx}`}
          />
        ))
      }
    </div>
  );
};

export default MenuList;
