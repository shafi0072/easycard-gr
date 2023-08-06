
import Profile from '@/src/component/app/Profile/Profile'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
export default function Home() {
  const router = useRouter()
  const { id } = router.query
  return (
    <>
      <Profile id={id} />
    </>
  )
}
