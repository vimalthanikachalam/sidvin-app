import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const LayoutWrapperInnerView = (props: Props) => {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
        key={router.route}
        className="application__wrapper"
      >
        {props.children}
      </motion.div>
    </AnimatePresence>
  );
};

LayoutWrapperInnerView.displayName = "PageTransition";
export const LayoutWrapper = React.memo(LayoutWrapperInnerView);
