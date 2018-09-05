function BuildLoginPage() {
    document.querySelector(".pageWrapper").innerHTML += render();
}

function render() {
    return `
    <div class="LoginWrapper">
        <form action="" class="LoginForm">
            <div class="field">
                <label for="input" class="label">User Name</label>
                <p class="control has-icons-left has-icons-right">
                    <input type="text" class="input" name="input" type="email" placeholder="Email">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"> </i>
                    </span>
                </p>
            </div>
            <div class="field">
                <label for="input" class="label">Password</label>
                <p class="control has-icons-left">
                    <input type="text" class="input" type="password" placeholder="Password">
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"> </i>
                    </span>
                </p>
            </div>
            <div class="control space-bw-clmn">
                <button class="button is-link">Submit</button>
                <a href="">Forgot Password?</a>
            </div>
        </form>
    </div>
    `;
}

BuildLoginPage();
console.log("build Login end");