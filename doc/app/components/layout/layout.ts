export interface SiderMenu {
  type: 'submenu'|'group'|'item';
  title: string;
  route?: string;
  icon?: {
    type?: string;
    spin?: boolean;
    color?: string;
    theme?: string;
    rotate?: number;
    iconfont?: string;
  };
  children?: SiderMenu[];
}
