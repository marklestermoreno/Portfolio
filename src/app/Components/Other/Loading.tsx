
import "./utils.css"

export default function Loading() {
    return (
        <div className="flex justify-center items-center text-center min-h-screen bg-cover"
            style={{
                backgroundImage: "url('/background.jpg')"
            }}>
            <img src="./loading.gif" alt="image-loading" className="image-loading" />
        </div >
    )
}