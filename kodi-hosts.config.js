exports.kodiConfig = [{
    id: 'kodi', // For now leave the first set to kodi.
    // YOUR_EXTERNAL_PROTOCOL (http or https)
    kodiProtocol: 'http',
    // YOUR_EXTERNAL_IP_ADDRESS
    kodiIp: '192.168.1.100',
    // YOUR_KODI_PORT
    kodiPort: '8080',
    // YOUR_KODI_USER_NAME
    kodiUser: 'pacocf',
    // YOUR_KODI_PASSWORD
    kodiPassword: 'materia12'
}
    // You can use this to specify additonal kodi installation, that you'd like to control.
    // ,{id: 'bedroom', // For example the bedroom, will allow you to create IFTTT sentences like: `okay google bedroom play ..`
    // YOUR_EXTERNAL_PROTOCOL (http or https)
    // kodiProtocol: 'http',
    // // YOUR_EXTERNAL_IP_ADDRESS
    // kodiIp: '192.168.1.18',
    // // YOUR_KODI_PORT
    // kodiPort: '8080',
    // // YOUR_KODI_USER_NAME
    // kodiUser: 'kodi',
    // // YOUR_KODI_PASSWORD
    // kodiPassword: 'myKodiPassword'}
];

exports.globalConfig = {
    // YOUR_CONNECTION_PASSWORD
    authToken: '91a8cee0f4a196d216666b108970051d82ec1e7f',
    // YOUR_LOCAL_LISTENING_PORT
    listenerPort: '8099',
    // YOUR_YOUTUBE_API_KEY
    youtubeKey: 'AIzaSyBYKxhPJHYUnzYcdOAv14Gmq-43_W9_79w'
};
