import React from 'react';

import Services1 from '@/components/Services/Services1';
import Services2 from '@/components/Services/Services2';
import Services3 from '@/components/Services/Services3';
import Services4 from '@/components/Services/Services4';
import Services5 from '@/components/Services/Services5';
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
                <Services3 />
            </section>
            <section>
                <Services4/>
            </section>
            <section>
                <Services5/>
            </section>
            <section>
                <BusinessBanner />
            </section>

        </main>
    );
};

export default Page;