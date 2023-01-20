const URL = "https://cheese-backend-bdnx.onrender.com/"

export const cheeseLoader = async () => {
    const response = await fetch (URL + "/cheese")
    const cheese = await response.json()
    return cheese
}