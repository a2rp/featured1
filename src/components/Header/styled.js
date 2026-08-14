import styled from "styled-components";

export const Styled = {
    Wrapper: styled.header`
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        width: 100%;
        height: 88px;
        padding: 0 5vw;
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background: rgba(5, 5, 5, 0.68);
        backdrop-filter: blur(24px);

        .brand {
            justify-self: start;
            font-size: 1.1rem;
            font-weight: 700;
            letter-spacing: 0.18em;
        }

        .brand span {
            color: #777;
        }

        .nav {
            display: flex;
            align-items: center;
            gap: 2.5rem;
        }

        .nav a {
            position: relative;
            color: #999;
            font-size: 0.78rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            transition: color 0.25s ease;
        }

        .nav a::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: -8px;
            width: 0;
            height: 1px;
            background: #fff;
            transition: width 0.25s ease;
        }

        .nav a:hover {
            color: #fff;
        }

        .nav a:hover::after {
            width: 100%;
        }

        .headerCta {
            justify-self: end;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            padding: 0.85rem 1.2rem;
            border: 1px solid rgba(255, 255, 255, 0.16);
            border-radius: 999px;
            color: #ddd;
            font-size: 0.76rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                border-color 0.3s ease;
        }

        .headerCta:hover {
            background: #fff;
            color: #050505;
            border-color: #fff;
        }

        @media (max-width: 1100px) {
            grid-template-columns: 1fr auto;

            .nav {
                display: none;
            }
        }

        @media (max-width: 760px) {
            height: 72px;
            padding: 0 20px;

            .headerCta {
                padding: 0.7rem 0.9rem;
                font-size: 0.65rem;
            }
        }
    `,
};
