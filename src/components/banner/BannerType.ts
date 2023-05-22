// src/components/banner/BannerType.ts
export type BannerType = {
    type: 'info' | 'warning' | 'error' | 'success',
    message: string,
    to?: string,
  };
  