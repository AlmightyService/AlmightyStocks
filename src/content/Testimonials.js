import React, { useState } from "react";
import logo from '../images/almightyLogo.png';
import 'antd/dist/antd.css';
import {Card, Avatar} from 'antd'
import {CaretLeftFilled, CaretRightFilled} from '@ant-design/icons'
const { Meta } = Card;

const Testimonials = () =>
{
    const testimony =
    [
        {
            name: "Kris Almighty",
            image: logo,
            quote: "Trading has allowed me to not only financially grow, but also mentally. I can list over 100 things trending has allowed me to do, but one of my favorite is being able to purchase a gtr cash, never thought I’d own one"
        },
        {
            name: "Kris",
            image: logo,
            quote: "Trading has allowed me to not only financially grow, but also mentally. I can list over 100 things trending has allowed me to do, but one of my favorite is being able to purchase a gtr cash, never thought I’d own one"
        },
        {
            name: "Almighty",
            image: logo,
            quote: "Trading has allowed me to no100 things trending has allowed me to do, but one of my favorite is being able to purchase a gtr cash, never thought I’d own one"
        }
    ]

    const [current, setCurrent] = useState(0)

    const handleSetClick = (num) =>
    {
        if (num === -1) setCurrent(current === 0 ? testimony.length - 1 : current - 1)
        else setCurrent(current === testimony.length - 1 ? 0 : current + 1)
    }

    return (
        <Card
            style={{width: 400,}}
            actions={[
                <CaretLeftFilled onClick={() => handleSetClick(-1)} />,
                <CaretRightFilled onClick={() => handleSetClick(1)} />
            ]}
        >
            <Meta
                avatar={<Avatar src={testimony[current].image} />}
                title={testimony[current].name}
                description={testimony[current].quote}
                />
        </Card>
    );
}

export default Testimonials