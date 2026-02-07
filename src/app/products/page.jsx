import React from 'react';
import Products1 from "../../components/Products/Products1"
import Products2 from "../../components/Products/Products2"
import Products3 from "../../components/Products/Products3"
import Products4 from "../../components/Products/Products4"
import PartnerBanner from '@/components/shared/UI-Elements/Partner-Banner';

export const metadata = {
  title: "Products | NowIt"
};

const Page = () => {
    return (
        <main className="relative w-full bg-white">

            <section>
                <Products1 />
            </section>
            <section>
                <Products2 />
            </section>

            <section>
                <Products3 />
            </section>
            <section>
                <Products4 />
            </section>
            <section>
                <PartnerBanner />
            </section>
        </main>
    );
};

export default Page;