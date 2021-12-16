import { useRouter } from 'next/router';

// our-domain.com/news/

function DetailsPage () {
    const router = useRouter();

    console.log(router.query.newsId);
    return <h1>The dEtailed Page</h1>
}

export default DetailsPage;