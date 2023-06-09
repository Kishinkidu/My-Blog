import { useState, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Card, SignInForm } from "../../components";
import { isEmail, isPasswordValid } from "../../utils/strings";
import { signIn } from "../../service/supabase";
import Swal from "sweetalert2";
import github from "../../assets/github.svg"


export default function SignIn() {

    const navigate = useNavigate();
    const { user, setUser, saveUser } = useContext(AuthContext);

    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });

    const [isValid, setIsValid] = useState({
        isValidEmail: false,
        isValidPassword: false,
    });

    const handleInputsChange = (event) => {
        const { value, name } = event.target;

        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = inputs;

        if (!isEmail(email) || !isPasswordValid(password)) {
            setIsValid({
                isValidEmail: !isEmail(email),
                isValidPassword: !isPasswordValid(password),
            });
            return;
        }
        setIsValid({
            isValidEmail: false,
            isValidPassword: false,
        });

        const user = await signIn(inputs);

        if (!user.ok) {
            Swal.fire({
                text: user.error.message,
                icon: "error",
            });
            return;


        }

        saveUser(user.data.user);
        setUser(user.data.user);

    };

    if (user) navigate("/home");

    return (
        <>
            <div className="h-screen flex justify-center items-center bg-gray-200">
                <Card>
                    <h1 className="text-2xl">Sign in with email</h1>
                    <p className="mt-6 text-gray-900 font-light">
                        Enter the email address associated with your account.
                    </p>
                    <SignInForm
                        handleSubmit={handleSubmit}
                        handleInputsChange={handleInputsChange}
                        inputs={inputs}
                        isValid={isValid}
                    />
                </Card>
            </div>
        </>
    );
}
