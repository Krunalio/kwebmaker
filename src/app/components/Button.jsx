export default function Button({ children, onClick, variant = "primary", className = "" }) {
  const baseClasses = "text-sm px-9 py-4 capitalize cursor-pointer rounded-full font-matter font-light hover:bg-opacity-90 transition-colors";
  
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-white text-black border border-gray-300",
    outline: "border-2 border-white text-white hover:bg-white hover:text-black"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
