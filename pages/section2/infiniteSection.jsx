import React from 'react';
import Image from "next/image";
import {
    Figure,
    Item,
    List,
    SC_Infinity
} from "./elements";

// images
import Img1 from "./images/1.jpg";
import Img2 from "./images/2.jpg";
import Img3 from "./images/3.jpg";
import Img4 from "./images/4.jpg";

const InfiniteSection = ({ listRef }) => {
    return (
        <SC_Infinity>
            <List ref={listRef}>
                <Item>
                    <Figure>
                        <Image src={Img1} alt='img'/>
                    </Figure>
                </Item>
                <Item>
                    <Figure>
                        <Image src={Img2} alt='img' />
                    </Figure>
                </Item>
                <Item>
                    <Figure>
                        <Image src={Img3} alt='img' />
                    </Figure>
                </Item>
                <Item>
                    <Figure>
                        <Image src={Img4} alt='img' />
                    </Figure>
                </Item>
                <Item>
                    <Figure>
                        <Image src={Img1} alt='img' />
                    </Figure>
                </Item>
                <Item>
                    <Figure>
                        <Image src={Img2} alt='img' />
                    </Figure>
                </Item>
                <Item>
                    <Figure>
                        <Image src={Img3} alt='img' />
                    </Figure>
                </Item>
                <Item>
                    <Figure>
                        <Image src={Img4} alt='img' />
                    </Figure>
                </Item>
            </List>
        </SC_Infinity>
    );
}

export default InfiniteSection;