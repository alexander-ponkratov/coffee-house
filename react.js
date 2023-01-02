function App() {
    const Container = window.styled.div`
        max-width: ${props => props.maxWidth};
    `
    const GridCol = window.styled.div`
        display: ${props => props.disp};
        grid-template-columns: ${props => props.gridTemplateColumns};
    `
    return (
        <header>
            <Container className='container' maxWidth="1200px">
                <GridCol disp="grid" gridTemplateColumns="auto auto auto">123</GridCol>
            </Container>
        </header>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));