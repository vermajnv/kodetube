function BuildPageContainer() {
    document.querySelector(".pageWrapper").innerHTML += render();
}

function render() {
    return `
    <section class="section">
        <div class="container">
            <div class="column">
                
            </div>
            <div class="columns is-multiline has-margin-150">
                <div class="column is-one-fourth ">
                    <article class="media notification is-info is-size-4">
                        <figure class="media-left">
                            <span class="icon has-text-success is-medium is-medium">
                                <i class="fas fa-check-square"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4">LOREM</h1>
                                <p class="is-size-5 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque?
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column is-one-fourth ">
                    <article class="media notification is-danger is-size-4">
                        <figure class="media-left">
                            <span class="icon has-text-success is-medium">
                                <i class="fas fa-check-square"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4">LOREM</h1>
                                <p class="is-size-5 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque?
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column is-one-fourth ">
                    <article class="media notification is-success is-size-4">
                        <figure class="media-left">
                            <span class="icon has-text-success is-medium">
                                <i class="fas fa-check-square"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4">LOREM</h1>
                                <p class="is-size-5 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque?
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column is-one-fourth ">
                    <article class="media notification is-info is-size-4">
                        <figure class="media-left">
                            <span class="icon has-text-success is-medium">
                                <i class="fas fa-check-square"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4">LOREM</h1>
                                <p class="is-size-5 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque?
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column is-one-fourth ">
                    <article class="media notification is-warning is-size-4">
                        <figure class="media-left">
                            <span class="icon has-text-success is-medium">
                                <i class="fas fa-check-square"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4">LOREM</h1>
                                <p class="is-size-5 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque?
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column is-one-fourth ">
                    <article class="media notification is-info is-size-4">
                        <figure class="media-left">
                            <span class="icon has-text-success is-medium">
                                <i class="fas fa-check-square"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4">LOREM</h1>
                                <p class="is-size-5 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque?
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column is-one-fourth ">
                    <article class="media notification is-info is-size-4">
                        <figure class="media-left">
                            <span class="icon has-text-success is-medium">
                                <i class="fas fa-check-square"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4">LOREM</h1>
                                <p class="is-size-5 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque?
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column is-one-fourth ">
                    <article class="media notification is-black is-size-4">
                        <figure class="media-left">
                            <span class="icon has-text-success is-medium">
                                <i class="fas fa-check-square"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4">LOREM</h1>
                                <p class="is-size-5 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque?
                                </p>
                            </div>
                        </div>
                    </article>
                </div>

                <div class="column is-one-fourth ">
                    <article class="media notification is-white is-size-4">
                        <figure class="media-left">
                            <span class="icon has-text-success is-medium">
                                <i class="fas fa-check-square"></i>
                            </span>
                        </figure>
                        <div class="media-content">
                            <div class="content">
                                <h1 class="title is-size-4">LOREM</h1>
                                <p class="is-size-5 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, doloremque?
                                </p>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
    `;
}

BuildPageContainer();