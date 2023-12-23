import { cn } from '@/lib/utils'

interface LiveBadgeProps {
	className?: string
}
const LiveBadge = ({ className }: LiveBadgeProps) => {
	return (
		<div className='absolute -bottom-3 left-1/2 transform -translate-x-1/2'>
			<div
				className={cn(
					'bg-red-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide',
					className
				)}
			>
				Live
			</div>
		</div>
	)
}

export default LiveBadge
