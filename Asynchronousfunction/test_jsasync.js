function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function login() {
    await delay(4000);
    console.log('Login successful somya agarwal');
}

async function getData() {
    await delay(4000);
    console.log('Get data from user');
}

async function calculateData() {
    await delay(4000);
    console.log('Calculating data from user');
}

async function sendSms() {
    await delay(4000);
    console.log('Sending message to user.');
}

async function logout() {
    await delay(4000);
    console.log('Logout successful');
}

async function f1() {
    try {
        await login();
        await getData();
        await calculateData();
        await sendSms();
        await logout();
        console.log(" All operations done");
    } catch (err) {
        console.log('Error: ' + err);
    }
}

f1();



