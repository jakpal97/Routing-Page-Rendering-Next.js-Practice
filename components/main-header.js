import Link from 'next/link'
import MainHeaderNav from './main-header-nav'

export default function MainHeader() {
	return (
		<header id="main-header">
			<div id="logo">
				<Link href="/">NextNews</Link>
			</div>
      <nav>
			<ul>
				<li>
					<MainHeaderNav href='/news' children='News' />
				</li>
				<li>
					<MainHeaderNav href='/archive' children='Archive' />
				</li>
			</ul>
		</nav>
		</header>
	)
}
