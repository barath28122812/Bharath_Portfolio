import { createContext, useContext, useState } from 'react'

type ChatContextValue = { open: boolean; openChat: () => void; closeChat: () => void }
const ChatContext = createContext<ChatContextValue>({
  open: false,
  openChat: () => {},
  closeChat: () => {},
})

export function useChat() {
  return useContext(ChatContext)
}

export function ChatProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  return (
    <ChatContext.Provider
      value={{
        open,
        openChat: () => setOpen(true),
        closeChat: () => setOpen(false),
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}
