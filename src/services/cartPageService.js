export const removeDuplicates = ({ paymentProduct }) =>
  Array.from(
    new Set(paymentProduct.map((item) => item.product.serialNumber))
  ).map((serialNumber) => {
    return paymentProduct.find(
      (item) => item.product.serialNumber === serialNumber
    );
  });
