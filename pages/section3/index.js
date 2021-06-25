import React, {useEffect, useState} from "react";
import {
    Wrap,
    Section1,
    Title,
    Button,
    TransformEx,
    List,
    Item,
    Text,
    RotateModel, ScaleModel, SkewModel, TranslateModel, Section2
} from './elements';
import Image from "next/image";
import Model from './model.png';


const Section3 = () => {
    const [active, setActive] = useState(false);

    function onStart() {
        setActive(true);
    }

    function onReset() {
        setActive(false);
    }

    return (
        <Wrap>
            <Section1>
                <Title>TRANSFORM</Title>
                    <TransformEx>
                        <List>
                            <Item>
                                <RotateModel active={active}>
                                    <Image src={Model} />
                                </RotateModel>
                                <Text>ROTATE</Text>
                            </Item>
                            <Item>
                                <ScaleModel active={active}>
                                    <Image src={Model} />
                                </ScaleModel>
                                <Text>SCALE</Text>
                            </Item>
                            <Item>
                                <SkewModel active={active}>
                                    <Image src={Model} />
                                </SkewModel>
                                <Text>SKEW</Text>
                            </Item>
                            <Item>
                                <TranslateModel active={active}>
                                    <Image src={Model} />
                                </TranslateModel>
                                <Text>TRANSLATE</Text>
                            </Item>
                        </List>
                        <Button onClick={onStart}>Start</Button>
                        <Button onClick={onReset}>Reset</Button>
                    </TransformEx>
            </Section1>

            <Section2>
                <Title>TRANSFORM & TRANSITION</Title>
            </Section2>
        </Wrap>
    );
}

export default Section3;

