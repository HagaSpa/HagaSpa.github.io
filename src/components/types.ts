import { LucideIcon } from 'lucide-react';

// カスタムSVGアイコンの型定義
export type CustomIcon = React.ComponentType<React.SVGProps<SVGSVGElement>>;

// アイコンの型（lucide-reactアイコンまたはカスタムSVGアイコン）
export type IconType = LucideIcon | CustomIcon;

// コンタクトアイテムの型定義
export type ContactItem = {
  icon: IconType;
  text: string;
  href: string;
}; 
