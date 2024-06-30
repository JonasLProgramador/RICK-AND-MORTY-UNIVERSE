import Header from "../../components/header";

const MainPage = () => {
    const items = [ 
        { id: 1, to: "/", text: "Home" },
        { id: 2, to: "/characters", text: "Personagens" }
    ];

    return (
        <>
            <Header links={items} />
            <div className='flex flex-row h-screen w-screen justify-center items-center bg-snow bg-opacity-100 bg-[url("./src/assets/rick-and-morty.gif")] bg-no-repeat bg-center bg-cover'>
                <main className="flex flex-col justify-center items-center text-center w-3/4 h-2/4 bg-darkSlateGray bg-opacity-90 rounded-xl p-5 transition duration-150 hover: ease-in hover:scale-110">
                    <h1 className="text-paleGreen text-5xl mb-6 transition duration-150 hover: ease-in hover:scale-110">Explore o Mundo de Rick and Morty</h1>
                    <p className="text-turquoise text-2xl mb-10 transition duration-150 hover: ease-in hover:scale-110">Veja em detalhes personagens específicos ou aleatórios do universo Rick and Morty</p>
                    <a className="w-2/4 h-16 bg-paleGreen text-center text-3xl flex items-center justify-center rounded-lg transition duration-150 hover: ease-in hover:scale-110" href="/characters">Ver personagem aleatório em detalhes</a>
                </main>
            </div>
        </>
    );
}

export default MainPage;
