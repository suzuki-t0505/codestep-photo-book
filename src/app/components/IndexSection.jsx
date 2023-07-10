import { SectionInner } from "./SectionInner";
import { SectionTitle } from "./SectionTitle";

export const IndexSection = () => {
  const indexBody = 'タイトルタイトルタイトルタイトルタイトルタイトルタイトルタイトル';
  const indexContents = [indexBody, indexBody, indexBody, indexBody, indexBody];
  return (
    <section className='bg-white m-16 py-9'>
      <SectionInner>
        <SectionTitle>INDEX</SectionTitle>
        <ol className='list-decimal ml-5'>
        {
          indexContents.map(content => <li className='mt-7 first:mt-4 text-sm'>{content}</li>)
        }
        </ol>
      </SectionInner>
    </section>
  )
}