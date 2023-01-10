import zustand from 'zustand'

interface HeaderMenuData {
  isOpen: boolean
  handleToggleMenu(): void
}

export const useHeaderMenu = zustand<HeaderMenuData>()(set => ({
  isOpen: false,
  handleToggleMenu() {
    set(store => ({ isOpen: !store.isOpen }))
  },
}))
