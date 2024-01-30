const token = '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';

const fetchUser = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    const response = await fetch(url
        // , {
        // headers: {
        //     'Authorization': `Bearer ${token}`,
        //     'X-GitHub-Api-Version': '2022-11-28'
        // }
    // }
    );
    if (!response.ok) {
        const errorResponse = await response.json();
        const message = errorResponse.message;
        return {
            success: false,
            message: message
        }
    }

    const data = await response.json();
    return { ...data, success: true };
}

export { fetchUser }