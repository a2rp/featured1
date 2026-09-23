import styled from "styled-components";

export const Styled = {
    Wrapper: styled.div`
        min-height: 100vh;
        background: #050505;
        color: #f5f5f5;
        font-family: Inter, Arial, sans-serif;
        overflow-x: hidden;

        a {
            color: inherit;
            text-decoration: none;
        }
    `,
    GoToTop: styled.button`
        position: fixed;
        right: 22px;
        bottom: 22px;
        z-index: 120;
        width: 44px;
        height: 44px;
        display: grid;
        place-items: center;
        border: 1px solid #777;
        border-radius: 50%;
        background: #f5f5f5;
        color: #050505;
        cursor: pointer;
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.26);
        transition: border-color 180ms ease, box-shadow 180ms ease;

        &:hover,
        &:focus-visible {
            border-color: #fff;
            box-shadow: 0 0 0 5px rgba(255, 255, 255, 0.14);
            outline: none;
        }
    `,
};
