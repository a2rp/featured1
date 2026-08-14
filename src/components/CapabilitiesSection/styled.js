import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 140px 5vw;
        background: #050505;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .sectionHeader {
            display: grid;
            grid-template-columns: 0.55fr 1.45fr;
            gap: 5rem;
            margin-bottom: 100px;
        }

        .sectionIndex {
            color: #666;
            font-size: 0.68rem;
            letter-spacing: 0.18em;
        }

        .headingBlock h2 {
            max-width: 1000px;
            font-size: clamp(3.8rem, 6.5vw, 7.5rem);
            line-height: 0.92;
            letter-spacing: -0.06em;
            font-weight: 500;
        }

        .headingBlock h2 span {
            display: block;
            color: #555;
            font-weight: 400;
        }

        .headingBlock p {
            max-width: 520px;
            margin-top: 2.5rem;
            color: #777;
            font-size: 0.95rem;
            line-height: 1.9;
        }

        .capabilityList {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .capabilityItem {
            position: relative;
            min-height: 190px;
            display: grid;
            grid-template-columns: 80px 1fr 1.4fr 1fr 60px;
            gap: 2rem;
            align-items: center;
            padding: 36px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            transition:
                background 0.35s ease,
                padding 0.35s ease;
        }

        .capabilityItem::before {
            content: "";
            position: absolute;
            inset: 0;
            z-index: 0;
            background: linear-gradient(
                90deg,
                rgba(255, 255, 255, 0.04),
                transparent 75%
            );
            opacity: 0;
            transition: opacity 0.35s ease;
        }

        .capabilityItem:hover::before {
            opacity: 1;
        }

        .capabilityItem:hover {
            padding-left: 20px;
            padding-right: 20px;
        }

        .capabilityItem > * {
            position: relative;
            z-index: 1;
        }

        .capabilityNumber {
            color: #555;
            font-size: 0.68rem;
            letter-spacing: 0.16em;
        }

        .capabilityItem h3 {
            color: #dedede;
            font-size: clamp(1.7rem, 2.4vw, 2.8rem);
            font-weight: 400;
            letter-spacing: -0.04em;
        }

        .capabilityItem > p {
            max-width: 520px;
            color: #777;
            font-size: 0.88rem;
            line-height: 1.8;
        }

        .capabilityTags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.55rem;
        }

        .capabilityTags span {
            padding: 0.5rem 0.7rem;
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: 999px;
            color: #666;
            font-size: 0.58rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            transition:
                color 0.3s ease,
                border-color 0.3s ease;
        }

        .capabilityItem:hover .capabilityTags span {
            color: #aaa;
            border-color: rgba(255, 255, 255, 0.18);
        }

        .capabilityArrow {
            width: 48px;
            height: 48px;
            display: flex;
            align-items: center;
            justify-content: center;
            justify-self: end;
            border: 1px solid rgba(255, 255, 255, 0.12);
            border-radius: 50%;
            color: #666;
            transition:
                transform 0.35s ease,
                background 0.35s ease,
                color 0.35s ease;
        }

        .capabilityItem:hover .capabilityArrow {
            background: #f5f5f5;
            color: #050505;
            transform: rotate(45deg);
        }

        @media (max-width: 1100px) {
            .capabilityItem {
                grid-template-columns: 60px 0.8fr 1.3fr 0.8fr 50px;
                gap: 1.2rem;
            }
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .sectionHeader {
                grid-template-columns: 1fr;
                gap: 2rem;
                margin-bottom: 70px;
            }

            .capabilityItem {
                min-height: auto;
                grid-template-columns: 50px 1fr 50px;
                gap: 1.2rem;
                padding: 30px 0;
            }

            .capabilityItem h3 {
                grid-column: 2;
            }

            .capabilityItem > p {
                grid-column: 2 / 4;
            }

            .capabilityTags {
                grid-column: 2 / 4;
            }

            .capabilityArrow {
                grid-column: 3;
                grid-row: 1 / 3;
            }

            .capabilityItem:hover {
                padding-left: 12px;
                padding-right: 12px;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .headingBlock h2 {
                font-size: clamp(3rem, 14vw, 4.8rem);
            }

            .capabilityItem {
                grid-template-columns: 36px 1fr;
            }

            .capabilityNumber {
                align-self: start;
                padding-top: 8px;
            }

            .capabilityItem h3 {
                grid-column: 2;
            }

            .capabilityItem > p {
                grid-column: 2;
            }

            .capabilityTags {
                grid-column: 2;
            }

            .capabilityArrow {
                display: none;
            }
        }
    `,
};
