function SvgImage({ children, size }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`h-${size} w-${size}`}
      fill="solid"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      {children}
    </svg>
  );
}

export default SvgImage;
