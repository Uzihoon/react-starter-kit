import styles from './Layout.module.scss';

interface LayoutProps {
  children: JSX.Element | JSX.Element[];
}

function Layout({}: LayoutProps) {
  return <div>Layout</div>;
}
export default Layout;
