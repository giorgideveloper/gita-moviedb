import axios from 'axios';

const setMovie = document.getElementById('set');
const api_key = '?api_key=5542c44cdf4bd84873c85d8e27e915d5';
const img_url = 'https://image.tmdb.org/t/p/w500/';

/* Get movie with axios */
async function getMovies() {
	const result = await axios.get(
		`https://api.themoviedb.org/3/movie/popular${api_key}`
	);
	const data = result.data.results;
	console.log(data);
	/* loop movie  */
	for (let i = 0; i < data.length; i++) {
		let set = document.createElement('div');
		set.innerHTML = ` 

        <div class="card shadow tt" data-bs-toggle="tooltip" data-bs-placement="top"
        data-bs-custom-class="custom-tooltip"
        data-bs-title="Description: ${data[i].overview}  Data: ${data[i].release_date}"  id=myBtn style="width: 100%; min-height: 250px; cursor:pointer " >
          <img src=${img_url}${data[i].backdrop_path} class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title fs-7">${data[i].title}</h5>
            <p class="card-text " style="font-size:14px"></p>
           
          </div>
        </div>
     `;

		set.classList.add('col-12');
		set.classList.add('col-lg-4');
		set.classList.add('col-md-6');
		set.classList.add('pt-3');
		set.classList.add('My-tippy');

		setMovie.append(set);
	}
	const tooltipTriggerList = document.querySelectorAll(
		'[data-bs-toggle="tooltip"]'
	);
	const tooltipList = [...tooltipTriggerList].map(
		tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl)
	);
}

export default getMovies();
