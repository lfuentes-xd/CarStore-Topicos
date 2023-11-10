import Cards from '../components/Cards'
import ListCards from '../components/ListCards'

function Cars() {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="m-7 font-cursiva text-4xl">Autos disponibles</h1>
                <div className="flex flex-wrap mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">
                    <ListCards></ListCards>
                </div>
            </div>
        </>
    )
}

export default Cars
