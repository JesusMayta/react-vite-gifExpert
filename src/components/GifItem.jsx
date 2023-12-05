
export const GifItem = ({ title, url }) => {
    return (
        <div>
            <img width="300" height="400" src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
