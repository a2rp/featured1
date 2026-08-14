import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 140px 5vw;
        background: #080808;
        border-bottom: 1px solid rgba(255, 255, 255, 0.08);

        .aboutTop {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
            align-items: start;
        }

        .sectionIndex {
            color: #666;
            font-size: 0.68rem;
            letter-spacing: 0.18em;
        }

        .aboutIntro {
            max-width: 520px;
            justify-self: end;
            color: #777;
            font-size: 1rem;
            line-height: 1.9;
        }

        .aboutStatement {
            margin-top: 110px;
        }

        .aboutStatement h2 {
            max-width: 1200px;
            font-size: clamp(4rem, 7vw, 8rem);
            line-height: 0.92;
            letter-spacing: -0.06em;
            font-weight: 500;
        }

        .aboutStatement h2 span {
            display: block;
            color: #555;
            font-weight: 400;
        }

        .aboutGrid {
            margin-top: 120px;
            padding-top: 60px;
            display: grid;
            grid-template-columns: minmax(280px, 0.75fr) minmax(0, 1.25fr);
            gap: 8vw;
            border-top: 1px solid rgba(255, 255, 255, 0.08);
        }

        .aboutCopy {
            display: grid;
            gap: 1.5rem;
        }

        .aboutCopy p {
            max-width: 480px;
            color: #8b8b8b;
            font-size: 0.95rem;
            line-height: 1.9;
        }

        .statsGrid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .statItem {
            min-height: 220px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.015);
            transition:
                background 0.35s ease,
                transform 0.35s ease;
        }

        .statItem:hover {
            background: rgba(255, 255, 255, 0.035);
            transform: translateY(-4px);
        }

        .statItem strong {
            color: #e7e7e7;
            font-size: clamp(3.5rem, 5vw, 6.5rem);
            line-height: 1;
            font-weight: 300;
            letter-spacing: -0.06em;
        }

        .statItem span {
            color: #666;
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
        }

        @media (max-width: 900px) {
            padding: 100px 20px;

            .aboutTop {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .aboutIntro {
                justify-self: start;
            }

            .aboutStatement {
                margin-top: 80px;
            }

            .aboutGrid {
                margin-top: 80px;
                grid-template-columns: 1fr;
                gap: 4rem;
            }
        }

        @media (max-width: 560px) {
            padding: 80px 20px;

            .aboutStatement {
                margin-top: 60px;
            }

            .aboutStatement h2 {
                font-size: clamp(3.1rem, 14vw, 4.8rem);
            }

            .aboutGrid {
                margin-top: 60px;
                padding-top: 40px;
            }

            .statsGrid {
                grid-template-columns: 1fr;
            }

            .statItem {
                min-height: 170px;
                padding: 24px;
            }
        }
    `,
};
