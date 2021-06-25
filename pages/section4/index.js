import React from "react";
import {
    Title,
    Wrap,
    Figure
} from "./elements";
import Image from "next/image";
import Car from './Car.png'

const Section4 = () => {
    return (
        <Wrap>
            <Title>CSS ANIMATION KEYFRAME</Title>
            <Figure>
                <Image src={Car} width={300} height={300}/>
            </Figure>
        </Wrap>
    )
}


export default Section4;