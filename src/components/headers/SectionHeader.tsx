import MainHeader from './MainHeader'
import type { MainHeaderProps } from './MainHeader'

export type SectionHeaderProps = Pick<MainHeaderProps, 'title' | 'filters' | 'actions'>

const SectionHeader = (props: SectionHeaderProps) => <MainHeader variant="section" {...props} />

export default SectionHeader
