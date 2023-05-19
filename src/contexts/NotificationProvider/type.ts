
export type NotificationType = 'success' | 'error' | 'warning';

export interface INotificationContext {
    message: string | null;
    type: NotificationType | null;
    showNotification: (message: string, type: NotificationType) => void;
    hideNotification: () => void;
  }

  
export interface INotificationProviderProps {
    children: React.ReactNode;
}