import styled from 'styled-components';
import { darken } from 'polished'

export const Container = styled.div`
    padding: 30px;
    background: "#fff";
    border-radius: 4px;

    footer {
        margin-top: 30px;
        display: flex;
        justify-content: space-between;
        align-items: center;

        button {
            background: "#fb6a00";
            color: #FFF;
            border: 0;
            border-radius: 4px;
            padding: 12px 20px;
            font-weight: bold;
            text-transform: uppercase;
            transition: background 0.2s;

            &:hover{
                background: ${darken(0.03, "#fb6a00")}
            }
        }
    }

`;

export const ProductTable = styled.table`
    width: 100%;

    thead th {
        color: #A2A09E;
        text-align: left;
        padding: 12px;
    }

    tbody td {
        padding: 12px;
        border-bottom: 1px solid #eee;
    }

    img {
        height: 100px;
        margin-bottom: 30px;
    }

    strong {
        color: #333;
        display: block;
        margin-bottom: 10px;
    }

    td > p {
        color: #A2A09E;
        font-weight: 500;
        margin: 5px 0px;
    }

    span {
        margin-top: 5px;
        font-size: 14px;
        display: block;
        font-weight: bold;
    }

    section span {
        color: #A2A09E;
        font-weight: 500;
        margin: 5px 0px;
    }

    div {
        display: flex;
        align-items: center;

        input {
            border-radius: 4px;
            border: none;
            color: #666;
            padding: 6px;
            width: 50px;
            text-align: right;
        }
    }

    button {
        background: none;
        border: 0;
        padding: 6px;
    }
`

export const Total = styled.div`
    display: flex;
    align-self: baseline;

    span {
        color: #0E0D0E;
        font-weight: bold;
    }

    strong {
        font-size: 28px;
        margin-left: 100px;
    }
`
