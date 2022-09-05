

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '82c18cb056msheb17aaf34458d43p1c2e58jsn377f9c41f3db',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

export const FetchFromApi = async (url)=>{
 const rawdata = await fetch(`https://youtube-v31.p.rapidapi.com/${url}`, options)
 const data = await rawdata.json()
 return data

}