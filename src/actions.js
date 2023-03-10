import { redirect } from "react-router-dom";

const URL = "https://cheese-backend-bdnx.onrender.com/"

export const createAction = async ({ request }) => {
    const formData = await request.formData()

    const newCheese = {
        name: formData.get("name"),
        image: formData.get("image"),
        countryOfOrigin: formData.get("countryOfOrigin"),
    }

    await fetch(URL + "/cheese", {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newCheese),
    })
    return redirect('/')
}