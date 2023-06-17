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

// 'use client';

// import useSWR from 'swr'

// const url = 'https://api.quotable.io/random?tags=technology';

// const fetcher = (url: any) => fetch(url).then((res) => res.json());

// export default function Page() {
//   const {data, error, isLoading} = useSWR(url, fetcher);
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return (
//     <div>{data.content}</div>
//   );
// }

import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { sys } from 'typescript';

const inter = Inter({ subsets: ['latin'] })

async function getBlogs() {
  const res = await fetch(`https://cdn.contentful.com/spaces/ivnlaipngno9/entries?access_token=wDG2mBi2UFj-6rXU1xfh58rOODD3BJxBDGYVUk8otPQ&content_type=blog`, {cache:'no-store'});
  
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <div>
      {
        blogs.items.map((item: any) => (
          <>
            <div key={item.sys.id}>{item.fields.title}</div>
            <div>{documentToReactComponents(item.fields.body)}</div>
            <div>{blogs.includes.Asset.map((a: any) => (
              <div>
                {item.fields.image.sys.id == a.sys.id? 
                <Image src={"https:" + a.fields.file.url} alt="" width="100" height="100"/>: <div></div>}
              </div>
            ))}
            </div>
            <div>{blogs.includes.Entry.map((entry: any) => (
              <div>
                {item.fields.author.sys.id == entry.sys.id? 
                <div>Author: {entry.fields.name}</div>: <div></div>}
              </div>
            ))}
            </div>
          </>
      ))}
    </div>
  )
}