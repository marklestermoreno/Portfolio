export default function LoadingData() {
    return (
        <div className="loading-v2-container">
            <div className="loading-v2-image-container">
                <img src="./loadingV2.gif" alt="image-loading" className="image-loading-v2" />
            </div>
            <p className="loading-v2-label"> Please take a minute while we load the data for you! </p>
        </div>
    )
}