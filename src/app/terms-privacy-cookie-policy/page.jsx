import React from 'react';
import Policy from '@/components/termsPrivacyPolicy/Policy';

export const metadata = {
    title:"terms and conditions | NowIt"
}

const page = () => {
    return (
        <div className='py-10'>
            <section>
                <Policy />
            </section>
        </div>
    )
}

export default page
