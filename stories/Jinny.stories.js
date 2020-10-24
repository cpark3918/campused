import React, {useState} from 'react';
import Divider from '../comps/Divider';
import Item from '../comps/Item';
import Price from '../comps/Price';





export default {
    title: 'Example/Jinny Components',
    component: Hr_Divider
};

export const Hr_Divider= () => <Divider />;
export const ItemList = () => <Item />;
export const PriceInput = () => <Price />;