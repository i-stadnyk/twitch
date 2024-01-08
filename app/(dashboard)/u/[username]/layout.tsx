import { redirect } from 'next/navigation'

import { getSelfByUsername } from '@/lib/auth-service'

import Navbar from '@/app/(dashboard)/u/[username]/_components/navbar'
import DashboardSidebar from '@/app/(dashboard)/u/[username]/_components/sidebar'
import { Container } from '@/app/(dashboard)/u/[username]/_components/container'

interface CreatorLayoutProps {
	params: { username: string }
	children: React.ReactNode
}

const CreatorLayout = async ({ params, children }: CreatorLayoutProps) => {
	const self = await getSelfByUsername(params.username)
	if (!self) redirect('/')
	return (
		<>
			<Navbar />
			<div className='flex h-full pt-20'>
				<DashboardSidebar />
				<Container>{children}</Container>
			</div>
		</>
	)
}

export default CreatorLayout
