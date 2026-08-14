import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        min-height: 100vh;
        padding: 150px 5vw 60px;
        display: flex;
        align-items: center;
        overflow: hidden;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        background: #050505;

        .heroGrid {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(
                    rgba(255, 255, 255, 0.035) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.035) 1px,
                    transparent 1px
                );
            background-size: 72px 72px;
            mask-image: linear-gradient(
                to bottom,
                transparent,
                black 15%,
                black 80%,
                transparent
            );
            pointer-events: none;
        }

        .heroGlow {
            position: absolute;
            border-radius: 50%;
            filter: blur(120px);
            pointer-events: none;
        }

        .glowOne {
            width: 480px;
            height: 480px;
            top: 8%;
            right: 5%;
            background: rgba(255, 255, 255, 0.09);
        }

        .glowTwo {
            width: 350px;
            height: 350px;
            left: 10%;
            bottom: -10%;
            background: rgba(150, 150, 150, 0.08);
        }

        .heroContent {
            position: relative;
            z-index: 2;
            width: min(820px, 65%);
        }

        .eyebrow {
            display: flex;
            align-items: center;
            gap: 0.7rem;
            margin-bottom: 2.2rem;
            color: #8a8a8a;
            font-size: 0.73rem;
            text-transform: uppercase;
            letter-spacing: 0.18em;
        }

        .statusDot {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #fff;
            box-shadow: 0 0 14px rgba(255, 255, 255, 0.9);
        }

        h1 {
            margin: 0;
            font-size: clamp(4rem, 7.8vw, 8.7rem);
            line-height: 0.9;
            letter-spacing: -0.065em;
            font-weight: 500;
        }

        h1 span {
            display: block;
            color: #747474;
            font-weight: 400;
        }

        .heroBottom {
            margin-top: 3rem;
            display: flex;
            align-items: flex-end;
            gap: 3rem;
        }

        .heroBottom p {
            max-width: 460px;
            margin: 0;
            color: #999;
            font-size: 1rem;
            line-height: 1.8;
        }

        .primaryCta {
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            min-width: 220px;
            padding: 1.1rem 1.25rem;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 4px;
            background: rgba(255, 255, 255, 0.04);
            font-size: 0.78rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            transition:
                background 0.3s ease,
                color 0.3s ease;
        }

        .primaryCta:hover {
            background: #fff;
            color: #000;
        }

        .arrow {
            font-size: 1rem;
        }

        .visual {
            position: absolute;
            right: 3vw;
            top: 50%;
            width: min(35vw, 520px);
            aspect-ratio: 1;
            transform: translateY(-50%);
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .orbit {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 50%;
        }

        .orbitOuter {
            width: 100%;
            height: 100%;
            animation: spin 30s linear infinite;
        }

        .orbitMiddle {
            width: 72%;
            height: 72%;
            border-style: dashed;
            animation: spinReverse 24s linear infinite;
        }

        .orbitInner {
            width: 44%;
            height: 44%;
            animation: spin 18s linear infinite;
        }

        .core {
            position: relative;
            z-index: 3;
            width: 120px;
            height: 120px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.24);
            border-radius: 50%;
            background: radial-gradient(
                circle at 35% 30%,
                #fafafa,
                #555 24%,
                #101010 65%
            );
            box-shadow:
                inset 0 0 30px rgba(255, 255, 255, 0.15),
                0 0 80px rgba(255, 255, 255, 0.07);
        }

        .core span {
            color: rgba(255, 255, 255, 0.8);
            font-size: 2.4rem;
            font-weight: 300;
            letter-spacing: 0.08em;
        }

        .orbitPoint {
            position: absolute;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #ddd;
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.8);
        }

        .pointOne {
            top: 16%;
            left: 19%;
        }

        .pointTwo {
            right: 4%;
            top: 50%;
        }

        .pointThree {
            left: 32%;
            bottom: 10%;
        }

        .heroMeta {
            position: absolute;
            left: 5vw;
            bottom: 35px;
            display: flex;
            gap: 2rem;
            color: #555;
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
        }

        .scroll {
            position: absolute;
            right: 5vw;
            bottom: 35px;
            display: flex;
            align-items: center;
            gap: 0.8rem;
            color: #666;
            font-size: 0.65rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
            transition: color 0.3s ease;
        }

        .scroll:hover {
            color: #fff;
        }

        @keyframes spin {
            from {
                transform: rotate(0deg);
            }

            to {
                transform: rotate(360deg);
            }
        }

        @keyframes spinReverse {
            from {
                transform: rotate(360deg);
            }

            to {
                transform: rotate(0deg);
            }
        }

        @media (max-width: 1100px) {
            .heroContent {
                width: 72%;
            }

            .visual {
                right: -8vw;
                opacity: 0.7;
            }
        }

        @media (max-width: 760px) {
            min-height: 100svh;
            padding: 120px 20px 90px;
            align-items: flex-start;

            .heroContent {
                width: 100%;
            }

            .eyebrow {
                margin-bottom: 1.5rem;
                font-size: 0.62rem;
            }

            h1 {
                font-size: clamp(3.4rem, 17vw, 6rem);
                line-height: 0.93;
            }

            .heroBottom {
                margin-top: 2.2rem;
                flex-direction: column;
                align-items: flex-start;
                gap: 1.5rem;
            }

            .heroBottom p {
                max-width: 100%;
                font-size: 0.9rem;
            }

            .primaryCta {
                width: 100%;
            }

            .visual {
                width: 75vw;
                right: -30vw;
                top: 69%;
                opacity: 0.3;
            }

            .heroMeta {
                display: none;
            }

            .scroll {
                left: 20px;
                right: auto;
                bottom: 25px;
            }
        }
    `,
};
