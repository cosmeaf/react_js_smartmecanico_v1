import React, { createContext, useState, useCallback } from 'react';
import { INotificationContext, INotificationProviderProps, NotificationType } from './type';

export const NotificationContext = createContext<INotificationContext>({
  message: null,
  type: null,
  showNotification: () => {},
  hideNotification: () => {},
});

export const NotificationProvider: React.FC<INotificationProviderProps> = ({ children }) => {
  
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<NotificationType | null>(null);

  const showNotification = useCallback((message: string, type: NotificationType) => {
    setMessage(message);
    setType(type);
    setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 5000);
  }, []);

  const hideNotification = useCallback(() => {
    setMessage(null);
    setType(null);
  }, []);

  return (
    <NotificationContext.Provider value={{ message, type, showNotification, hideNotification }}>
      {children}
    </NotificationContext.Provider>
  );
};
