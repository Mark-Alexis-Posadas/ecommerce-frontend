import { useMutation } from "@tanstack/react-query";
import { addToCartAPI } from "@/services/cart.service";
import { useCartStore } from "@/store/useCartStore";

export const useAddToCart = () => {
  const addToCartLocal = useCartStore((state) => state.addToCart);

  return useMutation({
    mutationFn: ({
      productId,
      quantity,
      product,
    }: {
      productId: string;
      quantity: number;
      product: any;
    }) => addToCartAPI(productId, quantity),

    onSuccess: (_, variables) => {
      // 👉 update local cart after API success
      addToCartLocal(variables.product);
    },
  });
};
