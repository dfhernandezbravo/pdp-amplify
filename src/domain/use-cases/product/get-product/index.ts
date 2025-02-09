import ProductService from '@services/product';

export const getColorsFromCms = async () => {
  try {
    const { data } = await ProductService.getColors();
    return data.value;
  } catch (error) {
    // const axiosError = error as AxiosError;
    // console.error(
    //   `getColorsFromCms service error: ${JSON.stringify(axiosError)}`,
    // );
    return null;
  }
};

export const getProduct = async (productId: number) => {
  try {
    const { data } = await ProductService.getProduct(productId);

    if (data?.colorCodes && data?.colorCodes.length > 0) {
      const colorsFromCms = await getColorsFromCms();

      return { ...data, colorPalettes: colorsFromCms };
    } else return data;
  } catch (error) {
    // const axiosError = error as AxiosError;
    // console.error(`getProduct service error: ${JSON.stringify(axiosError)}`);
    return null;
  }
};
