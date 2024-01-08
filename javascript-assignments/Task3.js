function createPromise(title) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(title);
        }, 1000);
    });
}

async function usingAsyncAwait() {
    try {
        const result = await createPromise("Async function using async/await");
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

function usingThenCatch() {
    createPromise("Promise function using .then() and .catch()")
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            console.error(error);
        });
}

// Call the functions
usingAsyncAwait();
usingThenCatch();
