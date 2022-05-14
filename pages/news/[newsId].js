import {useRouter} from 'next/router';

const Detailspage =() => {
    const router = useRouter();
    const newsId = router.query.newsId;

    console.log(newsId);

    useRouter();
    return (
        <h2>The Details Page</h2> 
    )
}

export default Detailspage;