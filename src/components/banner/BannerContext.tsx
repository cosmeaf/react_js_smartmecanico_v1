// BannerContext.tsx
import React, { createContext, useState, useCallback, ReactNode } from 'react';
import { BannerType } from './BannerType';

type BannerContextType = {
  banner: BannerType | null;
  showBanner: (type: BannerType['type'], message: string, to: string) => void;
  hideBanner: () => void;
}

export const BannerContext = createContext<BannerContextType>({
  banner: null,
  showBanner: () => {},
  hideBanner: () => {},
});

type BannerProviderProps = {
  children: ReactNode;
};

export const BannerProvider: React.FC<BannerProviderProps> = ({ children }) => {
  const [banner, setBanner] = useState<BannerType | null>(null);

  const showBanner = useCallback((type: BannerType['type'], message: string, to: string) => {
    setBanner({ type, message, to });
  }, []);

  const hideBanner = useCallback(() => {
    setBanner(null);
  }, []);

  return (
    <BannerContext.Provider value={{ banner, showBanner, hideBanner }}>
      {children}
    </BannerContext.Provider>
  );
}
