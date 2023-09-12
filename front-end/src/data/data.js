

 export async function fetchLogin(props) {
    const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: props.email,
            password: props.password,
        }),
    });
    return await response.json()
}

export async function userProfile(token) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            'Authorization': `Bearer ${token}`
        },
    });
    return await response.json();
}

export async function userEditProfile(token, username) {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers : {
            Accept: "application/json",
            "Content-type" : "application/json",
            'Authorization': `Bearer ${token}`
        },
        body : JSON.stringify({
            userName: username,
        }),
    });
    return await response.json()
}