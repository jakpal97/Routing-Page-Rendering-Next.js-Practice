export default function NewsDetailPage({ params }) {
	const newsId = params.id
    console.log(newsId)

	return (
		<>
			<h1> News detail Page</h1>
            <p>news id : {newsId}</p>
		</>
	)
}
