import TextInput from "../components/TextInput";
import InputLabel from "../components/InputLabel";
import PrimaryButton from "../components/PrimaryButton";

function Register() {
    return (
        <div className="flex justify-center items-center mt-12">
            <form action="" style={{ width: '50%', maxWidth: '500px' }}>
                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="user" value="User" />
                    <TextInput id="user" type="text" name="user" className="mt-1 block w-full p-2 border border-black" autoComplete="username" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="Name" value="Nombre" />
                    <TextInput id="Name" type="text" name="Name" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="Password" value="Password" />
                    <TextInput id="Password" type="password" name="Password" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="mt-4 mb-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />
                    <TextInput id="password_confirmation" type="password" name="password_confirmation" className="mt-1 block w-full p-2 border border-black" required />
                </div>

                <div className="">
                    <PrimaryButton className="w-full">Register</PrimaryButton>
                </div>
            </form>
        </div>
    );
}

export default Register;
