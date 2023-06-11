export default function getImage(url) {
    const publicPath = process.env.BASE_URL
    return publicPath ? `${publicPath}${url}` : url
}