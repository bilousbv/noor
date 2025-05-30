import React from 'react'

const Hero = () => (
    <section className="bg-[#f8ede5]">
        <div className="max-w-3xl lg:max-w-[80rem] mx-auto text-center px-[0.938rem] flex flex-col items-center lg:flex-row lg:items-end lg:gap-2.5">
            <div className="xs:w-[60vw] py-[0.938rem] xs:py-[1.875rem]">
                <div className="flex items-center justify-center gap-[0.625rem] mb-2 xs:mb-5">
                    <img src="/stars.webp" alt="Stars" className="w-[3.75rem] xs:w-[4.375rem]"/>
                    <span className="font-gotham text-left text-[#4b4b4b] text-base">103,743+ Happy Noor Customers!</span>
                </div>
                <h1 className="font-roboto flex flex-col font-bold mt-2 lg:inline">
                    <span className="text-[#556037] text-[1.375rem]/[1.3] lg:text-[2.5rem]/[1.3] lg:inline">The Korean Needle-Free Botox Alternative:</span>
                    <span className="text-black text-2xl/[1.4] lg:text-[2.5rem]/[1.3] lg:inline"> Lift Deep Wrinkles and Revives a Youthful, Natural Look... In a Few Days*</span>
                </h1>
                <img src="/noor.webp" alt="Noor Product" className="w-full xs:hidden" />
                <ul className="font-gotham text-left xs:text-center text-base/[1.4] xs:text-xl/[1.4] text-[#333] my-4 xs:my-5">
                    <li className="before-check lg:mb-0.5">Visible Results in as little as 2-4 Days*</li>
                    <li className="before-check lg:mb-0.5">Relaxes muscles without any risk*</li>
                    <li className="before-check lg:mb-0.5">Powered by Syn-Ake™ Peptide: Clinically shown to reduce wrinkle depth by 52% in 28 days¹</li>
                    <li className="before-check lg:mb-0.5">Works For All Skin Types At Any Age*</li>
                    <li className="before-check lg:mb-0.5">Hydrating + Skin-Firming Without Fillers or Freezing</li>
                </ul>
                <div className="flex flex-col items-center gap-2 pb-5 xs:pb-0">
                    <a href="https://noorhairoffers.com/skin-cream/offers" target="_blank" className="font-roboto bg-[#556037] text-white font-bold py-3 px-5 rounded-[0.625rem] text-xl/[1.4]">
                        50% OFF FOR EXISTING CUSTOMERS!
                    </a>
                    <span className="font-gotham text-xs/[1.75rem]">100% Satisfaction. 180-Day Money Back Guarantee</span>
                    <img src="/payment-methods.png" alt="Payment Methods" className="h-[1.313rem] object-contain"/>
                </div>

            </div>
            <div className="hidden xs:block w-[70vw]">
                <img src="/noor.webp" alt="Noor Product" className="w-full" />
            </div>
        </div>
    </section>
);

export default Hero
