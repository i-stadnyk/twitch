import Toggle from '@/app/(browse)/_components/sidebar/toggle'
import Wrapper from '@/app/(browse)/_components/sidebar/wrapper'
import Recommended from '@/app/(browse)/_components/sidebar/recommended'

import { getRecommended } from '@/lib/recommended-service'

const Sidebar = async () => {
	const recommended = await getRecommended()

	return (
		<Wrapper>
			<Toggle />
			<Recommended data={recommended} />
		</Wrapper>
	)
}

export default Sidebar
