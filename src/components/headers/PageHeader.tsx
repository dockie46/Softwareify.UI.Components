import MainHeader from './MainHeader'
import type { MainHeaderProps } from './MainHeader'

export type PageHeaderProps = Omit<MainHeaderProps, 'variant'>

const PageHeader = (props: PageHeaderProps) => <MainHeader variant="page" {...props} />

export default PageHeader
