const br = {
  MESSAGE_CONNECTED: 'Conectado com sucesso!',
  MESSAGE_NOT_FOUND: 'Não encontrado, tente novamente.',
  MESSAGE_TOO_LARGE: 'Músicas com mais de *15 minutos* não são permitidas!',
  MESSAGE_WAIT_QUEUE:
    'Alguma música está sendo baixada no momento. Aguarde alguns instantes e envie o comando novamente',
  MESSAGE_DOWNLOAD_STARTED:
    '*INICIANDO DOWNLOAD:* _Esta ação pode demorar um pouco!_',
  MESSAGE_DOWNLOAD_ERROR: 'Erro, tente novamente.',
  MESSAGE_NO_DOWNLOADED_MUSICS: 'Não temos músicas salvas',
  MESSAGE_ERROR: 'Erro ao concluir a operação.',
  COMMAND_PLAY: '!play',
  COMMAND_INFO: '!info',
  COMMAND_MUSICS: '!musics',
};

const en = {
  MESSAGE_CONNECTED: 'Successfully connected!',
  MESSAGE_NOT_FOUND: 'Not found. Try again',
  MESSAGE_TOO_LARGE:
    'You can not download musics with more than 15 minutes duration. Please contact the developer (Amiyo) for more info.',
  MESSAGE_WAIT_QUEUE:
    'Download proccess got taken by another user. Await then finish to continue',
  MESSAGE_DOWNLOAD_STARTED:
    '*DOWNLOAD STARTED:* _Please wait, this action may take some minutes_',
  MESSAGE_DOWNLOAD_ERROR: 'Error! Try again. Please contact the developer (Amiyo) for more info.',
  MESSAGE_NO_DOWNLOADED_MUSICS: 'No stored musics',
  MESSAGE_ERROR: 'Error to complete operation. Please contact the developer (Amiyo) for more info.',
  MESSAGE_RIGHT_PLAY: 'Wrong Command ! Use *!play* instead',
  MESSAGE_HELP: 'Download music by searching on YouTube: *!play <query>*\nDownload music by link: *!play <link>*\nTo view this help message: *!help*\nAdditional help: Contact the developer, Amiyo.',
  MESSAGE_DOWNLOADED: 'File downloaded !',
  MESSAGE_SENT: 'File sent !',
  COMMAND_PLAY: '!play',
  COMMAND_INFO: '!info',
  COMMAND_MUSICS: '!musics',
  COMMAND_WRONG_PLAY_1: '! play',
  COMMAND_HELP: '!help'
};

export default { br, en };
