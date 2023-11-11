import Cards from '../components/Cards'
import ListCards from '../components/ListCards'

function Cars() {
    return (
        <>
            <div className="container px-4 sm:px-6 lg:px-8">
                <h1 className="m-7 font-cursiva text-4xl">Autos disponibles</h1>
                <div className="justify-start my-5 flex flex-wrap mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                    <ListCards className="my-5"></ListCards>
                </div>
            </div>
        </>
    )
}

export default Cars
