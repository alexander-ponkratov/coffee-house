function App() {
    const Container = window.styled.div`
        max-width: ${props => props.maxWidth};
    `
    const GridCol = window.styled.div`
        display: ${props => props.disp};
        grid-template-columns: ${props => props.gridTemplateColumns};
    `
    Menu = window.styled.div`

    `
    const Image = window.styled.img`

    `
    return (
        <header>
            <Container className='container' maxWidth="1764px">
                <GridCol disp="grid" gridTemplateColumns="auto auto auto auto">
                    <Image src='img/coffee-house-creative-logo-3B1F1F60F9-seeklogo 1.png'></Image>
                    <Menu />
                </GridCol>
            </Container>
        </header>
    );

    function Menu(props) {
        return (
            <GridCol disp="grid" gridTemplateColumns='auto auto'>
                <div>123</div>
                <div>234</div>
            </GridCol>
        )
    }

    function Grid(props) {
        
    }
}

ReactDOM.render(<App />, document.getElementById("root"));