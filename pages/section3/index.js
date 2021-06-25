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
    RotateModel, ScaleModel, SkewModel, TranslateModel, Section2,
    RotateModel2, SkewModel2, ScaleModel2, TranslateModel2
} from './elements';
import Image from "next/image";
import Model from './model.png';


const Section3 = () => {
    const [active, setActive] = useState(false);
    const [active2, setActive2] = useState(false);

    function onStart() {
        setActive(true);
    }

    function onReset() {
        setActive(false);
    }

    function onStart2() {
        setActive2(true)
    }

    function onReset2() {
        setActive2(false);
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
                <TransformEx>
                    <List>
                        <Item>
                            <RotateModel2 active2={active2}>
                                <Image src={Model} />
                            </RotateModel2>
                            <Text>ROTATE</Text>
                        </Item>
                        <Item>
                            <ScaleModel2 active2={active2}>
                                <Image src={Model} />
                            </ScaleModel2>
                            <Text>SCALE</Text>
                        </Item>
                        <Item>
                            <SkewModel2 active2={active2}>
                                <Image src={Model} />
                            </SkewModel2>
                            <Text>SKEW</Text>
                        </Item>
                        <Item>
                            <TranslateModel2 active2={active2}>
                                <Image src={Model} />
                            </TranslateModel2>
                            <Text>TRANSLATE</Text>
                        </Item>
                    </List>
                    <Button onClick={onStart2}>Start</Button>
                    <Button onClick={onReset2}>Reset</Button>
                </TransformEx>
            </Section2>
        </Wrap>
    );
}

export default Section3;

