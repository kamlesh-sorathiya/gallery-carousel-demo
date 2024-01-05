
export const getImages = async () => {
    const respo = await fetch('http://localhost:3030/imagesAPI')
    return respo.json();

}