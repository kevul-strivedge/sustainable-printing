import ProductCardsComponent from '../pages/ProductCardsComponent'
import FeaturesCardsStrip from '../pages/FeatureCardsStripe'
import TrustedByComponent from '../pages/TrustedByComponent'
import BannerComponent from '../pages/BannerComponent'

const MainContent = () => {
    return (
        <>
            <BannerComponent
                image="/images/BannerImage3.png"
                heading="Printing that won't cost the earth."
                headingColor="#1e4620"
                className="h-[520px]"
                alt="Home page hero banner"
                buttons={[
                    { label: "Shop all Products", href: "/products", variant: "outline" },
                    { label: "Order a Sample Pack", href: "/requestsample", variant: "primary" },
                ]}
            />
            <FeaturesCardsStrip />
            <ProductCardsComponent />
            <TrustedByComponent />
            <BannerComponent
                image="/images/bannerImage2.png"
                heading="Want to see your options?"
                className="h-[350px]"
                alt="Sample pack option 1 of home page" 
                buttons={[
                    { label: "Order a Sample Pack", href: "/requestsample" },
                ]}
            />

        </>
    )
}

export default MainContent
