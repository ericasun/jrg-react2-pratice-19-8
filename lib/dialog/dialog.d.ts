import React, { ReactElement } from 'react';
import './dialog.scss';
interface Props {
    visible: boolean;
    buttons?: Array<ReactElement>;
    onClose: React.MouseEventHandler;
    closeOnClickMask?: boolean;
    enableMask?: boolean;
}
declare const Dialog: React.FunctionComponent<Props>;
declare const modal: (content: React.ReactNode, buttons?: React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>[] | undefined, afterClose?: (() => void) | undefined) => () => void;
declare const alert: (content: string) => void;
declare const confirm: (content: string, yes?: (() => void) | undefined, no?: (() => void) | undefined) => void;
export { alert, confirm, modal };
export default Dialog;
