import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 140px 5vw;
        background: #050505;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .workHeader {
            display: grid;
            grid-template-columns:
                minmax(0, 1.5fr)
                minmax(280px, 0.5fr);
            gap: 5rem;
            align-items: end;
            margin-bottom: 80px;
        }

        .sectionIndex {
            display: block;
            margin-bottom: 2rem;
            color: #666;
            font-size: 0.68rem;
            letter-spacing: 0.18em;
        }

        .workHeader h2 {
            max-width: 950px;
            font-size: clamp(3.6rem, 6vw, 7rem);
            line-height: 0.93;
            letter-spacing: -0.055em;
            font-weight: 500;
        }

        .workHeader h2 span {
            display: block;
            color: #555;
            font-weight: 400;
        }

        .workHeader > p {
            max-width: 390px;
            margin-bottom: 0.8rem;
            color: #777;
            font-size: 0.95rem;
            line-height: 1.8;
        }

        .workGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2px;
            background: rgba(255, 255, 255, 0.1);
        }

        .projectCard {
            min-width: 0;
            background: #050505;
            cursor: pointer;
        }

        .projectLarge {
            grid-column: span 2;
        }

        .projectVisual {
            position: relative;
            min-height: 570px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            background: #0a0a0a;
        }

        .projectLarge .projectVisual {
            min-height: 720px;
        }

        .projectVisual::before {
            content: "";
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
            background-size: 64px 64px;
        }

        .projectVisual::after {
            content: "";
            position: absolute;
            inset: 0;
            background: radial-gradient(
                circle at center,
                rgba(255, 255, 255, 0.08),
                transparent 58%
            );
        }

        .visualOne {
            background:
                radial-gradient(
                    circle at 70% 30%,
                    rgba(255, 255, 255, 0.08),
                    transparent 35%
                ),
                #080808;
        }

        .visualTwo {
            background:
                radial-gradient(
                    circle at center,
                    rgba(255, 255, 255, 0.1),
                    transparent 45%
                ),
                #090909;
        }

        .visualThree {
            background: linear-gradient(135deg, #050505, #111 50%, #060606);
        }

        .projectNumber {
            position: absolute;
            top: 32px;
            left: 32px;
            z-index: 3;
            color: rgba(255, 255, 255, 0.35);
            font-size: 0.68rem;
            letter-spacing: 0.18em;
        }

        .projectBadge {
            position: absolute;
            right: 30px;
            bottom: 30px;
            z-index: 3;
            padding: 0.6rem 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 999px;
            background: rgba(0, 0, 0, 0.5);
            backdrop-filter: blur(14px);
            color: #aaa;
            font-size: 0.62rem;
            text-transform: uppercase;
            letter-spacing: 0.14em;
        }

        .interfaceWindow {
            position: relative;
            z-index: 2;
            width: min(72%, 900px);
            aspect-ratio: 16 / 9;
            border: 1px solid rgba(255, 255, 255, 0.18);
            border-radius: 12px;
            background: rgba(9, 9, 9, 0.82);
            box-shadow:
                0 70px 120px rgba(0, 0, 0, 0.65),
                0 0 80px rgba(255, 255, 255, 0.035);
            overflow: hidden;
            transform: perspective(1500px) rotateX(7deg) rotateY(-8deg);
            transition:
                transform 0.6s ease,
                border-color 0.6s ease;
        }

        .projectCard:hover .interfaceWindow {
            transform: perspective(1500px) rotateX(2deg) rotateY(-2deg)
                scale(1.015);
            border-color: rgba(255, 255, 255, 0.32);
        }

        .windowHeader {
            height: 46px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            gap: 7px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .windowHeader span {
            width: 7px;
            height: 7px;
            border-radius: 50%;
            background: #555;
        }

        .windowContent {
            height: calc(100% - 46px);
            display: grid;
            grid-template-columns: 22% 1fr;
        }

        .windowSidebar {
            border-right: 1px solid rgba(255, 255, 255, 0.07);
            background: rgba(255, 255, 255, 0.015);
        }

        .windowMain {
            padding: 9%;
        }

        .windowLine {
            width: 58%;
            height: 8px;
            margin-bottom: 12px;
            border-radius: 20px;
            background: #333;
        }

        .windowLineLarge {
            width: 82%;
            height: 20px;
            background: #aaa;
        }

        .windowLineShort {
            width: 38%;
        }

        .windowCards {
            margin-top: 11%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 16px;
        }

        .windowCards span {
            aspect-ratio: 1.15;
            border: 1px solid rgba(255, 255, 255, 0.09);
            border-radius: 7px;
            background: linear-gradient(135deg, #1a1a1a, #090909);
        }

        .sphere {
            position: relative;
            z-index: 2;
            width: 330px;
            height: 330px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .sphereRing {
            position: absolute;
            border: 1px solid rgba(255, 255, 255, 0.17);
            border-radius: 50%;
            transition: transform 0.8s ease;
        }

        .ringOne {
            width: 100%;
            height: 100%;
        }

        .ringTwo {
            width: 72%;
            height: 72%;
            border-style: dashed;
        }

        .sphereCore {
            width: 42%;
            height: 42%;
            border: 1px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            background: radial-gradient(
                circle at 35% 30%,
                #eee,
                #555 20%,
                #090909 65%
            );
            box-shadow: 0 0 80px rgba(255, 255, 255, 0.1);
        }

        .projectCard:hover .ringOne {
            transform: rotate(25deg) scale(1.06);
        }

        .projectCard:hover .ringTwo {
            transform: rotate(-35deg) scale(0.94);
        }

        .monolith {
            position: relative;
            z-index: 2;
            width: 190px;
            height: 340px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.17);
            background:
                linear-gradient(
                    135deg,
                    rgba(255, 255, 255, 0.2),
                    transparent 25%,
                    transparent 70%,
                    rgba(255, 255, 255, 0.06)
                ),
                #0b0b0b;
            box-shadow:
                inset 0 0 60px rgba(255, 255, 255, 0.025),
                0 50px 80px rgba(0, 0, 0, 0.6);
            transform: perspective(900px) rotateY(-14deg);
            transition: transform 0.7s ease;
        }

        .monolith span {
            color: #aaa;
            font-size: 3.5rem;
            font-weight: 200;
            letter-spacing: 0.1em;
        }

        .projectCard:hover .monolith {
            transform: perspective(900px) rotateY(6deg) translateY(-8px);
        }

        .monolithShadow {
            position: absolute;
            z-index: 1;
            width: 280px;
            height: 80px;
            bottom: 16%;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.8);
            filter: blur(22px);
        }

        .projectInfo {
            min-height: 140px;
            padding: 28px 30px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 2rem;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
        }

        .projectMeta {
            display: block;
            margin-bottom: 0.6rem;
            color: #555;
            font-size: 0.62rem;
            text-transform: uppercase;
            letter-spacing: 0.15em;
        }

        .projectInfo h3 {
            color: #d7d7d7;
            font-size: clamp(1.35rem, 2vw, 2rem);
            font-weight: 400;
            letter-spacing: -0.03em;
        }

        .projectArrow {
            width: 48px;
            height: 48px;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 50%;
            color: #777;
            font-size: 1rem;
            transition:
                background 0.3s ease,
                color 0.3s ease,
                transform 0.3s ease;
        }

        .projectCard:hover .projectArrow {
            background: #f3f3f3;
            color: #050505;
            transform: rotate(45deg);
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .workHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 55px;
            }

            .workGrid {
                grid-template-columns: 1fr;
            }

            .projectLarge {
                grid-column: auto;
            }

            .projectVisual,
            .projectLarge .projectVisual {
                min-height: 500px;
            }

            .interfaceWindow {
                width: 86%;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .workHeader h2 {
                font-size: clamp(3rem, 14vw, 4.5rem);
            }

            .projectVisual,
            .projectLarge .projectVisual {
                min-height: 410px;
            }

            .projectInfo {
                min-height: 120px;
                padding: 22px 20px;
            }

            .projectNumber {
                top: 20px;
                left: 20px;
            }

            .projectBadge {
                right: 20px;
                bottom: 20px;
            }

            .sphere {
                width: 240px;
                height: 240px;
            }

            .monolith {
                width: 145px;
                height: 270px;
            }
        }
    `,
};
