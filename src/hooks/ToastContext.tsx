import { Color } from '@material-ui/lab';
import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import ToastContainer from '../Components/ToastContainer';

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}
export interface ToastMessage {
  id: string;
  type: Color | undefined;
  title: string;
  description: string;
}
const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);
  function addToast({ type, title, description }: Omit<ToastMessage, 'id'>) {
    const id = uuid();
    const toast = {
      id,
      type,
      title,
      description,
    };
    setMessages((oldMessages) => [...oldMessages, toast]);
  }

  const removeToast = useCallback((id: string) => {
    setMessages((state) => state.filter((message) => message.id !== id));
  }, []);
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};
function useToast(): ToastContextData {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
}

export { ToastProvider, useToast };
