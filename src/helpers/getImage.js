export default function getImage(url) {
    const publicPath = process.env.BASE_URL
    console.log(publicPath)
    return publicPath ? `${publicPath}${url}` : url
}