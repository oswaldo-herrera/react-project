import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function Register() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm();

    


    
    async function onSubmit(data) {
        if (data.password != data.passwordConfirmation) {
            setError("passwordError", {
                message: "Password doesn't match password confirmation",
            });
            return;
        }

        const response = await fetch("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify({
                name: data.name,
                username: data.username,
                email: data.email,
                password: data.password,
                imgprofile: data.imgprofile,
        }),
        headers: { "Content-Type": "application/json" },
        });

        const responseData = await response.json();
        console.log(responseData);
        if (responseData?.err) {
            setError("root", { message: "Invalid data, change it and try again" });
        } else if (responseData?.data?._id) {
            localStorage.setItem("token", responseData?.data?._id);
            localStorage.setItem("imgProfileUser", responseData?.data?.imgprofile);
            localStorage.setItem("nameUser", responseData?.data?.name);
            navigate("/");
        } else {
            setError("root", { message: "Invalid data, change it and try again" });
        }
            
        
    }

    return (
        <>
        
        <img className="w-20 mr-4" src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png" alt="" />
        <h1 className="text-3xl font-bold p-0 m-0">Join the DEV Community</h1>
        <p className="text-2xl p-0 m-0">DEV Community is a community of 1,237,804 amazing developers</p>

        <h2 className="text-2xl font-bold">Registrate:</h2>


        <div className="size-1/2 max-w-[600px] flex flex-col border rounded-md p-4">
      
      <form onSubmit={handleSubmit(onSubmit)} className="p-3">
        <h2 className="font-semibold text-md pt-3">Nombre *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("name", {
            required: { value: true, message: "Name required" },
          })}
        />
        {errors.name && <p className="text-red-500">{errors.name?.message}</p>}

        <h2 className="font-semibold text-md pt-3">Usuario *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("username", {
            required: { value: true, message: "Username required" },
          })}
        />
        {errors.username && (
          <p className="text-red-500">{errors.username?.message}</p>
        )}

        <h2 className="font-semibold text-md pt-3">Imagen de perfil(link) *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("imgprofile", {
            required: { value: true, message: "Link required" },
          })}
        />

        <h2 className="font-semibold text-md pt-3">Email *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("email", {
            required: { value: true, message: "Email required" },
          })}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}

        <h2 className="font-semibold text-md pt-3">Password *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("password", {
            required: { value: true, message: "Password required" },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}

        <h2 className="font-semibold text-md pt-3">Confirmar Password  *</h2>
        <input
          className="border border-gray-400 rounded-md p-1 w-full"
          type="text"
          {...register("passwordConfirmation", {
            required: {
              value: true,
              message: "Password confirmation required",
            },
          })}
        />
        {errors.passwordConfirmation && (
          <p className="text-red-500">{errors.passwordConfirmation?.message}</p>
        )}
        {errors.passwordError && (
          <p className="text-red-500">{errors.passwordError?.message}</p>
        )}

        <input
          type="submit"
          value="Sign up"
          className="rounded py-2 bg-violet-700 w-full text-white cursor-pointer hover:bg-violet-800 mt-5"
        />
        {errors.root && <p className="text-red-500">{errors.root?.message}</p>}
      </form>
    </div>


</>



        
        
    )
}