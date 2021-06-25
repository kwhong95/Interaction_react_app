import React, { useState } from "react";
import {
    Wrap,
    Section1,
    Title,
    Button,
    TransformEx,
    List,
    Item, Figure, Text,
} from './elements'
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
                <Section1>
                    <TransformEx>
                        <List>
                            <Item>
                                <Example />
                                <Text>ROTATE</Text>
                            </Item>
                        </List>
                    </TransformEx>
                </Section1>
                <Button onClick={onStart}>Start</Button>
                <Button onClick={onReset}>Reset</Button>
            </Section1>
        </Wrap>
    );
}

export default Section3;

const Example = () => <Figure><Image src={Model} /></Figure>