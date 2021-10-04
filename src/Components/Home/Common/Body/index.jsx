import React, { memo } from 'react'
import { Container } from 'react-bootstrap'
import { style } from './style';

const Body = memo((props) => {
    const { back, heading, text, tag, pic } = props || '';
    
    const sampImg = 'https://i.picsum.photos/id/119/3264/2176.jpg?hmac=PYRYBOGQhlUm6wS94EkpN8dTIC7-2GniC3pqOt6CpNU';

    return (
        <div class={style.main}>
            <div class={back ? style.col01:style.col1}>
                <h1>{heading || 'Heading Here'}</h1>
                <p>{text || 'Sample text here.'}</p>
                <p class={style.tag}>{tag || ''}</p>
            </div>
            <div class={style.col2}>
                <Container>
                <img
                    class={style.img}
                    alt=''
                    src={pic || sampImg}
                />
                </Container>
            </div>
        </div>
    )
})

export default Body
