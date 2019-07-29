import React, { ReactElement } from 'react';
import './layout.scss';
interface Props extends React.HtmlHTMLAttributes<HTMLElement> {
    children: ReactElement | Array<ReactElement>;
}
declare const Layout: React.FunctionComponent<Props>;
export default Layout;
export { Layout };
export { default as Header } from './header';
export { default as Content } from './content';
export { default as Footer } from './footer';
export { default as Aside } from './aside';
