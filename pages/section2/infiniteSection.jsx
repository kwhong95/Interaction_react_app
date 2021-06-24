import React from 'react';
import Image from "next/image";
import {
    Figure,
    Item,
    List,
    SC_Infinity
} from "./elements";

const InfiniteSection = ({ listRef, ListItem }) => {
    return (
        <SC_Infinity>
            <List ref={listRef} >
                {ListItem.map((item, idx )=> (
                    <Item key={idx}>
                        <Figure>
                            <Image
                                src={item.image}
                                alt={item.alt}
                            />
                        </Figure>
                    </Item>
                ))}
            </List>
        </SC_Infinity>
    );
}

export default InfiniteSection;