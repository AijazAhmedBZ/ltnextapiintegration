// interface IquoteData {
//   _id: string;
//   content: string;
//   author: string;
//   tags: string[];
//   authorSlug: string;
//   length: number;
//   dateAdded: string;
//   dateModified: string;
// }

// const getData = async () => {
//   //error handling - try catch
//   try {
//     const res = await fetch("https://api.quotable.io/random?tags=technology", {
//       cache: "no-store",
//     });
//     if (!res.ok) {
//       throw new Error("Failed to fetch data");
//     }
//     return res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };
// export default async function Home() {
//   const quoteData: IquoteData = await getData();
//   return (
//     <>
//       <div>{quoteData.content}</div>
//     </>
//   );
// }

'use client';

import useSWR from 'swr'

const url = 'https://api.quotable.io/random?tags=technology';

const fetcher = (url: any) => fetch(url).then((res) => res.json());

export default function Page() {
  const {data, error, isLoading} = useSWR(url, fetcher);
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>
  return (
    <div>{data.content}</div>
  );
}