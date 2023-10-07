# Weather App 

This project is part of [The Odin Project's](https://www.theodinproject.com/) curriculum on Front End Web Development. Its purpose is to build an understanding of how to make API calls, and using that data on the front end. 

I used an async/await function to call the API, and then built a grid that displays the data in tiles. I was inspired on the look of the tiles by the Apple Weather app, and photos of the new VisionOS tiles. 

I was also had watched a few anime movies as I was starting, and really wanted to have something in the style of a Studio Ghibli film. So, I had a plan to use some gifs as the changeable background of the page. I didn't end up finding enough though, and I ended up changing my mind and using Stable Diffusion to generate a bunch of anime landscapes in various forms of weather. I then used the conditions code from the API call in a switch statement to change the background in the location you are looking at. 

## Installation

1. Clone this repository

```bin
git clone git@github.com:shaun-b1/weather-app.git
cd weather-app
```

2. Install the npm dependencies

```bin
npm install
```

3. Run a build
```bin
npm run build
```

4. Open the `index.html` file in your browser

## Usage

Simply enter a city name in the search bar and you can see weather info for the current moment. You will also see the next three days of weather (today, tomorrow and the day after) in the "forecast" section. WeatherAPI's free plan won't allow any more than that. 

![Usage demo](<readme images/readme_demo.png>)

If the city you enter comes up with something in another country, also enter the country name after a comma. 

![Usage demo including country name](<readme images/readme_demo_long.png>)

## Some images 

Below are some images from the project:

![Heavy rain](<readme images/readme_heavy_rain.png>)
![Heavy snow](<readme images/readme_heavy_snow.png>)
![Light rain](<readme images/readme_light_rain.png>)
![Light snow](<readme images/readme_light_snow.png>)
![Overcast](<readme images/readme_overcast.png>)
![Storm](<readme images/readme_storm.png>)
![Sunny](<readme images/readme_sunny.png>)
![Mobile](<readme images/readme_mobile.png>)