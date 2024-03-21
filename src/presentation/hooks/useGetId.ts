import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useGetId = () => {
  const [productRefId, setProductRefId] = useState<null | string>(null);
  const [variantSkuId, setVariantSkuId] = useState<null | string>(null);
  const router = useRouter();

  useEffect(() => {
    if (router?.query?.department) {
      const department = router?.query?.department as string[];
      const query = department?.toString().split('-');
      const skuId = query?.[query?.length - 1].split('/')[0];
      setProductRefId(skuId);
    }
    if (router?.query?.skuId) {
      const skuId = router?.query?.skuId;
      setVariantSkuId(skuId as string);
    }
  }, [router]);

  return {
    productRefId,
    variantSkuId,
  };
};

export default useGetId;
