'use server'
import"../../../styles/login.css"
import Link from "next/link";
import BookLogo from "@/components/client/BookLogo";
import loginAction from "@/actions/login";

export default async function Page() {    

    return(
        <main className="flex items-center justify-center w-screen h-screen overflow-hidden relative bg">
            <div className="absolute top-0 left-0 z-10 bg-opacity-0 backdrop-blur-md w-screen h-screen"></div>
            <section className="w-3/5 h-4/5 rounded-3xl overflow-hidden bg-white grid grid-cols-5 z-20 items-center justify-center">
                <div className="w-full h-full flex items-center justify-center gap-5 col-span-3 bg-blue-400 box-shadow relative">
                    <BookLogo/>
                    <p>
                        <span className="text-white font-serif font-bold text-5xl italic">
                            Tu Biblioteca
                        </span>
                        <span className="text-white font-serif font-light text-5xl italic">
                            Virtual
                        </span>
                    </p>
                    <div className="absolute top-5 -right-64 w-64 h-12 -z-10 rounded-r-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-300">
                        <span className="text-white font-serif font-semibold text-xl italic">Bienvenido de nuevo</span>
                    </div>
                </div>
                <div className="w-full h-full flex flex-col items-center justify-center gap-10 col-span-2 relative">
                    <h4 className="w-full text-center font-serif font-bold text-2xl italic text-indigo-500">
                        Ingresa los datos de tu cuenta
                    </h4>
                    <form action={loginAction} className="w-[65%] h-fit font-serif text-lg font-light flex flex-col gap-10 items-center">
                        <div className="relative border-b-2 border-gray-200 w-full">
                            <input required placeholder="Ingrese su correo electronico" type="email" name="email"
                                   id="email" minLength={8} maxLength={128}
                                   className="w-full h-8 bg-opacity-30 bg-white px-2 outline-none placeholder:text-gray-700 font-extralight invalid:text-red-500 hover:invalid:text-red-400"/>
                        </div>
                        <div className="relative border-b-2 border-gray-200 w-full">
                            <input required placeholder="Ingrese su contraseña" type="password" name="password"
                                   id="password" minLength={8} maxLength={16}
                                   className="w-full h-8 bg-opacity-30 bg-white px-2 outline-none placeholder:text-gray-700 font-extralight invalid:text-red-500 hover:invalid:text-red-400"/>
                        </div>
                        <button type="submit" className="w-1/2 h-10 rounded-full bg-blue-400 text-white font-semibold hover:bg-blue-300">
                            Iniciar sesión
                        </button>
                        <Link className="text-base" href={"/register"}>
                                ¿No tienes una cuenta? <span className="text-indigo-500 hover:text-indigo-300">Registrate</span>
                        </Link>
                        <Link href={"/forgo-password"} className="absolute bottom-5 text-sm text-indigo-500 hover:text-indigo-300 w-full text-center">
                            ¿Olvidaste tu contraseña?
                        </Link>
                    </form>
                </div>
            </section>
        </main>
    )
}