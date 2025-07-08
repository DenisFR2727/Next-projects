import '../../globals.css';

export default function NewsDetailLayout({ children, modal }) {
    return (
        <>
            {modal}
            {children}
        </>
    );
}
