import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAddProductStore = create(
  persist(
    (set, get) => ({
      currentProduct: {},
      recentAddedProduct: [],
      setCurrentProduct: (product) => set({ currentProduct: product }),
      resetCurrentProduct: () => set({ currentProduct: {} }),
      removeImage: (imageIndex) => {
        const { currentProduct } = get();
        const updatedImages = currentProduct?.images;
        updatedImages.splice(imageIndex, 1);
        set({ currentProduct: { ...currentProduct, images: updatedImages } });
      },
      updateCurrentProduct: (value, key) => {
        const { currentProduct } = get();
        set({ currentProduct: { ...currentProduct, [key]: value } });
      },
      setCurrentProductImages: (images) => {
        const { currentProduct } = get();
        set({
          currentProduct: {
            ...currentProduct,
            images: currentProduct.images
              ? [...currentProduct.images, ...images]
              : images,
          },
        });
      },
      addProductToRecentProducts: (newProduct) => {
        const { recentAddedProduct } = get();
        const updatedRecentAddedProduct = [...recentAddedProduct, newProduct];

        set({ recentAddedProduct: updatedRecentAddedProduct });
      },
      removeProductFromRecentProducts: (currentProductSerialNumber) => {
        const { recentAddedProduct } = get();
        const updatedProducts = recentAddedProduct.filter((product) => {
          const { serialNumber } = product;
          return serialNumber !== currentProductSerialNumber;
        });

        set({ recentAddedProduct: updatedProducts });
      },
      setCurrentProductFromRecent: (recentProduct) => {
        set({ currentProduct: recentProduct });
      },
    }),
    {
      name: 'addProduct',
    }
  )
);
