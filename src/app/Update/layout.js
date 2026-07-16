export default function Layout({ children }) {
  console.log("Update Page 작동");

  return (
    <form>
      <h2>Update Page</h2>

      {children}
    </form>
  );
}
