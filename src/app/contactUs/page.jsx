import React from 'react';
import ContactUs1 from '@/components/ContactUs/ContactUs1';
import ContactUs2 from '@/components/ContactUs/ContactUs2';


const Page = () => {
    return (
        <main className="relative w-full bg-white">

            <section className=" px-1 py-1 lg:px-10">
                <ContactUs1 />
            </section>
            <section>
                <ContactUs2 />
            </section>

        </main>
    );
};

export default Page;