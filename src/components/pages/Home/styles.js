import styled from 'styled-components';
import { darken } from 'polished'

export const ProductList = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    list-style: none;

    li {

        &:nth-child(3n+2){
            border-right: 1px solid #d3d3d3;
            border-left: 1px solid #d3d3d3;
        }

        display: flex;
        flex-direction: column;
        background: transparent;
        padding: 20px;
        max-height: 560px;

        img {
            align-self: center;
            max-width: 250px;
            height: 400px;
        }

        > strong{
            font-size: 16px;
            line-height: 20px;
            color: #999;
            margin-top: 15px;
        }

        > span {
            font-size: 17px;
            font-weight: bold;
            margin: 5px 0 5px;
            color: #333;
        }

        div{
            display: flex;
            span {
                margin: 5px 0 15px;
                font-size: 16px;
                line-height: 20px;
                color: #999;
                margin-top: 15px;
            }

            span:nth-child(even){
                margin-left: auto;
            }
        }

        button {
            background: #fb6a00;
            color: #fff;
            font-weight: normal;
            border: 0;
            font-size: 17px;
            text-transform: uppercase;
            border-radius: 4px;
            margin-top: auto;
            padding: 20px;
            display: flex;
            align-items: center;
            -webkit-transition: background 0.2s;
            transition: background 0.2s;
            box-shadow: 0 3px 6px 0 rgba(0,0,0,0.1), 0 5px 5px 0 rgba(0,0,0,0.1);
            &:hover{
                /* polished */
                background: ${darken(0.05, '#fb6a00')};
            }

            div {
                display: inherit;
                align-items: center;
                padding: 12px;
                background: rgba(0, 0, 0, 0.1);

                svg {
                    margin-right: 5px;
                }
            }

            span {
                flex: 1;
                text-align: center;
                font-weight: bold;
            }
        }
    }

`;
