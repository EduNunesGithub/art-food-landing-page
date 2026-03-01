"use client";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  Description,
} from "@headlessui/react";
import { X } from "lucide-react";
import { LeadForm } from "@/components/lead-form";
import { useLeadDialog } from "@/providers/lead-dialog-provider";

export function LeadDialog() {
  const { closeLeadDialog, isOpen } = useLeadDialog();

  return (
    <Dialog className="relative z-50" onClose={closeLeadDialog} open={isOpen}>
      <DialogBackdrop className="bg-black/50 fixed inset-0 z-40" />

      <div className="fixed flex inset-0 items-center justify-center p-4 z-50">
        <DialogPanel className="bg-white flex flex-col gap-6 max-w-md p-6 rounded-xl w-full">
          <div className="flex flex-row items-start justify-between">
            <div className="flex flex-col gap-1">
              <DialogTitle className="font-semibold text-lg">
                Entrar na lista de espera
              </DialogTitle>
              <Description className="text-gray-500 text-sm">
                Avisaremos assim que o produto lançar.
              </Description>
            </div>

            <button
              aria-label="Fechar"
              className="hover:text-gray-600 mt-0.5 text-gray-400"
              onClick={closeLeadDialog}
            >
              <X size={20} />
            </button>
          </div>

          <LeadForm onSuccess={closeLeadDialog} />
        </DialogPanel>
      </div>
    </Dialog>
  );
}
