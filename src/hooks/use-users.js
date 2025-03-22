export const getUsers = async () => {
    const response = await fetch("https://server-6g34.onrender.com/api/users", {
        method: "POST",
        credentials: "include",
        headers: {
            "Cache-Control": "no-store",
        },
    });

    return await response.json();
};
