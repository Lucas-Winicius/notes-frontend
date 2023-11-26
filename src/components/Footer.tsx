export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="text-center text-white py-4 font-semibold text-sm">
      Created and Maintained by Lucas - {year} &copy; All Rights Reserved
    </footer>
  );
}
