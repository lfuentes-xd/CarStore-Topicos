import Cards from '../components/Cards'
import ListCards from '../components/ListCards'

function Cars() {
    return (
        <>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="m-7 font-cursiva text-4xl">Autos disponibles</h1>
                <div className="flex flex-wrap -mx-2 overflow-hidden sm:-mx-2 md:-mx-2 lg:-mx-2 xl:-mx-2">

                    <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
                        <h1 className='my-5'>Autos disponibles</h1>
                        <ListCards></ListCards>
                    </div>

                    <div className="my-2 px-2 w-full overflow-hidden sm:my-2 sm:px-2 sm:w-1/2 md:my-2 md:px-2 md:w-1/2 lg:my-2 lg:px-2 lg:w-1/2 xl:my-2 xl:px-2 xl:w-1/2">
                        <h1 className='my-5'>Mas informacion</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Cars
