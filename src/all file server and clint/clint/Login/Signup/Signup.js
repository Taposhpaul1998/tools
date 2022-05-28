import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebaseinit';
import useToken from '../../Hooks/useToken';
import Footer from '../../Shear/Footer/Footer';
import Loading from '../../Shear/Loading/Loading';
import Socile from '../Socile/Socile';

const Signup = () => {
    const { register, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth)
    const [updateProfile] = useUpdateProfile(auth);
    const [token] = useToken(user);
    const navigate = useNavigate();

    if (loading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate('/deshbord');;
    }

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const password = data.password;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

    }


    return (
        <>
            <div className="flex h-screen justify-center items-center bg-hero-pattern bg-teal-600">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="text-xl font-semibold  text-center">Sign Up</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <input type="name" placeholder=" Name" class="input input-bordered w-full max-w-xs" required {...register("name")} />
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <input type="email" placeholder=" Email" class="input input-bordered w-full max-w-xs" required {...register("email")} />
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs" required {...register("password")} />

                            <input type="submit" value={"Sign Up"} class="btn btn-accent w-full max-w-xs text-lg font-normal mt-3" />
                        </form>
                        <Socile></Socile>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default Signup;