
import { CurrencyProvider } from "@/context/CurrencyContext";
import { WishlistProvider } from "@/context/WishlistContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CurrencyProvider>
      <WishlistProvider>
        {children}
      </WishlistProvider>
    </CurrencyProvider>
  );
}
