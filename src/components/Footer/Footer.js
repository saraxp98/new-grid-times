import React from 'react';
import {Facebook, Twitter} from 'react-feather';
import styled from 'styled-components/macro';
import MaxWidthWrapper from '../MaxWidthWrapper';

import VisuallyHidden from '../VisuallyHidden';
import {QUERIES} from "../../constants";

const Footer = () => {
    return (
        <Wrapper>
            <MaxWidthWrapper>

                <TopRow>
                    <nav>
                        <TopNavList>
                            <li>
                                <a href="/about">About</a>
                            </li>
                            <li>
                                <a href="/press">Press Releases</a>
                            </li>
                            <li>
                                <a href="/contact">Contact Us</a>
                            </li>
                        </TopNavList>
                    </nav>
                    <Social>
                        <a href="/">
                            <VisuallyHidden>
                                Visit The Grid Times on Facebook
                            </VisuallyHidden>
                            <Facebook size={20}/>
                        </a>
                        <a href="/">
                            <VisuallyHidden>
                                Visit The Grid Times on Twitter
                            </VisuallyHidden>
                            <Twitter size={20}/>
                        </a>
                    </Social>
                </TopRow>

                <MainNavArea>
                    <DiscoverNav>
                        <MainNavHeading>Discover Content</MainNavHeading>
                        <MainNavList>
                            <li>
                                <a href="/pol">Politics</a>
                            </li>
                            <li>
                                <a href="/wrl">World</a>
                            </li>
                            <li>
                                <a href="/fin">Financial</a>
                            </li>
                            <li>
                                <a href="/spo">Sports and Entertainment</a>
                            </li>
                            <li>
                                <a href="/oped">Opinion and Editorial</a>
                            </li>
                        </MainNavList>
                    </DiscoverNav>
                    <RegionalWebNav>
                        <MainNavHeading>Regional Websites</MainNavHeading>
                        <MainNavList>
                            <li>
                                <a href="/us">New Grid United States</a>
                            </li>
                            <li>
                                <a href="/eu">New Grid Europe</a>
                            </li>
                            <li>
                                <a href="/asia">New Grid Asia</a>
                            </li>
                            <li>
                                <a href="/mars">New Grid Mars and Beyond</a>
                            </li>
                            <li>
                                <a href="/au">New Grid Australia</a>
                            </li>
                        </MainNavList>
                    </RegionalWebNav>
                    <CareersNav>
                        <MainNavHeading>Careers</MainNavHeading>
                        <MainNavList>
                            <li>
                                <a href="/pos">Open Positions</a>
                            </li>
                            <li>
                                <a href="/team">Meet the team</a>
                            </li>
                            <li>
                                <a href="/culture">Company Culture</a>
                            </li>
                        </MainNavList>
                    </CareersNav>
                    <LegalPrivacyNav>
                        <MainNavHeading>Legal and Privacy</MainNavHeading>
                        <MainNavList>
                            <li>
                                <a href="/privacy">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="/🍪">Use of cookies</a>
                            </li>
                            <li>
                                <a href="/manage">Manage cookies</a>
                            </li>
                            <li>
                                <a href="/legal">Legal notice</a>
                            </li>
                            <li>
                                <a href="/tos">Terms and Conditions</a>
                            </li>
                        </MainNavList>
                    </LegalPrivacyNav>
                </MainNavArea>
            </MaxWidthWrapper>
            <SubfooterWrapper>
                <MaxWidthWrapper>
                    <Subfooter>
                        <Logo href="/">New Grid Times</Logo>
                        <Disclaimer>
                            © 2021 Fake Company Ltd. All Rights Reserved
                        </Disclaimer>
                    </Subfooter>
                </MaxWidthWrapper>
            </SubfooterWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.footer`
    color: var(--color-white);
    background: var(--color-gray-900);
    font-family: var(--font-family-sans-serif);
`;

const TopRow = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    color: var(--color-gray-300);
    font-size: 0.875rem;
    border-bottom: 1px solid var(--color-gray-700);
    padding: 24px 0;

    @media ${QUERIES.laptopAndUp} {
        flex-direction: row;
        justify-content: end;
        gap: 3rem;
    }
`;

const Social = styled.div`
    display: flex;
    gap: 24px;

    svg {
        display: block;
    }

    path {
        stroke-width: 1.5px;
    }
`;

const TopNavList = styled.ul`
    display: flex;
    gap: 16px;
`;

const DiscoverNav = styled.nav`
    grid-area: DiscoverNav;
`;

const RegionalWebNav = styled.nav`
    grid-area: RegionalWebNav;
`;

const CareersNav = styled.nav`
grid-area: CareersNav;
`;

const LegalPrivacyNav = styled.nav`
    grid-area: LegalPrivacyNav;
`;

const MainNavArea = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;
    padding: 32px 0 48px;
    text-align: center;

    @media ${QUERIES.laptopAndUp} {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        grid-template-areas:
        'DiscoverNav CareersNav RegionalWebNav LegalPrivacyNav';
        text-align: start;
    }
`;

const MainNavHeading = styled.h2`
    font-size: 1.125rem;
    font-weight: var(--font-weight-bold);
    color: var(--color-gray-300);
    margin-bottom: 8px;
`;

const MainNavList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 4px;
`;

const SubfooterWrapper = styled.div`
    background: var(--color-offblack);
    padding: 8px 0px;
    /* Optical alignment */
    padding-bottom: 16px;
`;

const Subfooter = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media ${QUERIES.laptopAndUp} {
        justify-self: start;
        align-items: start;
    }
`;

const Logo = styled.a`
    font-family: var(--font-family-logo);
    font-size: 2rem;
    color: var(--color-gray-100);
`;

const Disclaimer = styled.p`
    margin-top: -4px;
    font-size: 0.875rem;
    color: var(--color-gray-500);
`;

export default Footer;
