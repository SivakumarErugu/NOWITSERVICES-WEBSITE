'use client';

import { useEffect } from 'react';
import { useNowit } from '@/store/useNowit';

import Products1 from '@/components/Products/Products1';
import Products2 from '@/components/Products/Products2';
import Products3 from '@/components/Products/Products3';
import Products4 from '@/components/Products/Products4';
import PartnerBanner from '@/components/shared/UI-Elements/Partner-Banner';

const ProductsContent = () => {
  const { setPageKey, isReady } = useNowit();

  // ✅ Stable page key for Products
  useEffect(() => {
    setPageKey('products');
  }, [setPageKey]);

  // ✅ Wait for translations
  if (!isReady) return null; // or <Loading />

  return (
    <main className="relative w-full bg-white">
      <section>
        <Products1 />
      </section>

      <section>
        <Products2 />
      </section>

      <section id="myProducts">
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

export default ProductsContent;