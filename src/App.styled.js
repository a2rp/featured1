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
    Footer: styled.footer`
        padding: 28px 24px 34px; border-top: 1px solid #252525; color: #8b8b8b; text-align: center; font-size: 12px;
        a { color: #f5f5f5; font-weight: 600; } nav { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px 14px; margin-top: 10px; }
    `,
};
