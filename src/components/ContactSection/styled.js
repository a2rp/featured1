import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        position: relative;
        padding: 140px 5vw 0;
        background: #080808;
        overflow: hidden;

        .contactGrid {
            position: absolute;
            inset: 0;
            background-image:
                linear-gradient(
                    rgba(255, 255, 255, 0.025) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    90deg,
                    rgba(255, 255, 255, 0.025) 1px,
                    transparent 1px
                );
            background-size: 72px 72px;
            mask-image: linear-gradient(to bottom, black, transparent 70%);
            pointer-events: none;
        }

        .contactTop,
        .contactMain,
        .contactDetails,
        .footer {
            position: relative;
            z-index: 1;
        }

        .contactTop {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 4rem;
        }

        .sectionIndex {
            color: #666;
            font-size: 0.68rem;
            letter-spacing: 0.18em;
        }

        .contactIntro {
            max-width: 520px;
            justify-self: end;
            color: #777;
            font-size: 1rem;
            line-height: 1.9;
        }

        .contactMain {
            margin-top: 110px;
        }

        .contactEyebrow {
            display: block;
            margin-bottom: 2rem;
            color: #666;
            font-size: 0.7rem;
            text-transform: uppercase;
            letter-spacing: 0.18em;
        }

        .contactTitle {
            position: relative;
            display: block;
            max-width: 1250px;
            font-size: clamp(4.5rem, 8.2vw, 9.5rem);
            line-height: 0.88;
            letter-spacing: -0.07em;
            font-weight: 500;
        }

        .contactTitle span {
            display: block;
            color: #555;
            font-weight: 400;
            transition: color 0.35s ease;
        }

        .contactTitle strong {
            position: absolute;
            right: 0;
            bottom: 0.12em;
            width: 90px;
            height: 90px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid rgba(255, 255, 255, 0.14);
            border-radius: 50%;
            color: #777;
            font-size: 1.5rem;
            font-weight: 300;
            transition:
                background 0.35s ease,
                color 0.35s ease,
                transform 0.35s ease;
        }

        .contactTitle:hover span {
            color: #999;
        }

        .contactTitle:hover strong {
            background: #f5f5f5;
            color: #050505;
            transform: rotate(45deg);
        }

        .contactDetails {
            margin-top: 120px;
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .contactDetail {
            min-height: 170px;
            padding: 28px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            background: rgba(255, 255, 255, 0.012);
        }

        .contactDetail > span {
            color: #555;
            font-size: 0.62rem;
            text-transform: uppercase;
            letter-spacing: 0.16em;
        }

        .contactDetail a,
        .contactDetail p {
            color: #aaa;
            font-size: 0.9rem;
            line-height: 1.6;
        }

        .contactDetail a {
            width: fit-content;
            transition: color 0.3s ease;
        }

        .contactDetail a:hover {
            color: #fff;
        }

        .availability {
            display: flex;
            align-items: center;
            gap: 0.65rem;
        }

        .availabilityDot {
            width: 7px;
            height: 7px;
            flex-shrink: 0;
            border-radius: 50%;
            background: #ddd;
            box-shadow: 0 0 12px rgba(255, 255, 255, 0.6);
        }

        .footer {
            margin-top: 120px;
            padding: 70px 0 30px;
            display: grid;
            grid-template-columns: 0.8fr 1.2fr;
            gap: 7vw;
            border-top: 1px solid rgba(255, 255, 255, 0.09);
        }

        .footerBrand > a {
            display: inline-block;
            color: #f1f1f1;
            font-size: 1.3rem;
            font-weight: 700;
            letter-spacing: 0.18em;
        }

        .footerBrand > a span {
            color: #666;
        }

        .footerBrand p {
            max-width: 300px;
            margin-top: 1.2rem;
            color: #555;
            font-size: 0.8rem;
            line-height: 1.7;
        }

        .footerLinks {
            display: grid;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            border-top: 1px solid rgba(255, 255, 255, 0.09);
            border-left: 1px solid rgba(255, 255, 255, 0.09);
        }

        .footerLinks a {
            min-height: 74px;
            padding: 0 18px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 1rem;
            border-right: 1px solid rgba(255, 255, 255, 0.09);
            border-bottom: 1px solid rgba(255, 255, 255, 0.09);
            color: #777;
            font-size: 0.68rem;
            text-transform: uppercase;
            letter-spacing: 0.12em;
            transition:
                background 0.3s ease,
                color 0.3s ease;
        }

        .footerLinks a:hover {
            background: rgba(255, 255, 255, 0.035);
            color: #ddd;
        }

        .footerLinks a span:last-child {
            color: #555;
            transition: transform 0.3s ease;
        }

        .footerLinks a:hover span:last-child {
            transform: rotate(45deg);
        }

        .footerBottom {
            grid-column: 1 / -1;
            margin-top: 55px;
            padding-top: 25px;
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            gap: 2rem;
            align-items: center;
            border-top: 1px solid rgba(255, 255, 255, 0.07);
            color: #444;
            font-size: 0.62rem;
            text-transform: uppercase;
            letter-spacing: 0.11em;
        }

        .footerBottom > span:nth-child(2) {
            justify-self: center;
        }

        .footerBottom > a {
            justify-self: end;
            transition: color 0.3s ease;
        }

        .footerBottom a:hover {
            color: #ddd;
        }

        @media (max-width: 900px) {
            padding: 100px 20px 0;

            .contactTop {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .contactIntro {
                justify-self: start;
            }

            .contactMain {
                margin-top: 80px;
            }

            .contactTitle strong {
                position: static;
                margin-top: 2rem;
            }

            .contactDetails {
                margin-top: 80px;
            }

            .footer {
                margin-top: 90px;
                grid-template-columns: 1fr;
            }

            .footerLinks {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            .footerBottom {
                grid-template-columns: 1fr;
                gap: 0.8rem;
            }

            .footerBottom > span:nth-child(2),
            .footerBottom > a {
                justify-self: start;
            }
        }

        @media (max-width: 640px) {
            padding: 80px 20px 0;

            .contactMain {
                margin-top: 60px;
            }

            .contactTitle {
                font-size: clamp(3.5rem, 16vw, 5.5rem);
            }

            .contactTitle strong {
                width: 64px;
                height: 64px;
            }

            .contactDetails {
                grid-template-columns: 1fr;
                margin-top: 60px;
            }

            .contactDetail {
                min-height: 140px;
                padding: 22px;
            }

            .footer {
                margin-top: 70px;
                padding-top: 50px;
            }

            .footerLinks {
                grid-template-columns: 1fr;
            }

            .footerLinks a {
                min-height: 64px;
            }

            .footerBottom {
                margin-top: 40px;
            }
        }
    `,
};
