import React, { useState, useEffect } from "react";
import {
    Title,
    Wrap,
    Figure
} from "./elements";
import Image from "next/image";
import Car from './Car.png'

const Section4 = () => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        setTimeout(() => { setActive(true) }, 2000);
    })

    return (
        <Wrap>
            <Title>CSS ANIMATION KEYFRAME</Title>
            <Figure active={active}>
                <Image src={Car} width={300} height={300}/>
            </Figure>
        </Wrap>
    )
}


export default Section4;