import Link from 'next/link'

type Props = {
  params: { categoryName: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params, searchParams }: Props) {
  console.log(params)
  console.log(searchParams)
  const page = typeof searchParams.page === 'string' ? searchParams.page : '1'
  return (
    <>
      <h1>カテゴリー一覧画面</h1>
      <h2>カテゴリー「{params.categoryName}」</h2>
      <p>ページ番号:「{page}」</p>
      <Link href="/">TOP</Link>
    </>
  )
}
