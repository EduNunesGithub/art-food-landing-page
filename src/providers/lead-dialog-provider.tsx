"use client";

import { createContext, useCallback, useContext, useState } from "react";

interface LeadDialogContextValue {
  closeLeadDialog: () => void;
  isOpen: boolean;
  openLeadDialog: () => void;
}

const LeadDialogContext = createContext<LeadDialogContextValue | null>(null);

export function LeadDialogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const closeLeadDialog = useCallback(() => setIsOpen(false), []);
  const openLeadDialog = useCallback(() => setIsOpen(true), []);

  return (
    <LeadDialogContext.Provider
      value={{ closeLeadDialog, isOpen, openLeadDialog }}
    >
      {children}
    </LeadDialogContext.Provider>
  );
}

export function useLeadDialog() {
  const context = useContext(LeadDialogContext);
  if (!context) {
    throw new Error(
      "useLeadDialog deve ser usado dentro de LeadDialogProvider",
    );
  }
  return context;
}
