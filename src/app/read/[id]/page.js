export default async function Read(props) {
  console.log("Read Page 작동");

  const { id } = await props.params;
  const response = await fetch(`http://localhost:9999/topics/${id}`);
  const topics = await response.json();

  return (
    <>
      <h2>{topics.title}</h2>

      <p>{topics.message}</p>
    </>
  );
}
