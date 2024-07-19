import NewsList from '@/components/news-llist'
import { DUMMY_NEWS } from '@/dummy-news'

export default function News() {
	return (
		<>
			<h1>News Page</h1>
			<NewsList news={DUMMY_NEWS} />
		</>
	)
}
