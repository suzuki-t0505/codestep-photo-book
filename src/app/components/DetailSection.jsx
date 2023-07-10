import Image from "next/image";
import detail from '../../../public/detail.jpg';
import { DetailInfoList } from "./DetailInfoList";
import { SectionInner } from "./SectionInner";
import { SectionTitle } from "./SectionTitle";

export const DetailSection = () => {
  const detailInfos = [
    {
      section: '著者',
      body: 'タイトルタイトルタイトル'
    },
    {
      section: '出版社',
      body: 'タイトルタイトルタイトル'
    },
    {
      section: '発行年',
      body: 'タイトルタイトルタイトル'
    }
  ]

  return (
    <section className='m-16 mb-32'>
      <SectionInner>
        <SectionTitle>DETAIL</SectionTitle>
        <div className='flex max-[1024px]:flex-col gap-x-16 mt-3.5'>
          <Image
            src={detail}
            alt='detail image'
            width={270}
            height={270}
            className='w-72 h-72 max-[1024px]:w-full max-[1024px]:h-full'
            />
          <div className='max-[1024px]:mt-7'>
            <h4 className='text-lg font-bold pb-7 border-b-2'>タイトルタイトルタイトル</h4>
            <dl className='flex flex-wrap py-5 text-sm justify-between border-b-2'>
              {detailInfos.map(info => <DetailInfoList info={info} />)}
            </dl>
            <p className='mt-5 text-sm'>テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト</p>
            <a href='#' className='text-sm inline-block pb border-b border-gray-600 mt-5'>オンラインストアで見る</a>
          </div>
        </div>
      </SectionInner>
    </section>
  )
}