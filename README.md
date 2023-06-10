# NewsHUB: 
Your Source for the Latest News

NewsHUB is a website that provides new articles on various topics. This aplication provides 20 articles from every category type, and it loads different articles when the page is reloaded.
## This application uses:
- HTML5
- CSS3
- JavaScript
- React
- Next.js

## Libraries used:
- dayjs
- react-icons

## Installation
1. Clone the repository and navigate to it with the following commands:

```bash
git clone https://github.com/RubsRafa/news-app.git

cd news-app
```

2. Don't forget to install the dependencies:

```bash
npm install
#or
npm i
```

3. Star the project:

```bash
npm start
```

*The website will run on port 3000. If you want it to run on another port, you can add the command:

```bash
-p <PORT>
```

 # API
 This application was built based on News API documentation on 06/2023 (https://newsapi.org/). 
 - Don't forget to request an API key and add it to your .env file as NEXT_PUBLIC_API_KEY.
 - If you use another public API, don't forget to change the parameters, API URL on you local .env file and on src/services/api.js (if you need to change language, article date and sorting) or src/services/newsApi.js (for content and length of articles).