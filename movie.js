const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";


const movieEl = document.createElement("div");
        movieEl.innerHTML = `
        <div class="py-3 sm:max-w-xl sm:mx-auto">
            <div class="bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8">
            <div class="h-48 overflow-visible w-1/2">
                <img class="rounded-3xl shadow-lg" src=${IMG_PATH + poster_path} alt="">
            </div>
            <div class="flex flex-col w-1/2 space-y-4">
                <div class="flex justify-between items-start">
                    <h2 class="text-3xl font-bold">${title}</h2>
                <div class="${rateFun(vote_average)} font-bold rounded-xl p-2">${Math.round(vote_average)}</div>
            </div>
                <div>
                    <div class="text-sm text-gray-400">Series</div>
                    <div class="text-lg text-gray-800">${release_date}</div>
                </div>
                    <p class=" text-gray-400 max-h-40 overflow-y-hidden">${overview.slice(0, 65)}...</p>
                <div class="flex text-2xl font-bold text-a">$83.90</div>
            </div>
            </div>
        </div>`
        main.appendChild(movieEl);