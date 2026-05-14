import React from 'react'
import ProductCardsComponent from '../pages/ProductCardsComponent'
import FeaturesCardsStrip from '../pages/FeatureCardsStripe'
import TrustedByComponent from '../pages/TrustedByComponent'

const MainContent = () => {
    return (
        <>
            <FeaturesCardsStrip />
            <ProductCardsComponent />
            <TrustedByComponent/>
        </>
    )
}

export default MainContent
