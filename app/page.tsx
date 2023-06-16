interface IquoteData {
  _id: string;
  content: string;
  author: string;
  tags: string[];
  authorSlug: string;
  length: number;
  dateAdded: string;
  dateModified: string;
}

const getData = async () => {
  //error handling - try catch
  try {
    const res = await fetch("https://api.quotable.io/random?tags=technology", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};
export default async function Home() {
  const quoteData: IquoteData = await getData();
  return (
    <>
      <div>{quoteData.content}</div>
    </>
  );
}