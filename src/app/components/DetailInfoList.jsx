export const DetailInfoList = (props) => {
  return (
    <>
      <dt className='w-3/12'>{props.info.section}</dt>
      <dd className='w-9/12'>{props.info.body}</dd>
    </>
  )
}