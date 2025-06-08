const default_lang = 'en-US'
// You can remove whole langage or add new language here:
const translations = {
    'en-US': {
        language_name: 'English',
        title: 'WiFi Configuration',
        saved_wifi: 'Saved WiFi',
        new_wifi: 'New WiFi',
        password: 'Password:',
        connect: 'Connect',
        select_wifi: 'Select an 2.4G WiFi from the list below:',
        connection_failed: 'Connection failed',
        unable_connect: 'Unable to connect to WiFi',
        invalid_ssid: 'Invalid SSID',
        will_restart: 'Device will restart in',
        seconds: 'seconds',
    },
    'zh-CN': {
        language_name: '中文',
        title: 'WiFi 配置',
        saved_wifi: '已保存的 WiFi',
        new_wifi: '新的 WiFi',
        password: '密码:',
        connect: '连接',
        select_wifi: '从下面列表选择 2.4G WiFi:',
        connection_failed: '连接失败',
        unable_connect: '无法连接到 WiFi',
        invalid_ssid: '无效的 SSID',
        will_restart: '设备将在',
        seconds: '秒后重启',
    },
};

var languages_select = {}
var shorts = {}
// Add short translation names ('en', ..)
for (const [id, dict] of Object.entries(translations)) {
    languages_select[id] = dict.language_name;
    const parts = id.split("-");
    let short_id;
    for(var i = 1; i < parts.length; i++) {
        short_id = parts.slice(0,1).join("-");
        if (!translations.hasOwnProperty(short_id)) {
            shorts[short_id] = id;
        }
    }
}
for (const [short_id, id] of Object.entries(shorts)) {
    translations[short_id] = translations[id];
}
shorts = null;
