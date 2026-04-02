import { ReactNode } from 'react';
type HeroHeaderCardProps = {
    avatar?: ReactNode;
    title: ReactNode;
    subtitle?: ReactNode;
    meta?: ReactNode;
    rightContent?: ReactNode;
    brandPrimary?: string;
    cardGradient?: string;
};
declare const HeroHeaderCard: ({ avatar, title, subtitle, meta, rightContent, brandPrimary, cardGradient, }: HeroHeaderCardProps) => import("react/jsx-runtime").JSX.Element;
export default HeroHeaderCard;
