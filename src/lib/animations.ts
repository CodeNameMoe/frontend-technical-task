export const toggleVariants = {
  selected: {
    x: "100%",
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 30 
    }
  },
  unselected: {
    x: "0%",
    transition: { 
      type: "spring", 
      stiffness: 400, 
      damping: 30 
    }
  }
};

export const buttonVariants = {
  hover: { scale: 1.02 },
  tap: { scale: 0.98 },
  disabled: { opacity: 0.7 }
}; 