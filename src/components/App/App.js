import React, {useEffect, useState} from 'react';

import Header from '../Header';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Footer from '../Footer';
import Spacer from '../Spacer';
import MainStoryGrid from '../MainStoryGrid';
import SpecialtyStoryGrid from '../SpecialtyStoryGrid';

const App = () => {

    const useSize = () => {
        const [windowSize, setWindowSize] = useState(window.innerWidth);

        useEffect(() => {
            const windowSizeHandler = () => {
                setWindowSize(window.innerWidth);
            };
            window.addEventListener("resize", windowSizeHandler);

            return () => {
                window.removeEventListener("resize", windowSizeHandler);
            };
        }, []);

        return windowSize;
    };

    const windowsize = useSize();

    return (
        <>
            {windowsize}
            <Header/>
            <MaxWidthWrapper as="main">
                <MainStoryGrid/>
                <SpecialtyStoryGrid/>
            </MaxWidthWrapper>
            <Spacer size={64}/>
            <Footer/>
        </>
    );
};

export default App;
