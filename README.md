# Discussion

Discussion is a tool to help users transcribe and determine key topics being discussed in conversations. It uses google's speech to text API to convert a audio stream or file into text. We can use that text to find structure and determine structure using LDA (one of the types of topic modeling).


##Setup Instructions

For this app, you will need both node, python and the google-cloud-speech authentication credentials. Use the requirements.txt (in the server folder) and package.json (in the static folder) to determine dependencies for the server and the front-end.

### Getting Google Cloud Authentication

Follow this guide by google: https://cloud.google.com/speech-to-text/docs/quickstart-client-libraries to create your google api credentials.


