import Toggle from '@/app/(browse)/_components/sidebar/toggle'
import Wrapper from '@/app/(browse)/_components/sidebar/wrapper'
import Recommended, {
	RecommendedSkeleton
} from '@/app/(browse)/_components/sidebar/recommended'

import { getRecommended } from '@/lib/recommended-service'

const Sidebar = async () => {
	const recommended = await getRecommended()

	return (
		<Wrapper>
			<div className='space-y-4 pt-4 lg:pt-0'>
				<Toggle />
				<Recommended data={recommended} />
			</div>
		</Wrapper>
	)
}

export default Sidebar

export const SidebarSkeleton = () => {
	return (
		<aside className='fixed left-0 flex flex-col w-[70px] lg:w-60 h-full bg-background border-r border-[#2D2E35] z-50'>
			<RecommendedSkeleton />
		</aside>
	)
}
