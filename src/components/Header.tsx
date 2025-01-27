function Header(props: {title: string}) {
    return (
        <header style={styles.header}>
            <h1 style={styles.headerH1}>{props.title}</h1>
        </header>
    );
};

const styles = {
    header: {
        width: '100%',
        height: '30vw',
        minHeight: '180px',
        maxHeight: '300px',
        backgroundImage: 'url("/banner_mountain.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        color: '#3d4962',
        paddingTop: '20px',
    },
    headerH1: {
        fontWeight: '400',
    }
};

export default Header;