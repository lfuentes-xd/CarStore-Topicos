import PrimaryButton from '../../components/PrimaryButton'
import LinktoButton from "../../components/LinktoButton"
function ViewCar(props) {
    const { model, year, color, type, fuel, disponibility, image, setShowCarInfo } = props;
    return (
        <>
            <div className="Container flex m-10">
                <div className="w-1/2">
                    <h1>
                        <img className="rounded-t-lg" src={'http://localhost/CarStore-Topicos/public/storage/' + image} alt="" />
                    </h1>
                </div>
                <div className="w-1/2 font-small">
                    <h1 className="text-3xl ml-3">Modelo del auto: {model}</h1>
                    <h1 className="text-3xl ml-3">Año del auto: {year}</h1>
                    <h1 className="text-3xl ml-3">Carroceria del auto: {type}</h1>
                    <h1 className="text-3xl ml-3">Color del auto: {color}</h1>
                    <h1 className="text-3xl ml-3">Tipo de combustible del auto: {fuel}</h1>
                    <PrimaryButton className='w-full mt-5 ml-5'>Comprar automovil</PrimaryButton>

                    <a onClick={() => props.setShowCarInfo(false)} className="w-full ml-5 mt-5 inline-flex justify-center px-4 py-2 bg-black rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 focus:bg-gray-700 ">
                        Regresar
                        {/* <img src={NextIcon} className="w-6 h-6" alt="" /> */}
                    </a>
                </div>
            </div>
        </>
    )
}

export default ViewCar
