import React from 'react';

import Services1 from '@/components/Services/Services1';
import Services2 from '@/components/Services/Services2';
import BusinessBanner from '@/components/shared/UI-Elements/Business-Banner';


const Page = () => {
    return (
        <main className="relative w-full bg-white">
            <section>
                <Services1 />
            </section>
            <section>
                <Services2 />
            </section>
            <section>
                <BusinessBanner />
            </section>

        </main>
    );
};

export default Page;