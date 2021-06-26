import React, { useState, useEffect } from 'react';
import {Content, ImgWrap, Section, Text, Title, Wrap} from "./elements";
import Image from "next/image";
import IMG from './4.jpg';

const Section5 = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setActive(true);
    })

    return (
        <Wrap>
            <Section>
                <Content>
                    <Title>Animated Acceleration Processing Method</Title>
                    <Text>Image Acceleration Process</Text>

                    <ImgWrap active={active}>
                        <Image src={IMG} />
                    </ImgWrap>
                </Content>
            </Section>
        </Wrap>
    );
}

export default Section5;
