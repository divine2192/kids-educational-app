export const registerUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    if (users.find(user => user.email === email)) {
        throw new Error('User already exists');
    }

    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
};

export const loginUser = (email, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const user = users.find(user => user.email === email && user.password === password);

    if (!user) {
        throw new Error('Invalid email or password');
    }

    localStorage.setItem('currentUser', JSON.stringify(user));
};

export const logoutUser = () => {
    localStorage.removeItem('currentUser');
};

export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem('currentUser'));
};
