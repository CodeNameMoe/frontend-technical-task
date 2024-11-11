"use client";

import { motion } from "framer-motion";
import { useToggle } from "@/src/context/toggle-context";

export function ProgressBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state } = useToggle();
  const totalGroups = state?.currentQuestion?.toggleGroups.length || 0;
  const progress = state.correctCount / totalGroups;

  return (
    <motion.div
      className="min-h-screen w-full transition-colors duration-500"
      animate={{
        backgroundColor: `hsl(${progress * 120}, 70%, 95%)`,
      }}
    >
      {children}
    </motion.div>
  );
}
