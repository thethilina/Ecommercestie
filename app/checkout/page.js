"use client";

import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkout-action";

export default function CheckoutPage() {
  const { items, removeItem, addItem } = useCartStore();
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col gap-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>


      <div className="max-w-4xl mx-auto border rounded-lg shadow p-6 flex flex-col gap-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row justify-between items-center gap-4 border-b pb-4"
          >
            <div className="flex items-center gap-4">
              {item.imageUrl && (
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="h-20 w-20 object-cover rounded"
                />
              )}
              <span className="font-medium text-lg">{item.name}</span>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="px-3 py-1 border rounded hover:bg-gray-100"
                onClick={() => removeItem(item.id)}
              >
                –
              </button>
              <span className="text-lg font-semibold">{item.quantity}</span>
              <button
                className="px-3 py-1 border rounded hover:bg-gray-100"
                onClick={() => addItem({ ...item, quantity: 1 })}
              >
                +
              </button>
            </div>

            <div className="text-lg font-semibold">
              ${(item.price * item.quantity / 100).toFixed(2)}
            </div>
          </div>
        ))}

        <div className="flex justify-between items-center mt-4 pt-4 border-t text-xl font-bold">
          <span>Total:</span>
          <span>${(total / 100).toFixed(2)}</span>
        </div>
      </div>

   
      <form action={checkoutAction} className="max-w-4xl mx-auto">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <button
          type="submit"
          className="w-full px-4 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 mt-4"
        >
          Proceed to Payment
        </button>
      </form>
    </div>
  );
}
