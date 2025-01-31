import React from 'react';
import styled from 'styled-components/macro';

import {MARKET_DATA, SPORTS_STORIES} from '../../data';

import MarketCard from '../MarketCard';
import SectionTitle from '../SectionTitle';
import MiniStory from '../MiniStory';
import {QUERIES} from "../../constants";

const SpecialtyStoryGrid = () => {
    return (
        <Wrapper>
            <MarketsSection>
                <SectionTitle
                    cornerLink={{
                        href: '/markets',
                        content: 'Visit Markets data »',
                    }}
                >
                    Markets
                </SectionTitle>
                <MarketCards>
                    {MARKET_DATA.map((data) => (
                        <MarketCard key={data.tickerSymbol} {...data} />
                    ))}
                </MarketCards>
            </MarketsSection>
            <SportsSection>
                <SectionTitle cornerLink={{
                        href: '/sports',
                        content: 'Visit Sports page »',
                    }}>
                    Sports
                </SectionTitle>
                <SportsStories>
                    {SPORTS_STORIES.map((data) => (
                        <MiniStory key={data.id} {...data} />
                    ))}
                </SportsStories>
            </SportsSection>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: grid;
    gap: 48px;

    @media ${QUERIES.laptopAndUp} { {
        display: inline-flex;
    }
    
`;

const MarketsSection = styled.section`
`;

const MarketCards = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
    
    @media ${QUERIES.laptopAndUp} { {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const SportsSection = styled.section`
    display: grid;
    grid-template-columns: 1fr;    
`;

const SportsStories = styled.div`
    display: flex;
    gap: 0.5rem;
    max-width: 100%;
    overflow-x: auto;
`;

export default SpecialtyStoryGrid;
