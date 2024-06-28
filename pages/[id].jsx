import Profile from '@/src/component/app/Profile/Profile';
import { useRouter } from 'next/router';

export default function Home({ data }) {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Profile datas={data} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.query;
  
  try {
    // Fetch data from external API
    const res = await fetch(`https://easy-8dfcbe39d61b.herokuapp.com/cards/visit/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    // Parse JSON data
    const data = await res.json();

    // Pass data to the component props
    return {
      props: {
        data
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);
    return {
      props: {
        data: null  // You can handle errors gracefully here
      }
    };
  }
}
