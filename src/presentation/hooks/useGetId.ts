import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const useGetId = () => {
  const [productRefId, setProductRefId] = useState<null | string>(null);
  const [variantSkuId, setVariantSkuId] = useState<null | string>(null);
  const { query } = useRouter();
  const { department, skuId } = query as {
    department: string[];
    skuId: string;
  };

  useEffect(() => {
    if (department) {
      const query = department?.toString().split('-');
      const productSkuId = query?.[query?.length - 1].split('/')[0];
      setProductRefId(productSkuId);
    }
    if (skuId) setVariantSkuId(skuId as string);
  }, [department, skuId]);

  return {
    productRefId,
    variantSkuId,
  };
};

export default useGetId;
