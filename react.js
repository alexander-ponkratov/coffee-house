function App() {
    const Container = window.styled.div`
        max-width: ${props => props.maxW};
    `
    const GridCol = window.styled.div`
        display: ${props => props.disp};
        width: 100%;
        grid-template-columns: ${props => props.gridTemplateColumns};
        align-items: center;
        justify-items: center;
    `
    const Image = window.styled.img`

    `

    const HeaderA = window.styled.a`
        text-decoration: none;
    `

    const SearchForm = window.styled.form`
        width: 351px;
        height: 55px;
        background: rgba(255, 255, 255, 0.15);
        border-radius: 60px;
        justify-self: end;
    `
    return (
        <header>
            <Container className='container' maxW="1764px">
                <GridCol disp="inline-grid" gridTemplateColumns="auto auto auto auto">
                    <Image className="h-logo" src='img/coffee-house-creative-logo-3B1F1F60F9-seeklogo 1.png'></Image>
                    <GridCol disp="inline-grid" gridTemplateColumns="auto auto auto auto auto">
                        <HeaderA href="/" className="subheading">Главная</HeaderA>
                        <HeaderA href="/" className="subheading">О кофейне</HeaderA>
                        <HeaderA href="/" className="subheading">Каталог</HeaderA>
                        <HeaderA href="/" className="subheading">Отзывы</HeaderA>
                        <HeaderA href="/" className="subheading">Блог</HeaderA>
                    </GridCol>
                    <Image className="h-cart" src="img/cart.badge.plus.png"/>
                    <SearchForm />
                </GridCol>
            </Container>
        </header>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));