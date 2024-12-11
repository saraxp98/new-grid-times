import React from 'react';
import styled from 'styled-components/macro';
import {Menu, Search, User} from 'react-feather';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import {QUERIES, WEIGHTS} from "../../constants";
import Button from "../Button";

const Header = () => {
    return (
        <header>
            <SuperHeader>
                <Row>
                    <ActionGroup>
                        <button>
                            <Search size={24}/>
                        </button>
                        <button>
                            <Menu size={24}/>
                        </button>
                    </ActionGroup>
                    <ActionGroup>
                        <button>
                            <User size={24}/>
                        </button>
                    </ActionGroup>
                </Row>
            </SuperHeader>

            <MainHeader>
                <ActionGroup>
                    <button>
                        <Search size={24}/>
                    </button>
                    <button>
                        <Menu size={24}/>
                    </button>
                </ActionGroup>

                <Logo/>

                <SubscribeSection>
                    <SubscribeButton>
                        Subscribe
                    </SubscribeButton>
                    <SubscriberLink>
                        Already a subscriber?
                    </SubscriberLink>
                </SubscribeSection>
            </MainHeader>
        </header>
    );
};

const SuperHeader = styled.div`
    padding: 16px 0;
    background: var(--color-gray-900);
    color: white;

    @media ${QUERIES.desktopAndUp} {
        display: none;
    }
`;

const Row = styled(MaxWidthWrapper)`
    display: flex;
    justify-content: space-between;
    
`;

const ActionGroup = styled.div`
    display: flex;
    gap: 24px;

    /*
      FIX: Remove the inline spacing that comes with
      react-feather icons.
    */
    svg {
        display: block;
    }
`;

const MainHeader = styled(MaxWidthWrapper)`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 48px;

    &>div:first-of-type {
        display: none;
    }
    
    @media ${QUERIES.desktopAndUp} {
        margin-top: 1rem;
        margin-inline: 7.5rem;
        justify-content: space-between;
        padding: 0;

        &>div:first-of-type {
            display: flex;
        }
    }
`;

const SubscribeSection = styled.div`
    display: none;
    flex-direction: column;
    max-width: fit-content;
    gap: 0.5rem;
    
    @media ${QUERIES.desktopAndUp} {
        display: flex;
    }
    
`;

const SubscribeButton = styled(Button)`
    max-width: 9rem;
    max-height: 2.5rem;
`;

const SubscriberLink = styled.a`
    font-size: 0.9rem;
    font-style: italic;
    line-height: 1.4rem;
    font-weight: ${WEIGHTS.normal};
    text-decoration: underline;
    text-align: center;
`;

export default Header;
