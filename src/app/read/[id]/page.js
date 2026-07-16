export default async function Read(props) {
  console.log("Read Page 작동");

  const { id } = await props.params;

  return (
    <>
      <h2>Read</h2>

      <p>parameter:{id}</p>
    </>
  );
}
