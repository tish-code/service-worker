export interface INav {
  route: string;
  name: string;
}
export interface IProps {
  onNavOpen?: () => void;
  onNavClose?: () => void;
  open?: boolean;
  navMethods?: any;
}
