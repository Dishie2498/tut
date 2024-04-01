export default function UserProfile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 text-white">
            <h1>Profile of id</h1>
            <hr/>
            <h2 className="text-red-700">{params.id}</h2>
        </div>
    )
}